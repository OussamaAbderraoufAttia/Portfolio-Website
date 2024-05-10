import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import OussamaImg from "../images/Oussama.jpg"; // Import your image here

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a Computer Science student at ESI (The Higher National School of Computer Science Algiers) and multilingual
        speaker with a passion for artificial intelligence, and
        neural language processing, computer vision and UX/UI Design I am looking to join a company that values
        innovation, collaboration, and continuous learning and am confident that
        my enthusiasm and drive will help me succeed in any role that leverages
        my passion for technology.
      </motion.p>

      <Tilt className="xs:w-full sm:w-auto">
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 1)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img
              src={OussamaImg}
              alt="Oussama"
              className="w-full h-auto object-cover rounded-[20px]"
              loading="lazy"
            />
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

export default SectionWrapper(About, "about");
