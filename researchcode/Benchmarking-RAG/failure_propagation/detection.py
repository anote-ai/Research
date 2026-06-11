"""Propagation detection algorithms.

Given a perturbed run's PropagationTrace and the matching clean baseline
trace (same query/config, no failure injected), classify how the injected
retrieval error propagated through the rest of the pipeline:

- "self_correcting": a later step recovers and the final output is closer to
  baseline than the immediate post-injection output was.
- "compounding": the deviation from baseline grows monotonically and the
  final output is further from baseline than the immediate post-injection
  output was.
- "isolated": the deviation from baseline stays roughly constant -- the error
  neither compounds nor is corrected.
- "ambiguous": none of the above patterns clearly apply.
"""

from typing import List, Optional, Tuple

from .pipeline import INJECTION_STEP
from .retrieval import text_similarity
from .tracking import PropagationTrace


def _post_injection_fidelities(
    trace: PropagationTrace, baseline_trace: PropagationTrace
) -> Tuple[Optional[int], List[float]]:
    """Computes per-step fidelity (similarity to baseline) and returns the
    fidelity sequence starting at the injection step."""
    injection_idx = None
    for i, (step, baseline_step) in enumerate(zip(trace.steps, baseline_trace.steps)):
        step.fidelity = text_similarity(step.output_text, baseline_step.output_text)
        if step.name == INJECTION_STEP and injection_idx is None:
            injection_idx = i

    if injection_idx is None:
        return None, []
    return injection_idx, [step.fidelity for step in trace.steps[injection_idx:]]


def is_self_correcting(fidelities: List[float], recover_threshold: float = 0.2) -> bool:
    if len(fidelities) < 2:
        return False
    return fidelities[-1] > fidelities[0] + recover_threshold


def is_compounding(fidelities: List[float], drop_threshold: float = 0.05) -> bool:
    if len(fidelities) < 2:
        return False
    return fidelities[-1] < fidelities[0] - drop_threshold


def is_isolated(fidelities: List[float], tolerance: float = 0.05) -> bool:
    if len(fidelities) < 2:
        return True
    return (max(fidelities) - min(fidelities)) <= tolerance


def classify_propagation(
    trace: PropagationTrace, baseline_trace: PropagationTrace
) -> Tuple[str, Optional[int], List[float]]:
    injection_idx, fidelities = _post_injection_fidelities(trace, baseline_trace)
    if injection_idx is None or not fidelities:
        return "unknown", injection_idx, fidelities

    if is_self_correcting(fidelities):
        label = "self_correcting"
    elif is_compounding(fidelities):
        label = "compounding"
    elif is_isolated(fidelities):
        label = "isolated"
    else:
        label = "ambiguous"

    return label, injection_idx, fidelities
