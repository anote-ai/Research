"""Propagation tracking primitives.

A PropagationTrace records, for every step in an agentic RAG pipeline run,
the textual output of that step. Comparing a perturbed run's trace against a
clean baseline trace (same query, same pipeline, no failure injected) lets us
measure how much each step's output deviates from the unperturbed run -- this
deviation is the "fidelity" signal that the propagation detectors operate on.
"""

from dataclasses import dataclass, field
from typing import List, Optional


@dataclass
class TraceStep:
    name: str
    output_text: str
    fidelity: float = 1.0


@dataclass
class PropagationTrace:
    query: str
    config_name: str
    error_type: Optional[str]
    steps: List[TraceStep] = field(default_factory=list)
