"""Small synthetic multi-domain corpus used as the failure-propagation testbed.

Three domains mirror the ones proposed in researchpapers/T4-RAGFailureProp/main.tex
(finance, legal, medical). Each query has a small set of "gold" chunks that a
clean retrieval pass should surface.
"""

CORPUS = {
    "finance": [
        "In fiscal year 2023, the company reported total revenue of $4.2 billion, an increase of 12% year over year.",
        "Operating expenses for 2023 rose to $3.1 billion, driven primarily by higher logistics and labor costs.",
        "The board of directors approved a quarterly dividend of $0.35 per share, payable in March 2024.",
        "Cash and cash equivalents at the end of the period totaled $850 million, up from $620 million a year earlier.",
        "The company's debt-to-equity ratio improved to 0.45 from 0.62 in the prior fiscal year.",
    ],
    "legal": [
        "The agreement may be terminated by either party with 60 days written notice to the other party.",
        "All confidential information disclosed under this agreement shall remain confidential for five years after termination.",
        "Any dispute arising under this contract shall be resolved through binding arbitration in the State of Delaware.",
        "The licensee is granted a non-exclusive, non-transferable license to use the software for internal business purposes only.",
        "Neither party shall be liable for delays caused by events of force majeure, including natural disasters or government action.",
    ],
    "medical": [
        "Patients receiving the treatment showed a 35% reduction in symptom severity after eight weeks compared to placebo.",
        "The most common adverse events reported were mild headache and nausea, occurring in fewer than 10% of participants.",
        "Dosage should be adjusted for patients with moderate renal impairment, reducing the standard dose by half.",
        "The study enrolled 412 participants across 14 sites, with a mean age of 54 years.",
        "Follow-up visits are recommended at 4, 8, and 12 weeks to monitor liver enzyme levels.",
    ],
}

QUERIES = [
    {
        "domain": "finance",
        "query": "What was the company's total revenue in fiscal year 2023?",
    },
    {
        "domain": "finance",
        "query": "What dividend did the board approve and what is the company's debt-to-equity ratio?",
    },
    {
        "domain": "legal",
        "query": "How much notice is required to terminate the agreement?",
    },
    {
        "domain": "legal",
        "query": "Where are disputes under the contract resolved and how long does confidentiality last?",
    },
    {
        "domain": "medical",
        "query": "How much did symptom severity decrease after eight weeks of treatment?",
    },
    {
        "domain": "medical",
        "query": "What dosage adjustment is recommended for patients with renal impairment?",
    },
]


def all_chunks():
    return [chunk for chunks in CORPUS.values() for chunk in chunks]
