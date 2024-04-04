
import  {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    whileHover={{ scale: 1.5, zIndex: 50 }} // This line adds the hover effect

    >
      <Tilt
        options={{
          max: 2,
          scale: 1,
          speed: 100,
        }}
        /* className='bg-cardpurple p-5 rounded-2xl sm:w-[360px] w-full' */
        className="bg-cardpurple p-5 rounded-2xl sm:w-[360px] w-full hover:p-3 transition-all duration-300" // Reduced padding on hover
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover cursor-pointer'> */}
          {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover cursor-pointer' onClick={() => window.open(source_code_link, "_blank")}> */}
{/*             <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div> */}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following selected projects showcase my technical skills and experience 
          through practical examples. Each project briefly described my contributions 
          and responsibilities, highlighting my ability to solve problems and integrate
          various technologies in software engineering and robotics fabrication.
          
          <br /><br /> 
          
          I look forward to discussing these projects with you in further detail.
        </motion.p>
      </div>


      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");