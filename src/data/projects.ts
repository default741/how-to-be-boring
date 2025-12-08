export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    link?: string;
    github?: string;
    category: "Quantum" | "ML/AI" | "Web" | "Other";
}

export const projects: Project[] = [
    {
        id: "graph-coloring-quantum",
        title: "Graph Coloring Using Quantum Circuits",
        description: "Implemented Grover's Algorithm from scratch to solve 2- and 3-node graph coloring problems. Designed a quantum oracle to validate node color similarity and encoded constraints in superposition states.",
        techStack: ["Python", "Qiskit", "IBM Quantum", "Grover's Algorithm"],
        github: "https://github.com/default741/graph-coloring-quantum-circuits",
        category: "Quantum"
    },
    {
        id: "q-ram",
        title: "4-Qubit Quantum-RAM",
        description: "Built Q-RAM circuits for 1-, 2-, and 4-bit memory using efficient gate-level encoding. Implemented quantum address decoding and memory retrieval logic.",
        techStack: ["Python", "Qiskit", "Quantum Memory"],
        category: "Quantum"
    },
    {
        id: "ai-text-detection",
        title: "AI Generated Text Detection Tool",
        description: "Developed an NLP pipeline analyzing 1.2M documents to detect AI-generated content. Fine-tuned RoBERTa, GPT, and LLaMA models, achieving 98% accuracy.",
        techStack: ["Python", "PyTorch", "Transformers", "NLP", "LLMs"],
        github: "https://github.com/default741/ai-text-detection",
        category: "ML/AI"
    },
    {
        id: "news-recommender",
        title: "News Recommendation System",
        description: "Graph-based personalized news recommendation system using Graph Neural Networks (GNNs). Integrated sentence transformer embeddings with user-article-category relations.",
        techStack: ["Python", "PyTorch Geometric", "GNNs", "RAG"],
        github: "https://github.com/default741/news-recommendation-system",
        category: "ML/AI"
    },
    {
        id: "audio-lang-detection",
        title: "Language Detection from Audio",
        description: "Built a multilingual classifier trained on 300K audio samples. Trained CNNs and transformer models, achieving 98% classification accuracy.",
        techStack: ["Python", "TensorFlow", "Audio Transformers", "Librosa"],
        github: "https://github.com/default741/speak-sense",
        category: "ML/AI"
    },
    {
        id: "drone-path",
        title: "Drone Path Planning",
        description: "Designed real-time navigation using Dynamic A* and particle filters to avoid moving obstacles. Developed a visualization toolkit to simulate drone mobility.",
        techStack: ["Python", "NumPy", "Path Planning", "Robotics"],
        category: "Other"
    },
    {
        id: "old-portfolio",
        title: "Old Portfolio Site",
        description: "My previous personal website for portfolio and blog, built with SCSS.",
        techStack: ["SCSS", "HTML", "JS"],
        github: "https://github.com/default741/old-portfolio-site",
        category: "Web"
    }
];
