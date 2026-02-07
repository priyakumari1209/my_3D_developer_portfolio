import { motion } from "framer-motion";
import { styles } from "../styles";
import DownloadIcon from "@mui/icons-material/Download";
import TouchAppIcon from "@mui/icons-material/TouchApp";

const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen flex items-center ${styles.heroBg}`}>
      
      {/* Background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-600/30 blur-[160px] rounded-full" />

      <div className={`relative z-10 max-w-7xl mx-auto w-full ${styles.paddingX} grid md:grid-cols-2 gap-16 items-center`}>

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="px-4 py-2 text-sm rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
            Mobile Developer • Java • Kotlin
          </span>

          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Hemanth{" "}
            <span className="text-indigo-400">Thogaruchesti</span> <br />
            
          </h1>

          <p className="text-slate-400 text-lg max-w-xl">
            I'm Hemanth — an Android developer focused on scalable architecture,
            performance-first apps, and production-grade UI. I enjoy turning complex
            ideas into smooth user experiences.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-xl border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* ================= RIGHT GLASS CARD ================= */}
        {/* <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900/70 backdrop-blur-xl border border-indigo-500/20 rounded-2xl p-8 shadow-2xl"
        >
          <h3 className="text-white text-xl font-semibold mb-6">
            Current Focus
          </h3>

          <ul className="space-y-4 text-slate-300">
            <li>• Android Architecture (MVVM, Clean)</li>
            <li>• Room, Content Providers</li>
            <li>• Firebase Auth & Play Store launches</li>
            <li>• DSA & problem solving</li>
          </ul>
        </motion.div> */}

      </div>
    </section>
  );
};

export default Hero;
