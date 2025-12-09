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
        id: "ml-engineer-scriptchain",
        title: "Machine Learning Engineer",
        company: "ScriptChain Health",
        location: "Arlington, VA",
        period: "Oct 2025 - Present",
        description: [
            "Optimized large-scale healthcare data workflows using Python (pandas, PyTorch) by refactoring preprocessing pipelines, significantly improving runtime efficiency.",
            "Designed GATE-based deep learning architectures integrating clinical and structured patient data to enhance predictive accuracy for outcome risk assessment.",
            "Standardized automation frameworks with Python and SQL to harmonize diverse medical data sources, ensuring compliance and reducing manual intervention."
        ],
        skills: ["Python", "PyTorch", "SQL", "Healthcare AI", "GATE"],
        logo: "/how-to-be-boring/images/scriptchain_health_logo.png"
    },
    {
        id: "research-assistant-gwu",
        title: "Research Assistant",
        company: "George Washington University",
        location: "Washington, DC",
        period: "Jun 2025 - Sep 2025",
        description: [
            "Developed a full-stack LMS platform (FastAPI, Next.js) with adaptive exams and real-time analytics, improving student engagement and exam performance by 20%.",
            "Designed and implemented quantum optimization algorithms using Qiskit, validating quantum-classical speedups for variational optimization research."
        ],
        skills: ["FastAPI", "Next.js", "Qiskit", "Quantum Computing", "Full Stack"],
        logo: "/how-to-be-boring/images/gwu-image.png"
    },
    {
        id: "gta-gwu",
        title: "Graduate Teaching Assistant",
        company: "George Washington University",
        location: "Washington, DC",
        period: "May 2024 - May 2025",
        description: [
            "Mentored 50+ students in data structures, algorithms, and software engineering, delivering hands-on labs that raised class exam averages by 10%.",
            "Collaborated with faculty to design interactive lab exercises and real-world case studies using Python, Java, and visualization tools."
        ],
        skills: ["Python", "Java", "Teaching", "Algorithms"],
        logo: "/how-to-be-boring/images/gwu-image.png"
    },
    {
        id: "ml-engineer-thoucentric",
        title: "ML Engineer and Data Scientist",
        company: "Thoucentric (A Xoriant Company)",
        location: "Bengaluru, India",
        period: "Jan 2020 - Aug 2023",
        description: [
            "Engineered ML pipelines to predict manufacturing defects, achieving 93% accuracy and reducing defect rates by 40% (cutting manual inspection costs by 60%).",
            "Refactored forecasting pipelines on GCP with Databricks, PySpark, and FastAPI, boosting accuracy by 15-20% and enabling real-time predictions.",
            "Developed production-grade APIs and containerized ML services using FastAPI, Docker, and CI/CD for scalable deployment on Azure/GCP.",
            "Built interactive dashboards (Power BI, Dash) to translate model outputs into actionable insights for stakeholders.",
            "Partnered with cross-functional teams to align ML initiatives with business KPIs, ensuring model interpretability and measurable operational impact."
        ],
        skills: ["Python", "TensorFlow", "PyTorch", "GCP", "Azure", "Databricks", "Docker", "FastAPI"],
        logo: "/how-to-be-boring/images/thoucentric-image.svg"
    }
];
