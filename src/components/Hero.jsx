import { motion } from "framer-motion";
import { styles } from "../styles";
import DownloadIcon from '@mui/icons-material/Download';
import TouchAppIcon from '@mui/icons-material/TouchApp';

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { ComputersCanvas } from "./canvas";

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { CiFileOn } from "react-icons/ci";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
        <div className="text-center">
  <h1 className={`${styles.heroHeadText} text-white`}>
    Hi, I'm <span className='text-[#915EFF]'>Hemanth</span>
  </h1>

  <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    I develop user interfaces, <br className='sm:block hidden' />
    mobile features and Android applications
  </p>
</div>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces, <br className='sm:block hidden' />
            mobile features and Android applications
          </p> */}

          {/* ---------- Buttons Section ---------- */}
          <div className="mt-6 flex flex-col gap-4">

            {/* Primary Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
  {/* Download Resume Button */}
  <a
    href="./images/my resume (1).pdf"
    download
    className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A73E8] text-white shadow-md hover:shadow-lg hover:bg-[#155ABC] transition-all duration-300"
  >
    <DownloadIcon className="text-white" />
    Download Resume
  </a>

  {/* Get in Touch */}
  <a
    href="#contact"
    className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1A73E8] text-[#1A73E8] bg-white shadow-md hover:bg-[#1A73E8] hover:text-white transition-all duration-300"
  >
    <TouchAppIcon />
    Get In Touch
  </a>
</div>

            {/* ---- MUI Chip Social Icons ---- */}
            <Stack direction="row" spacing={2} flexWrap="wrap" className="mt-2">

              <Chip
                label="LinkedIn"
                icon={<FaLinkedin />}
                component="a"
                href="https://www.linkedin.com/"
                target="_blank"
                clickable
                sx={{
                  color: "white",
                  border: "1px solid #555",
                  "&:hover": { borderColor: "#0A66C2", color: "#0A66C2" },
                }}
              />

              <Chip
                label="Github"
                icon={<FaGithubSquare />}
                component="a"
                href="https://github.com/"
                target="_blank"
                clickable
                sx={{
                  color: "white",
                  border: "1px solid #555",
                  "&:hover": { borderColor: "#0A66C2", color: "#0A66C2" },
                }}
              />

              <Chip
                label="Instagram"
                icon={<IoLogoInstagram />}
                component="a"
                href="https://instagram.com/"
                target="_blank"
                clickable
                sx={{
                  color: "white",
                  border: "1px solid #555",
                  "&:hover": { borderColor: "#0A66C2", color: "#0A66C2" },
                }}
              />

              <Chip
                label="Resume"
                icon={<CiFileOn />}
                component="a"
                href="./images/my resume (1).pdf"
                target="_blank"
                clickable
                sx={{
                  color: "white",
                  border: "1px solid #555",
                 "&:hover": { borderColor: "#0A66C2", color: "#0A66C2" },
                }}
              />
            </Stack>

          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
