"""Intervention point detector.

Across many "compounding" traces, find which pipeline step most often shows
the largest step-to-step fidelity drop. That step is the recommended place to
insert a grounding/verification check, since it is where errors most often
accelerate.
"""

from collections import defaultdict
from typing import Dict, List

from .tracking import PropagationTrace


class InterventionPointDetector:
    def __init__(self):
        self._drop_counts: Dict[str, int] = defaultdict(int)
        self._drop_totals: Dict[str, float] = defaultdict(float)

    def record(self, trace: PropagationTrace, label: str) -> None:
        if label != "compounding":
            return

        steps = trace.steps
        worst_idx, worst_drop = None, 0.0
        for i in range(1, len(steps)):
            drop = steps[i - 1].fidelity - steps[i].fidelity
            if drop > worst_drop:
                worst_drop, worst_idx = drop, i

        if worst_idx is not None:
            step_name = steps[worst_idx].name
            self._drop_counts[step_name] += 1
            self._drop_totals[step_name] += worst_drop

    def recommendations(self, top_n: int = 3) -> List[dict]:
        ranked = sorted(
            self._drop_counts.items(),
            key=lambda kv: (-kv[1], -self._drop_totals[kv[0]]),
        )
        return [
            {
                "step": step,
                "compounding_runs": count,
                "avg_fidelity_drop": self._drop_totals[step] / count,
                "recommendation": (
                    f"Insert a verification/grounding check immediately after "
                    f"the '{step}' step -- it most often shows the largest "
                    f"fidelity drop in compounding runs."
                ),
            }
            for step, count in ranked[:top_n]
        ]
