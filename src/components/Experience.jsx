import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = React.forwardRef(({ experience }, ref) => {
  return (
    <div ref={ref}>
      <VerticalTimelineElement
        contentStyle={{
          background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(2, 6, 23, 0.9) 100%)",
          color: "#fff",
          border: "1px solid rgba(175, 198, 255, 0.15)",
          boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.7), inset 0 0 20px rgba(175, 198, 255, 0.05)",
          borderRadius: "16px",
        }}
        contentArrowStyle={{ borderRight: "7px solid rgba(15, 23, 42, 0.9)" }}
        iconStyle={{ 
          background: experience.iconBg,
          boxShadow: "0 0 0 4px #020617, 0 0 20px rgba(175, 198, 255, 0.4)",
        }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain drop-shadow-md"
            />
          </div>
        }
      >
        <div className="cursor-default flex flex-col gap-1">
          <h3 className="text-white text-[24px] font-bold drop-shadow-sm">{experience.title}</h3>
          <p
            className="text-[#afc6ff] text-[16px] font-semibold tracking-wide drop-shadow-sm opacity-90"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
          
          {/* Date Chip */}
          <div className="mt-2 flex flex-wrap">
            <span className="inline-block px-4 py-1.5 rounded-full text-[13px] sm:text-[14px] font-medium bg-[#afc6ff]/10 text-[#afc6ff] border border-[#afc6ff]/20 tracking-wide">
              {experience.date}
            </span>
          </div>
        </div>

        <ul className="mt-6 list-disc ml-5 space-y-2 marker:text-[#afc6ff]">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-slate-300 text-[14px] pl-1 tracking-wider leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>

        {/* Tech Stack Chips */}
        {experience.techs && experience.techs.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {experience.techs.map((tech, index) => (
              <span
                key={`tech-${index}`}
                className="text-[12px] font-medium px-2 py-1 rounded border border-white/10 bg-white/5 text-gray-300 drop-shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </VerticalTimelineElement>
    </div>
  );
});

const Experience = () => {
  return (
    <div className="w-full">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText } text-left`}>
          Mobile Developer
        </p>
        <h2 className={`${styles.sectionHeadText} text-left bg-clip-text text-transparent bg-gradient-to-r from-white to-[#afc6ff]`}>
          Professional Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
