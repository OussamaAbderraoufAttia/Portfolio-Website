import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "typewriter-effect";
import { isMobile } from "react-device-detect";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
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
      </div>
      {/* Conditional Rendering for Desktop Content */}
      {!isMobile && <ComputersCanvas />}
      {/* Mobile-Specific Animated Element */}
      {/* Mobile-Specific Animated Element */}
{isMobile && (
  <motion.div
    className="absolute bottom-20 left-0 right-0 mx-auto"
    animate={{
      y: [-100, 100],
      rotate: [0, 360],
      scale: [1, 1.5, 1],
    }}
    transition={{
      duration: 3,
      ease: "easeInOut",
      times: [0, 0.5, 1],
      loop: Infinity,
      repeatDelay: 1,
    }}
  >
    <div className="relative w-32 h-32">
      <motion.div
        className="absolute inset-0 bg-[#915EFF] rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
          repeatDelay: 0.5,
        }}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotate: [-360, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          loop: Infinity,
          repeatDelay: 1,
        }}
      >
        <span className="text-white font-bold text-4xl">⚡</span>
      </motion.div>
    </div>
  </motion.div>
)}
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