import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas"; // Assuming this is your desktop-specific component
import Typewriter from "typewriter-effect";
import { isMobile } from "react-device-detect";

const Hero = () => {
  // Function to animate typing
  const animateTyping = (node) => {
    node.querySelectorAll(".letter").forEach((letter, index) => {
      setTimeout(() => {
        letter.style.color = "#915EFF"; // Change color
        letter.classList.add("pulse"); // Add pulse animation
      }, 50 * index); // Delay based on letter position
    });
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient parallax-bg"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Oussama</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I do
            <Typewriter
              options={{
                strings: ["Ai & ML", "NLP", "Computer Vision", "Web Development", "UX/UI Design"],
                autoStart: true,
                loop: true,
                loopCount: Infinity,
                deleteSpeed: "natural",
                pauseFor: 1000,
              }}
              onInit={(instance) => {
                instance.onComplete(() => {
                  const node = document.querySelector(".typewriter");
                  animateTyping(node);
                });
              }}
            />
          </p>
        </div>
      </div>

      {/* Conditional Rendering for Desktop Content */}
      {!isMobile && <ComputersCanvas />}

      {/* Mobile-Specific Ripple Effect */}
      {isMobile && (
        <motion.div
          className="absolute inset-0 flex justify-center items-center cursor-pointer"
          onClick={() => console.log("Ripple clicked")}
          whileTap={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <motion.div
            className="bg-[#915EFF] rounded-full w-8 h-8"
            animate={{ scale: 1.5 }}
            initial={{ scale: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>
      )}

      {/* Floating Action Button */}
      {isMobile && (
        <motion.button
          className="fixed bottom-10 right-10 bg-[#915EFF] rounded-full w-16 h-16 flex items-center justify-center text-white font-bold shadow-lg transform hover:-translate-y-1 transition-transform duration-150 ease-in-out"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More
        </motion.button>
      )}
    </section>
  );
};

export default Hero;
