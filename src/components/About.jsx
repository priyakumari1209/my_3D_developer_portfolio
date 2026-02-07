import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[260px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className="w-full p-[1px] rounded-[20px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg"
    >
      <div className="glass-card py-8 px-10 min-h-[280px] flex flex-col justify-center items-center gap-6 transition-all duration-300 hover:scale-[1.05]">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(99,102,241,0.9)]"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a skilled Android Developer with strong experience in Java,
        specializing in building reliable and user-friendly Android
        applications. I enjoy turning ideas into functional, high-quality apps
        that make a difference. I’m a quick learner and work closely with clients
        to deliver efficient, scalable mobile solutions that solve real-world
        problems. Let’s collaborate and bring your Android app ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
