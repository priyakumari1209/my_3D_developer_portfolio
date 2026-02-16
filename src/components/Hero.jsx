import { motion } from "framer-motion";
import { styles } from "../styles";
import { useEffect } from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import LeetCodeIcon from "../components/LeetCodeIcon";

import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

// Neutral-themed Tooltip matching About section
const NeutralTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#1e293b", // dark neutral to match About
    color: "#fff",
    fontSize: "13px",
    fontWeight: 500,
    borderRadius: "8px",
    padding: "6px 12px",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#1e293b",
  },
}));

const Hero = () => {
  // Initialize TagCanvas
  useEffect(() => {
    const startCanvas = () => {
      try {
        window.TagCanvas.Start("myCanvas", "tags", {
          textColour: "#ffffff",
          outlineColour: "#ffffff",
          reverse: true,
          depth: 0.9,
          maxSpeed: 0.05,
          initial: [0.2, -0.2],
          dragControl: true,
          wheelZoom: false,
          noSelect: true,
          freezeActive: false,
          shadow: false,
          shadowBlur: 0,
        });
      } catch (e) {
        console.log("TagCanvas error:", e);
      }
    };

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
      className="relative w-full min-h-screen flex items-center"
      style={{
        background: `
          radial-gradient(circle at 20% 10%, rgba(56,189,248,0.08), transparent 40%),
          radial-gradient(circle at 80% 90%, rgba(168,85,247,0.08), transparent 45%),
          #020617
        `,
      }}
    >
      {/* Remove any extra purple glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-transparent blur-[160px] rounded-full" />

      <div
        className={`relative z-10 max-w-7xl mx-auto w-full ${styles.paddingX} grid md:grid-cols-2 gap-16 items-center`}
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Badge */}
          <span className="px-4 py-2 text-sm rounded-full bg-white/10 text-gray-300 border border-white/20">
            Mobile Developer • Java • Kotlin
          </span>

          {/* Name */}
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Hemanth 
          </h1>
           <h1 className= "text-[#afc6ff] text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">Thogaruchesti</h1>

          {/* Description */}
          <p className="text-gray-300 text-lg max-w-xl">
            I'm Hemanth — an Android developer focused on scalable architecture,
            performance-first apps, and production-grade UI. I enjoy turning
            complex ideas into smooth user experiences.
          </p>

          {/* Buttons */}
          <div className="space-y-6 pt-4">
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-7 py-3 rounded-xl border border-white/20  hover:text-white transition hover:scale-105 transition hover:bg-white/20"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-7 py-3 rounded-xl border border-white/20  hover:text-white transition hover:scale-105 transition hover:bg-white/20"
              >
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 ml-[36px]">
              <NeutralTooltip title="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/thogaruchesti-hemanth/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full  border border-white/20 hover:bg-white/20 transition"
                >
                  <LinkedInIcon className="text-white" />
                </a>
              </NeutralTooltip>

              <NeutralTooltip title="GitHub">
                <a
                  href="https://github.com/Thogaruchesti-hemanth"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full  border border-white/20 hover:bg-white/20 transition"
                >
                  <GitHubIcon className="text-white" />
                </a>
              </NeutralTooltip>

              <NeutralTooltip title="LeetCode">
  <a
    href="https://leetcode.com/u/Thogaruchesti_Hemanth/"
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/20 transition"
  >
    <LeetCodeIcon className="w-6 h-6 text-white hover:text-gray-400 transition" />
  </a>
</NeutralTooltip>


              <NeutralTooltip title="Download Resume">
                <a
                  href="/THOGARUCHESTI_HEMANTH.pdf"
                  download
                  className="w-12 h-12 flex items-center justify-center rounded-full  border border-white/20 hover:bg-white/20 transition"
                >
                  <DescriptionIcon className="text-white" />
                </a>
              </NeutralTooltip>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT – Canvas */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex rounded-2xl p-6 items-center justify-center"
        >
          <div className="relative w-[420px] h-[420px]">
            <canvas id="myCanvas" width="420" height="420" />
            <ul id="tags" className="hidden">
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
