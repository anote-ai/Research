"""Lightweight TF-IDF retriever and text-similarity helper.

Kept dependency-light (sklearn only, no API calls) so the failure-propagation
testbed can run fully offline. The real benchmarking pipelines in
researchcode/Benchmarking-RAG (base_rag.py / fake_rag.py) use OpenAI
embeddings + Chroma; this module is a stand-in retriever for the agentic
pipeline scaffold in this package.
"""

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


class TfidfRetriever:
    """Retrieves the top-k most similar chunks to a query via TF-IDF cosine similarity."""

    def __init__(self, chunks):
        self.chunks = list(chunks)
        self.vectorizer = TfidfVectorizer().fit(self.chunks)
        self.matrix = self.vectorizer.transform(self.chunks)

    def retrieve(self, query, top_k=2):
        query_vec = self.vectorizer.transform([query])
        similarities = cosine_similarity(query_vec, self.matrix)[0]
        top_indices = similarities.argsort()[::-1][:top_k]
        return [self.chunks[i] for i in top_indices]


def text_similarity(text_a, text_b):
    """Cosine similarity between two strings using a fresh TF-IDF fit.

    Returns 1.0 if both strings are empty/identical and 0.0 if only one is empty.
    """
    a, b = (text_a or "").strip(), (text_b or "").strip()
    if not a and not b:
        return 1.0
    if not a or not b:
        return 0.0
    if a == b:
        return 1.0
    try:
        vectorizer = TfidfVectorizer().fit([a, b])
        matrix = vectorizer.transform([a, b])
        return float(cosine_similarity(matrix[0:1], matrix[1:2])[0][0])
    except ValueError:
        # Happens if both strings consist solely of stop-words/empty vocabulary.
        return 1.0 if a == b else 0.0
