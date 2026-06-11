"""Runs the failure-injection experiment across all pipeline configurations,
error types, and corpus queries, and writes a results CSV.

Usage:
    python -m failure_propagation.run_experiment [output_csv]

For each (pipeline config, query) pair, a clean baseline run is executed
first. Then, for each error type, a perturbed run is executed and compared
against the baseline to classify the propagation pattern (compounding,
self-correcting, isolated, or ambiguous). Results are written to a CSV and a
summary table plus intervention-point recommendations are printed.
"""

import os
import sys

import pandas as pd

from .corpus import QUERIES, all_chunks
from .detection import classify_propagation
from .failure_injection import ErrorType, FailureInjector
from .intervention import InterventionPointDetector
from .pipeline import PIPELINE_CONFIGS, AgenticRAGPipeline
from .retrieval import TfidfRetriever

DEFAULT_OUTPUT_CSV = os.path.join(os.path.dirname(__file__), "propagation_results.csv")


def run(output_csv: str = DEFAULT_OUTPUT_CSV) -> pd.DataFrame:
    chunks = all_chunks()
    retriever = TfidfRetriever(chunks)
    injector = FailureInjector(chunks)
    intervention_detector = InterventionPointDetector()

    rows = []
    for config_name in PIPELINE_CONFIGS:
        pipeline = AgenticRAGPipeline(config_name, retriever, injector)
        for item in QUERIES:
            query = item["query"]
            _, baseline_trace = pipeline.run(query, error_type=None, is_baseline=True)

            for error_type in ErrorType:
                _, trace = pipeline.run(query, error_type=error_type, is_baseline=False)
                label, injection_idx, fidelities = classify_propagation(trace, baseline_trace)
                intervention_detector.record(trace, label)

                rows.append(
                    {
                        "config": config_name,
                        "domain": item["domain"],
                        "query": query,
                        "error_type": error_type.value,
                        "propagation_label": label,
                        "injection_step_index": injection_idx,
                        "injection_fidelity": fidelities[0] if fidelities else None,
                        "final_fidelity": fidelities[-1] if fidelities else None,
                        "n_steps_after_injection": len(fidelities),
                    }
                )

    results_df = pd.DataFrame(rows)
    results_df.to_csv(output_csv, index=False)

    print(f"Wrote {len(results_df)} rows to {output_csv}\n")
    print("Propagation label counts by pipeline config:")
    print(results_df.groupby(["config", "propagation_label"]).size().unstack(fill_value=0))

    print("\nPropagation label counts by error type:")
    print(results_df.groupby(["error_type", "propagation_label"]).size().unstack(fill_value=0))

    print("\nIntervention point recommendations:")
    recommendations = intervention_detector.recommendations()
    if not recommendations:
        print("  (no compounding runs observed)")
    for rec in recommendations:
        print(f"  - {rec['step']}: {rec['compounding_runs']} compounding run(s), "
              f"avg fidelity drop {rec['avg_fidelity_drop']:.2f}")
        print(f"    {rec['recommendation']}")

    return results_df


if __name__ == "__main__":
    output_path = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_OUTPUT_CSV
    run(output_path)
