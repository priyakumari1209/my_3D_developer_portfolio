import { motion } from "framer-motion";
import { styles } from "../styles";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const startCanvas = () => {
      try {
        window.TagCanvas.Start("myCanvas", "tags", {
          textColour: "#ffffff",      // pure white
          outlineColour: "#ffffff",  // no glow outline
          reverse: true,
          depth: 0.9,
          maxSpeed: 0.05,
          initial: [0.2, -0.2],
          dragControl: true,
          wheelZoom: false,
          noSelect: true,
          freezeActive: false,
          shadow: false,             // ❌ remove glow
          shadowBlur: 0,             // ❌ no blur
        });
        
      } catch (e) {
        console.log("TagCanvas error:", e);
      }
    };

    // Wait until TagCanvas script is loaded
    const interval = setInterval(() => {
      if (window.TagCanvas && document.getElementById("myCanvas")) {
        startCanvas();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`relative w-full min-h-screen flex items-center ${styles.heroBg}`}
    >
      {/* Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-600/30 blur-[160px] rounded-full" />

      <div
        className={`relative z-10 max-w-7xl mx-auto w-full ${styles.paddingX} grid md:grid-cols-2 gap-16 items-center`}
      >
        {/* ================= LEFT ================= */}
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
            <span className="text-indigo-400">Thogaruchesti</span>
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

        {/* ================= RIGHT: 3D SKILLS ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          // transition={{ duration: 0.8 }}÷
          className="rounded-2xl p-6 flex items-center justify-center"
        >
          <div className="relative w-[420px] h-[420px]">
            <canvas id="myCanvas" width="420" height="420" />

            <ul id="tags" className="hidden"   >
              <li><a>HTML</a></li>
              <li><a>CSS</a></li>
              <li><a>JavaScript</a></li>
              <li><a>Flutter</a></li>
              <li><a>Firebase</a></li>
              <li><a>Dart</a></li>
              <li><a>Android</a></li>
              <li><a>Git</a></li>
              <li><a>UI/UX</a></li>
              <li><a>SQLite</a></li>
              <li><a>MySQL</a></li>
              <li><a>Python</a></li>
              <li><a>Figma</a></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
