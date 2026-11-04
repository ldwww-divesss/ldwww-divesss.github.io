// Public research metadata; paper summaries based on the linked arXiv abstracts.
const publications = [
  {
    "id": "dafi",
    "name": "DAFI",
    "title": "From Input to Output: A Flexible Agent for Dual-End Interpretation of Sparse Autoencoder Features",
    "role": "Co-first author (listed first)",
    "venue": "Under review",
    "status": "submission",
    "image": "assets/dafi.png",
    "alt": "DAFI connects input-side activation evidence and output-side intervention effects through an agent to explain SAE features.",
    "credit": "Figure 1 from the DAFI paper, arXiv:2609.35367.",
    "advisors": [
      [
        "Xiaozhi Wang",
        "DjpXXZkAAAAJ"
      ],
      [
        "Juanzi Li",
        "SgNB-ioAAAAJ"
      ]
    ],
    "description": "Introduces functional interpretation: explaining how the inputs that activate an SAE feature relate to its effects on model outputs. DAFI combines targeted probing with feedback-guided refinement, avoiding full-corpus scans and learning reusable skills that improve interpretation quality and transfer across model-SAE settings.",
    "links": [
      [
        "Paper",
        "https://arxiv.org/abs/2609.35367"
      ],
      [
        "Code",
        "https://github.com/THUAIS-Lab/DAFI"
      ]
    ]
  },
  {
    "id": "agentxray",
    "name": "AgentXRay",
    "title": "AgentXRay: White-Boxing Agentic Systems via Workflow Reconstruction",
    "role": "Contributing author",
    "venue": "ICML 2026",
    "status": "accepted",
    "image": "assets/agentxray.png",
    "alt": "An opaque agent system is reconstructed as an editable workflow of researcher, analyst, coder and reviewer agents.",
    "credit": "Figure 1 from AgentXRay, arXiv:2602.05353.",
    "advisors": [
      [
        "Chen Qian",
        "Rnsawl0AAAAJ"
      ]
    ],
    "description": "Turns input-output access to a black-box agentic system into an editable, interpretable stand-in workflow, without access to model parameters. Tree search with quality- and depth-aware pruning finds workflows that better approximate the target system while using fewer tokens than unpruned search.",
    "links": [
      [
        "Paper",
        "https://arxiv.org/abs/2602.05353"
      ]
    ]
  },
  {
    "id": "collective",
    "name": "Collective AI",
    "title": "Towards a Science of Collective AI: LLM-based Multi-Agent Systems Need a Transition from Blind Trial-and-Error to Rigorous Science",
    "role": "Co-first author",
    "venue": "",
    "status": "preprint",
    "image": "assets/collective-v2.png",
    "alt": "A framework for moving from trial-and-error multi-agent design to factor libraries and measured collaboration gain.",
    "credit": "Figure supplied by Dewen Liu for Towards a Science of Collective AI, arXiv:2602.05289.",
    "advisors": [
      [
        "Chen Qian",
        "Rnsawl0AAAAJ"
      ],
      [
        "Zhiyuan Liu",
        "dT0v5u0AAAAJ"
      ]
    ],
    "description": "Establishes collaboration gain (Γ) to separate the benefits of agent cooperation from improvements due to larger resource budgets. A structured library of design factors and information dynamics supports systematic attribution of what drives collaboration, providing a scientific basis for multi-agent system design and optimization.",
    "links": [
      [
        "Paper",
        "https://arxiv.org/abs/2602.05289"
      ]
    ]
  },
  {
    "id": "makeup-patent",
    "name": "Personalized Makeup Teaching",
    "title": "Intelligent System Capable of Realizing Personalized Makeup Teaching and Application Thereof",
    "role": "First inventor",
    "venue": "Chinese invention patent CN 120163631 B, granted 2025",
    "status": "patent",
    "advisors": [
      [
        "Kai Zhang",
        "https://kay21s.github.io/"
      ]
    ],
    "description": "A personalized makeup teaching system combining region-specific makeup transfer, recommendations, and video tutorials.",
    "links": [
      [
        "Patent",
        "https://patents.google.com/patent/CN120163631B/en"
      ]
    ],
    "image": "assets/makeup-patent.png",
    "alt": "Personalized makeup teaching workflow: face image acquisition, facial feature analysis, makeup matching, virtual makeup, and video teaching, supported by video and categorized makeup image libraries.",
    "credit": "System workflow from patent CN 120163631 B. Image supplied by Dewen Liu."
  }
];
