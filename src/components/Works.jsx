import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const filterCategories = [
  { key: "all", label: "All" },
  { key: "android", label: "Android" },
  { key: "web", label: "Web" },
  { key: "ai", label: "AI/ML" },
];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.1 }}
      style={{
        background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(2,6,23,0.95) 100%)',
        border: '1px solid rgba(99,102,241,0.15)',
        borderRadius: '16px',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '360px',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
      }}
      className="project-card-wrapper"
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
    >
      {/* Project Image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '200px',
          overflow: 'hidden',
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          className="project-card-img"
        />
        {/* GitHub overlay icon */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            display: 'flex',
            gap: '8px',
          }}
        >
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
            }}
            title="View Source Code"
          >
            <img
              src={github}
              alt="source code"
              style={{ width: '20px', height: '20px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div style={{ padding: '20px 22px 22px' }}>
        <h3
          style={{
            color: '#ffffff',
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: '10px',
          }}
        >
          {name}
        </h3>
        <p
          style={{
            color: '#94a3b8',
            fontSize: '14px',
            lineHeight: '22px',
            marginBottom: '16px',
          }}
        >
          {description}
        </p>

        {/* Tech Tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '18px',
          }}
        >
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              style={{
                fontSize: '12px',
                fontWeight: 500,
                padding: '4px 12px',
                borderRadius: '20px',
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.2)',
                color: '#a5b4fc',
                letterSpacing: '0.3px',
              }}
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            paddingTop: '14px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#cbd5e1',
              textDecoration: 'none',
              padding: '6px 14px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              transition: 'all 0.2s ease',
            }}
            className="project-link-btn"
          >
            <img src={github} alt="github" style={{ width: '14px', height: '14px' }} />
            Code
          </a>
          {demo_link && (
            <a
              href={demo_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                fontWeight: 500,
                color: '#c4b5fd',
                textDecoration: 'none',
                padding: '6px 14px',
                borderRadius: '8px',
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(139,92,246,0.25)',
                transition: 'all 0.2s ease',
              }}
              className="project-link-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                style={{ width: '14px', height: '14px' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      style={{
        background: `
          radial-gradient(circle at 20% 10%, rgba(56,189,248,0.08), transparent 40%),
          radial-gradient(circle at 80% 90%, rgba(168,85,247,0.08), transparent 45%),
          #020617
        `,
      }}
      className='w-full'
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. They reflect my ability to solve complex problems, work with different tools and technologies, and manage projects effectively.
        </motion.p>
      </div>

      {/* Filter Buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          marginTop: '40px',
        }}
      >
        {filterCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveFilter(cat.key)}
            style={{
              padding: '10px 24px',
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.5px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              outline: 'none',
              background:
                activeFilter === cat.key
                  ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                  : 'rgba(255,255,255,0.03)',
              border:
                activeFilter === cat.key
                  ? '1px solid rgba(139,92,246,0.5)'
                  : '1px solid rgba(255,255,255,0.08)',
              color:
                activeFilter === cat.key
                  ? '#ffffff'
                  : '#8b95c9',
              boxShadow:
                activeFilter === cat.key
                  ? '0 4px 20px rgba(99,102,241,0.3)'
                  : 'none',
              transform:
                activeFilter === cat.key
                  ? 'scale(1.05)'
                  : 'scale(1)',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '28px',
          marginTop: '48px',
          justifyItems: 'center',
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              index={index}
              {...project}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Hover styles */}
      <style>{`
        .project-card-wrapper:hover {
          border-color: rgba(99,102,241,0.4) !important;
          box-shadow: 0 8px 32px rgba(99,102,241,0.15), 0 0 0 1px rgba(99,102,241,0.1) !important;
        }
        .project-card-wrapper:hover .project-card-img {
          transform: scale(1.08);
        }
        .project-link-btn:hover {
          background: rgba(99,102,241,0.2) !important;
          border-color: rgba(139,92,246,0.4) !important;
          color: #e0e7ff !important;
        }
      `}</style>
    </section>
  );
};

export default SectionWrapper(Works, "");
