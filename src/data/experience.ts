export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    skills: string[];
    logo?: string;
}

export const experience: Experience[] = [
    {
        id: "founder-cto-zyncora",
        title: "Founder & CTO",
        company: "Zyncora Inc.",
        location: "Arlington, VA",
        period: "Present",
        description: [
            "Built Zyncora as a multi-agent job application platform in Python and FastAPI, coordinating 9 specialized agents for analysis, generation, fact-checking, and recruiter outreach.",
            "Engineered Redis-backed SSE, ATS-focused LaTeX document generation, and truth-preserving validation loops to deliver sub-second progress updates while reducing hallucination risk in high-stakes workflows.",
            "Hardened the platform with Argon2, JWT rotation, JTI blacklisting, prompt-injection defenses, and containerized services backed by a 387-test OWASP-aligned security suite."
        ],
        skills: ["Python", "FastAPI", "Redis", "JWT/Auth", "Docker", "Multi-Agent Systems"],
    },
    {
        id: "ml-engineer-intern-scriptchain",
        title: "Machine Learning Engineer Intern",
        company: "ScriptChain Health",
        location: "Arlington, VA",
        period: "Oct 2025 - Present",
        description: [
            "Re-architected ML pipelines over 400GB+ of multimodal healthcare data, cutting runtime from 6+ hours to minutes and making production serving feasible.",
            "Built GATE-based models across vitals, labs, and practitioner data, then integrated them into backend workflows with low-latency API contracts for real-time clinical features.",
            "Delivered HIPAA-aware backend foundations with FastAPI, FHIR integrations, OAuth/JWT/RBAC, and automated tests and CI to support reliable clinical deployments."
        ],
        skills: ["Python", "PyTorch", "FastAPI", "FHIR", "OAuth/JWT", "Healthcare AI"],
        logo: "/how-to-be-boring/images/scriptchain_health_logo.png"
    },
    {
        id: "research-teaching-assistant-gwu",
        title: "Research & Teaching Assistant",
        company: "The George Washington University",
        location: "Washington, DC",
        period: "May 2024 - Sep 2025",
        description: [
            "Built an adaptive LMS with FastAPI, Next.js, and real-time analytics, improving exam performance by 20% through personalized assessments and feedback loops.",
            "Developed and benchmarked quantum optimization work in Qiskit, including QAOA, Grover, and graph problems, contributing to research on hybrid quantum-classical systems.",
            "Mentored 50+ students across algorithms and software engineering, designing labs and review sessions that raised average exam scores by 10%."
        ],
        skills: ["FastAPI", "Next.js", "Qiskit", "Quantum Optimization", "Teaching", "Algorithms"],
        logo: "/how-to-be-boring/images/gwu-image.png"
    },
    {
        id: "senior-ml-engineer-thoucentric",
        title: "Senior Machine Learning Engineer",
        company: "Thoucentric (A Xoriant Company)",
        location: "Bengaluru, India",
        period: "Jan 2020 - Aug 2023",
        description: [
            "Delivered defect detection and thermodynamics-informed recommendation systems for automotive manufacturing, improving model accuracy from 87% to 93% and cutting defect-related costs by 60%.",
            "Built forecasting and engine-fault pipelines on GCP and Azure with Databricks, PySpark, FastAPI, and Docker, improving accuracy and runtime for real-time deployment.",
            "Led production rollout, dashboards, and mentoring across ML teams, translating model outputs into operational tools used by engineers and business stakeholders."
        ],
        skills: ["Python", "PySpark", "Databricks", "GCP/Azure", "Docker", "FastAPI"],
        logo: "/how-to-be-boring/images/thoucentric-image.svg"
    }
];
