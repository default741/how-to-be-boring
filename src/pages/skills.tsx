import Head from 'next/head';
import {
    FaPython, FaJs, FaJava, FaReact, FaDocker, FaAws, FaGoogle, FaMicrochip,
    FaChalkboardTeacher, FaDatabase, FaBrain
} from 'react-icons/fa';
import {
    SiPytorch, SiTensorflow, SiNextdotjs, SiFastapi, SiPostgresql,
    SiApachespark, SiDatabricks, SiQiskit, SiScikitlearn, SiPandas,
    SiNumpy, SiKubernetes
} from 'react-icons/si';

export default function Skills() {
    return (
        <>
            <Head>
                <title>Skills | Abde Manaaf Ghadiali</title>
                <meta name="description" content="Technical Skills of Abde Manaaf Ghadiali - ML, Quantum, Web" />
            </Head>
            <div className="container mx-auto py-24 px-4 max-w-5xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">Technical Arsenal</h1>

                <div className="grid gap-12">
                    {/* Machine Learning & AI */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
                            <FaBrain className="text-violet-400" /> Machine Learning & AI
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            <SkillCard icon={<FaPython />} name="Python" color="text-yellow-400" />
                            <SkillCard icon={<SiPytorch />} name="PyTorch" color="text-red-400" />
                            <SkillCard icon={<SiTensorflow />} name="TensorFlow" color="text-orange-400" />
                            <SkillCard icon={<SiScikitlearn />} name="Scikit-Learn" color="text-orange-300" />
                            <SkillCard icon={<SiPandas />} name="Pandas" color="text-white" />
                            <SkillCard icon={<SiNumpy />} name="NumPy" color="text-blue-300" />
                            <SkillCard icon={<SiFastapi />} name="FastAPI" color="text-teal-400" />
                            <SkillCard icon={<FaDatabase />} name="SQL" color="text-slate-300" />
                        </div>
                    </section>

                    {/* Quantum Computing */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
                            <FaMicrochip className="text-blue-400" /> Quantum Computing
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            <SkillCard icon={<SiQiskit />} name="Qiskit" color="text-purple-400" />
                            <SkillCard icon={<span className="font-mono font-bold">|ψ⟩</span>} name="Quantum Algos" color="text-white" />
                            <SkillCard icon={<span className="font-mono font-bold">H</span>} name="Q-RAM" color="text-blue-300" />
                            <SkillCard icon={<span className="font-mono font-bold">CNOT</span>} name="Error Correction" color="text-green-400" />
                        </div>
                    </section>

                    {/* Full Stack & Dev Tools */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
                            <FaReact className="text-cyan-400" /> Web & Engineering
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            <SkillCard icon={<SiNextdotjs />} name="Next.js" color="text-white" />
                            <SkillCard icon={<FaReact />} name="React" color="text-cyan-400" />
                            <SkillCard icon={<FaJs />} name="TypeScript" color="text-blue-400" />
                            <SkillCard icon={<FaDocker />} name="Docker" color="text-blue-500" />
                            <SkillCard icon={<SiKubernetes />} name="Kubernetes" color="text-blue-400" />
                            <SkillCard icon={<FaAws />} name="AWS" color="text-orange-400" />
                            <SkillCard icon={<FaGoogle />} name="GCP" color="text-red-400" />
                            <SkillCard icon={<SiDatabricks />} name="Databricks" color="text-orange-500" />
                        </div>
                    </section>

                    {/* Soft Skills */}
                    <section>
                        <h2 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
                            <FaChalkboardTeacher className="text-emerald-400" /> Core Competencies
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            <SoftSkill name="Teaching & Mentorship" />
                            <SoftSkill name="Technical Writing" />
                            <SoftSkill name="Algorithm Design" />
                            <SoftSkill name="Agile Methodology" />
                            <SoftSkill name="Research R&D" />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

function SkillCard({ icon, name, color }: { icon: React.ReactNode, name: string, color: string }) {
    return (
        <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group flex flex-col items-center gap-3">
            <span className={`text-3xl ${color} group-hover:scale-110 transition-transform duration-300`}>{icon}</span>
            <span className="text-slate-300 text-sm font-medium">{name}</span>
        </div>
    );
}

function SoftSkill({ name }: { name: string }) {
    return (
        <span className="px-4 py-2 bg-white/5 text-slate-300 rounded-full border border-white/5 text-sm font-medium hover:bg-white/10 transition-colors">
            {name}
        </span>
    );
}
