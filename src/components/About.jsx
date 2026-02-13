import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

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

// Service Card Component (all content visible)
const ServiceCard = ({ title, description }) => (
  <div className="w-[250px] h-auto rounded-xl bg-[#0f172a] shadow-lg flex flex-col p-6 justify-start gap-4 border border-gray-700 hover:border-blue-400">
    <h3 className="text-[#a855f7] text-lg font-bold">{title}</h3>
    <p className="text-gray-300 text-sm">{description}</p>
  </div>
);

const About = () => {
  return (
    <section
      style={{
        background: `radial-gradient(circle at 20% 10%, rgba(56,189,248,0.08), transparent 40%), 
                     radial-gradient(circle at 80% 90%, rgba(168,85,247,0.08), transparent 45%), 
                     #020617`,
      }}
      className="w-full min-h-screen py-16 px-4 sm:px-8"
    >
      {/* Intro Text */}
      <div className="mb-8 max-w-3xl">
        <p
          className={styles.sectionSubText}
          style={{ letterSpacing: "3px", fontSize: "18px" }}
        >
          INTRODUCTION
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      {/* Description Paragraph */}
      <p className="mt-4 text-gray-300 text-lg max-w-4xl leading-[30px]">
        I design and build high-quality Android applications with a strong focus
        on performance, scalability, and clean user experience. My work revolves
        around transforming complex requirements into intuitive, reliable mobile
        products using modern Android development practices.
        <br />
        <br />
        I value clean architecture, maintainable code, and thoughtful UI design.
        Every application I build is approached with a product mindset — balancing
        technical precision with usability and long-term growth.
      </p>

      {/* Services Cards - all in a single row */}
      <div className="mt-12 flex gap-8 overflow-x-auto">
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
