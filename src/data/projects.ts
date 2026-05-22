export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    link?: string;
    github?: string;
    category: "Systems" | "ML/AI" | "Robotics";
}

export const projects: Project[] = [
    {
        id: "monday-kernel",
        title: "Monday Kernel",
        description: "A local-first personal OS that combines Rust, Python, and C# services with GraphRAG over Neo4j and ChromaDB to retrieve context from real user activity, notes, and voice transcripts.",
        techStack: ["Rust", "FastAPI", "C#/.NET", "GraphRAG", "Neo4j + ChromaDB"],
        github: "https://github.com/default741/monday-kernel",
        category: "Systems"
    },
    {
        id: "news-recommender",
        title: "News Recommendation System Using GNN",
        description: "A graph-based news recommender built with heterogeneous user, article, and category graphs plus sentence-transformer embeddings, achieving MRR 1.0 and NDCG@15 above 0.7 while beating baseline methods.",
        techStack: ["Python", "PyTorch Geometric", "Sentence Transformers", "GCN / GAT / GraphSAGE"],
        github: "https://github.com/default741/new-recommendation-system",
        category: "ML/AI"
    },
    {
        id: "ai-text-detection",
        title: "AI Generated Text Detection Tool",
        description: "A large-scale NLP pipeline that processed 1.2M+ texts and fine-tuned RoBERTa, Llama, and Gemma models to 98% accuracy for AI-generated content detection.",
        techStack: ["Python", "PyTorch", "Transformers", "RoBERTa / Llama / Gemma"],
        github: "https://github.com/default741/ai-text-detection",
        category: "ML/AI"
    },
    {
        id: "audio-lang-detection",
        title: "Multilingual Language Detection from Audio",
        description: "A multilingual speech classifier trained on 300K+ audio samples using CNNs and audio transformers, reaching 98-99% accuracy across languages and accents.",
        techStack: ["Python", "TensorFlow", "PyTorch", "Librosa", "Audio Transformers"],
        github: "https://github.com/default741/speak-sense",
        category: "ML/AI"
    },
    {
        id: "drone-path",
        title: "Drone Path Planning",
        description: "A dynamic path-planning simulator that combines D* replanning and particle filters to navigate uncertain moving obstacles in real time.",
        techStack: ["Python", "Dynamic A*", "Particle Filters", "NumPy + Matplotlib"],
        github: "https://github.com/default741/drone-path-planning",
        category: "Robotics"
    }
];
