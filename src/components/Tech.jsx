import React from "react";
import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <section
      style={{
        background: `radial-gradient(circle at 80% 10%, rgba(56,189,248,0.08), transparent 40%),
                     radial-gradient(circle at 20% 90%, rgba(168,85,247,0.08), transparent 45%),
                     #020617`,
      }}
      className="w-full min-h-screen py-16 px-4 sm:px-8"
    >
      {/* Section heading */}
      <div className="mb-8 max-w-3xl">
        <p
          className={styles.sectionSubText}
          style={{ letterSpacing: "3px", fontSize: "18px" }}
        >
          MY TOOLSET
        </p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-300 text-lg max-w-4xl leading-[30px]">
        These are the technologies I use to design, build, and scale modern
        applications. Each tool plays a specific role in delivering
        performance, reliability, and great user experience.
      </p>

      {/* Tech grid */}
      <div className="mt-12 w-full flex flex-wrap justify-center gap-8">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="w-32 h-32 flex flex-col items-center justify-center rounded-xl
              bg-[#0f172a] border border-gray-700 shadow-lg
              hover:-translate-y-2 hover:shadow-xl hover:border-blue-400
              transition-all duration-300 cursor-pointer"
          >
            <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
            <p className="text-sm font-semibold mt-3 text-gray-300">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");   // 👈 this ID matches navbar
