"""Controlled retrieval failure injection.

Implements the four error types described in researchpapers/T4-RAGFailureProp/main.tex:
wrong chunk, partial chunk, hallucinated chunk, and empty retrieval.
"""

import random
from enum import Enum


class ErrorType(str, Enum):
    WRONG_CHUNK = "wrong_chunk"
    PARTIAL_CHUNK = "partial_chunk"
    HALLUCINATED_CHUNK = "hallucinated_chunk"
    EMPTY_RETRIEVAL = "empty_retrieval"


HALLUCINATED_CHUNK_TEXT = (
    "Internal records indicate the figure was quietly revised upward by 42% "
    "following an undisclosed one-time adjustment that does not appear in any "
    "filed document."
)


class FailureInjector:
    """Mutates retrieved chunks to simulate a controlled retrieval error.

    The injector always perturbs the highest-ranked chunk (index 0), since that
    is the chunk most likely to dominate downstream generation.
    """

    def __init__(self, corpus_chunks, seed=42):
        self.corpus_chunks = list(corpus_chunks)
        self.rng = random.Random(seed)

    def apply(self, retrieved_chunks, error_type):
        if error_type is None or not retrieved_chunks:
            return list(retrieved_chunks)

        chunks = list(retrieved_chunks)
        error_type = ErrorType(error_type)

        if error_type == ErrorType.WRONG_CHUNK:
            candidates = [c for c in self.corpus_chunks if c not in chunks]
            chunks[0] = self.rng.choice(candidates or self.corpus_chunks)
        elif error_type == ErrorType.PARTIAL_CHUNK:
            text = chunks[0]
            cutoff = max(1, int(len(text) * 0.3))
            chunks[0] = text[:cutoff]
        elif error_type == ErrorType.HALLUCINATED_CHUNK:
            chunks[0] = HALLUCINATED_CHUNK_TEXT
        elif error_type == ErrorType.EMPTY_RETRIEVAL:
            chunks = []

        return chunks
