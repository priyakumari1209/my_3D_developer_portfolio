import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

// Services data
const services = [
  {
    title: "Android Application Engineering",
    description:
      "Developing native applications using Java and Kotlin with a focus on long-term maintainability. Leveraging Android SDK and modern patterns to build stable, feature-rich apps.",
  },
  {
    title: "Modern UI & UX",
    description:
      "Crafting intuitive interfaces using Material Design 3 and Jetpack Compose. Improving user engagement through responsive layouts and interactive elements.",
  },
  {
    title: "Architecture & Performance",
    description:
      "Applying MVVM and Clean Architecture to reduce crashes and improve session stability. Optimizing app performance by resolving lifecycle-related issues and network failures.",
  },
  {
    title: "Data & Integration",
    description:
      "Integrating RESTful APIs, Firebase, and Room Database for seamless data flow. Implementing real-time communication and background services for responsive mobile experiences.",
  },
];

// Service Card Component
const ServiceCard = ({ title, description }) => (
  <div className="w-full rounded-xl bg-[#0f172a] shadow-lg flex flex-col p-6 justify-start gap-4 border border-gray-700 hover:border-blue-200 transition-all duration-300">
    <h3 className="text-[#afc6ff] text-lg font-bold">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

const About = () => {
  return (
    <div className="w-full">
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

      {/* Description */}
      <p className="mt-4 text-gray-300 text-lg max-w-4xl leading-[30px]">
        I am an Android Developer dedicated to engineering high-performance
        applications that thrive in demanding production environments. Currently
        at INA Payments, I architect mobile solutions with a focus on real-time
        data handling, system reliability, and clean architecture.
        <br />
        <br />
        My expertise spans the full mobile development lifecycle—from designing
        Material 3 productivity tools to optimizing enterprise-grade systems
        that serve over 100+ terminals. I am passionate about modern Android
        standards, ensuring every application I build is secure, maintainable,
        and centered around a seamless user experience.
      </p>

      {/* Cards – Responsive grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
