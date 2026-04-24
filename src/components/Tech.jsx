import React from "react";
import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className="w-full">
      {/* Section heading */}
      <div className="mb-8 max-w-3xl">
        <p
          className={styles.sectioncSubText}
          style={{ letterSpacing: "3px", fontSize: "18px",color: "#cbd5f5" }}
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
      <div className="mt-12 w-full flex flex-wrap justify-center gap-6 sm:gap-8">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="group w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center rounded-2xl
              bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)]
              hover:-translate-y-3 hover:scale-105 hover:shadow-[0_15px_35px_rgba(175,198,255,0.4)]
              transition-all duration-500 ease-out cursor-pointer"
          >
            <img 
              src={tech.icon} 
              alt={tech.name} 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-500 ease-out" 
            />
            <p className="text-xs sm:text-sm font-bold mt-3 text-[#1d1836] transition-colors duration-500 tracking-wide">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");  
