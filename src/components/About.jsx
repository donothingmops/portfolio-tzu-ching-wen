import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[255px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 50,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-18 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-20 h-18 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
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
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionHeadText}>Introduction.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm an experienced Full Stack software developer with expertise in both frontend UI/UX and backend API development. 
        My passion lies in parametric 3D modeling. On the <span className='text-[#4d56ff]'>frontend</span>, 
        I specialize in creating 3D interactive user interfaces, utilizing frameworks such as React, Node.js, 
        Three.js, and Babylon.js. For the <span className='text-[#4d56ff]'>backend</span>, I have developed various APIs, #
        including ones for building configurators to analyze structures and generating 6-axis robot paths for digital fabrication, among others.
        <br /><br />
        I am a quick learner who dedicates my free time to enhancing my skills with emerging technologies. I engage closely with clients to develop efficient, 
        scalable, and user-centric solutions that address real-world challenges. I'm eager to collaborate and bring innovative ideas to fruition!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");