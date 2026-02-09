import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Services data
const services = [
  {
    title: "Android Application Engineering",
    description:
      "Developing robust native Android applications using Java and modern architectural patterns with a focus on long-term maintainability.",
  },
  {
    title: "Modern UI & UX",
    description:
      "Crafting clean, intuitive interfaces aligned with Material Design principles and optimized for real-world user interactions.",
  },
  {
    title: "Architecture & Performance",
    description:
      "Applying MVVM and clean architecture to ensure scalable systems, smooth performance, and reliable state management.",
  },
  {
    title: "API Integration",
    description:
      "Integrating RESTful APIs, data persistence, and background services to deliver consistent and responsive mobile experiences.",
  },
];

// Service Card Component
const ServiceCard = ({ title, description }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    glareEnable={false}
    scale={1}
  >
    <motion.div
      variants={fadeIn("right", "spring", 0, 0.75)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="w-[250px] h-[300px] rounded-xl bg-[#0f172a] shadow-lg flex flex-col p-6 justify-start gap-4 border border-gray-700 hover:border-purple-400"
    >
      <h3 className="text-[#a855f7] text-lg font-bold">{title}</h3>
      <p className="text-gray-300 text-sm flex-grow">{description}</p>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section >
      {/* Intro Text */}
      <motion.div variants={textVariant()} className="mb-8 max-w-3xl mx-auto text-center">
        <p
          className={styles.sectionSubText}
          style={{ letterSpacing: "3px", fontSize: "18px" }}
        >
          INTRODUCTION
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Description Paragraph */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-300 text-lg max-w-4xl mx-auto leading-[30px]"
      >
        I design and build high-quality Android applications with a strong focus
        on performance, scalability, and clean user experience. My work revolves
        around transforming complex requirements into intuitive, reliable mobile
        products using modern Android development practices.
        <br />
        <br />
        I value clean architecture, maintainable code, and thoughtful UI design.
        Every application I build is approached with a product mindset — balancing
        technical precision with usability and long-term growth.
      </motion.p>

      {/* Services Cards */}
      <div className="mt-12 flex flex-wrap gap-8 justify-center">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
