import Head from 'next/head';
import Image from 'next/image';
import { FaAward, FaFilePdf, FaMedal } from 'react-icons/fa6';

interface Certificate {
    title: string;
    issuer: string;
    type: 'image' | 'pdf';
    filename: string;
    color: string;
}

const certifications: Certificate[] = [
    // Awards (Images)
    {
        title: "Atlas Award",
        issuer: "Thoucentric",
        type: 'image',
        filename: "atlas-award.jpg",
        color: "from-yellow-400 to-orange-500"
    },
    {
        title: "Neon Award",
        issuer: "Thoucentric",
        type: 'image',
        filename: "neon-award.png",
        color: "from-cyan-400 to-blue-500"
    },
    {
        title: "Intro to Programming",
        issuer: "Kaggle",
        type: 'image',
        filename: "intro-to-programming.png",
        color: "from-sky-400 to-blue-500"
    },

    // PDF Certs
    {
        title: "Thoucentric Internship",
        issuer: "Thoucentric",
        type: 'pdf',
        filename: "thoucentric-internship.pdf",
        color: "from-emerald-400 to-teal-500"
    },
    {
        title: "Data Science Bootcamp 2022",
        issuer: "Udemy",
        type: 'pdf',
        filename: "data-science-bootcamp.pdf",
        color: "from-red-400 to-rose-500"
    },
    {
        title: "PyTorch for Deep Learning",
        issuer: "ZTM Academy",
        type: 'pdf',
        filename: "pytorch-bootcamp.pdf",
        color: "from-orange-400 to-red-500"
    },
    {
        title: "ML Model Deployment",
        issuer: "Udemy",
        type: 'pdf',
        filename: "ml-deployment.pdf",
        color: "from-blue-400 to-indigo-500"
    },
    {
        title: "Python Basic",
        issuer: "HackerRank",
        type: 'pdf',
        filename: "python-basic.pdf",
        color: "from-green-400 to-emerald-500"
    },
    {
        title: "Core Java Training",
        issuer: "Internshala",
        type: 'pdf',
        filename: "core-java-training.pdf",
        color: "from-orange-600 to-red-600"
    }
];

export default function Awards() {
    return (
        <>
            <Head>
                <title>Awards & Certifications | Abde Manaaf Ghadiali</title>
                <meta name="description" content="Awards and Certifications received by Abde Manaaf Ghadiali" />
            </Head>
            <div className="container mx-auto py-24 px-4 max-w-6xl">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent mb-6">
                        Hall of Fame.
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Recognition of work, continuous learning, and milestones achieved along the journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert) => (
                        <div key={cert.filename} className="group relative">
                            {cert.type === 'image' ? (
                                // Image Card
                                <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`}></div>
                                    <Image
                                        src={`/how-to-be-boring/images/awards/${cert.filename}`}
                                        alt={cert.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent z-20">
                                        <h3 className="text-white font-bold text-lg">{cert.title}</h3>
                                        <p className="text-slate-300 text-sm">{cert.issuer}</p>
                                    </div>
                                </div>
                            ) : (
                                // PDF Card
                                <a
                                    href={`/how-to-be-boring/images/awards/${cert.filename}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block relative h-64 w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                                    {/* Icon Area */}
                                    <div className="relative z-10">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} p-0.5 mb-4 shadow-lg shadow-black/20`}>
                                            <div className="w-full h-full bg-black/40 backdrop-blur-sm rounded-[10px] flex items-center justify-center">
                                                <FaAward className="text-white text-xl" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">{cert.title}</h3>
                                        <p className="text-slate-400 text-sm mt-1">{cert.issuer}</p>
                                    </div>

                                    {/* Action Area */}
                                    <div className="relative z-10 flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider group-hover:text-slate-300 transition-colors">Certificate</span>
                                        <div className="flex items-center gap-2 text-slate-400 group-hover:text-white transition-colors text-sm font-medium">
                                            View PDF <FaFilePdf />
                                        </div>
                                    </div>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
