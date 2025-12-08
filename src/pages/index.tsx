import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Abde Manaaf Ghadiali</title>
        <meta name="description" content="ML Engineer & Quantum Computing Researcher" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex flex-col justify-center items-center px-4 pt-20">
        <div className="relative w-full max-w-4xl text-center z-10">

          {/* Profile Picture with Glow */}
          <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 ring-4 ring-white/5">
              <Image
                src="/images/pic.jpg"
                alt="Abde Manaaf Ghadiali"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
              Building Intelligence
            </span>
            <br />
            <div className="text-3xl md:text-5xl text-slate-500 font-medium mt-4 h-[60px] md:h-[80px]">
              <TypeAnimation
                sequence={[
                  'Classical',
                  2000,
                  'Quantum',
                  2000,
                  'Hybrid',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary/90"
              />
            </div>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I am <span className="text-white font-semibold">Abde Manaaf Ghadiali</span>. I bridge the gap between
            Machine Learning Engineering and Quantum Computing research. Based in Arlington, VA.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="/projects"
              className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors"
            >
              Contact Me
            </Link>
          </div>

        </div>

        {/* Background Gradients */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-500/10 rounded-full blur-[100px]"></div>
        </div>
      </div>
    </>
  );
}
