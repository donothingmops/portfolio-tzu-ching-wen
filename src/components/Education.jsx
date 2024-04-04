import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";



const EducationCard = ({ education }) => (
      <VerticalTimelineElement
        contentStyle={{
          background: "#2d1768",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={education.date}
        iconStyle={{ background:'#FFFFFF' }}
        icon={
          // Apply motion.div here for the hover effect
          <motion.div 
          whileHover={{ scale: 1.4 }} 
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', borderRadius: '50%' }}
          className="bg-white" // Ensures the background remains white
        >
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={education.icon}
              alt={education.company_name}
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
          </motion.div>
        }
      >
       <div>
          <p className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}>{education.degree}</p>
          <h3 className='text-white text-[24px] font-bold'>{education.title}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {education.company_name}
          </p>
        </div>
  
{/*         <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul> */}
      </VerticalTimelineElement>
    );



const Education = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Academy Achievements</p>
            <h2 className={styles.sectionHeadText}>Education & Bootcamp</h2>
        </motion.div>

        <div className="mt-20 flex flex-column">
            <VerticalTimeline>
                {educations.map((education, index) => (
                    <EducationCard 
                        key={index} 
                        education={education} 
                    />
                ))}
            </VerticalTimeline>
        </div>
    </>
  )
}
export default SectionWrapper(Education, "education");