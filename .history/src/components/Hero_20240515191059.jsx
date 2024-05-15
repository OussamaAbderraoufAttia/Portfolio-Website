import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";
import { isMobile } from "react-device-detect";
import earth from "../images/earth.svg";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center gap-10`} // Changed flex-row to flex-col and added gap-10
      >
        <div className="flex flex-col justify-center items-center mt-5"> {/* Text container */}
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Oussama</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I do{" "}
            <Typewriter
              options={{
                strings: [
                  "Ai & ML",
                  "NLP",
                  "Computer Vision",
                  "Web Development",
                  "UX/UI Design",
                ],
                autoStart: true,
                loop: true,
                loopCount: Infinity,
                deleteSpeed: "natural",
                pauseFor: 1000,
              }}
            />
          </p>
        </div>
        {/* Mobile-Specific Animated Earth */}
        {isMobile && (
          <motion.div className="w-full flex justify-center"> {/* Added w-full */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 60, // Rotate once every 60 seconds
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <img src={earth} alt="Earth" className="w-256 h-256" />
            </motion.div>
          </motion.div>
        )}
      </div>
      {/* Conditional Rendering for Desktop Content */}
      {!isMobile && <ComputersCanvas />}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
