import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import OussamaImg from "../images/Oussama.jpg"; // Check if this path is correct

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="flex mt-4 max-w-3xl leading-[30px]">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-[70%]"
        >
          I am a Computer Science student at ESI (The Higher National School of Computer Science Algiers) and multilingual
          speaker with a passion for artificial intelligence, and
          neural language processing, computer vision and UX/UI Design I am looking to join a company that values
          innovation, collaboration, and continuous learning and am confident that
          my enthusiasm and drive will help me succeed in any role that leverages
          my passion for technology.
        </motion.p>

        <div className="ml-8 w-[30%]">
          <Tilt className="w-full">
            <motion.div
              variants={fadeIn("right", "spring", 0.5, 0.75)}
              className="w-full p-[1px] rounded-[20px] shadow-card"
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col"
              >
                {OussamaImg ? (
                  <img
                    src={OussamaImg}
                    alt="Oussama"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                ) : (
                  <p className="text-red-500">Image not found!</p>
                )}
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
