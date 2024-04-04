/* import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas, EarthCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

      <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-transparent via-violet-500 to-violet-500' style={{
        animation: 'electricityEffect 1.5s infinite linear',
        backgroundSize: '100% 200%'
      }}>
      </div>

        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#4d56ff]'>Tzu-Ching Wen</span>
          </h1>
          <p className={`${styles.heroSubText} mt-6 text-white-300`}>
            
          Hello, I'm a Full Stack Software Developer with a specialization in automating digital fabrication and design processes. <br className='sm:block hidden' />
            <br className='sm:block hidden' />
            I've spearheaded numerous innovative projects, including 3D design configurator WebApps, APIs, and plugins.  <br className='sm:block hidden' />
            <br className='sm:block hidden' />
            My passion is to blends software engineering with design creativity and manufacturing to enhance automation and efficiency. <br className='sm:block hidden' />
          </p>
        </div>
      </div> */


import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from "../styles";
import { ComputersCanvas, EarthCanvas } from "./canvas";

const Hero = () => {

  
  const [currentText, setCurrentText] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0); // State to manage loading progress

  const texts = [
    "Hello, I'm a Full Stack Software Developer with a specialization in automating digital fabrication and design processes.",
    "I've spearheaded numerous innovative projects, including 3D design configurator WebApps, APIs, and plugins.",
    "I am passionate about merging software engineering, design creativity, and manufacturing to boost automation and efficiency."
  ];

  useEffect(() => {
    const cycleDuration = 6000;
    const timer = setTimeout(() => {
      setCurrentText((currentText + 1) % texts.length);
    }, cycleDuration);

    return () => clearTimeout(timer);
  }, [currentText, texts.length]);

  // Simulate loading progress
  useEffect(() => {
    if (loadingProgress < 100) {
      const interval = setInterval(() => {
        setLoadingProgress((prevProgress) => {
          const nextProgress = prevProgress + 10;
          if (nextProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return nextProgress;
        });
      }, 200); // Adjust this to simulate faster or slower loading

      return () => clearInterval(interval);
    }
  }, [loadingProgress]);
      
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>

          <div>
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
              className='w-5 h-5 rounded-full bg-[#9f3fff]'
            />
          </div>
          <div>
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
              className='w-1 sm:h-60 h-40 violet-gradient'
            />
          </div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#4d56ff]'>Tzu-Ching Wen</span>
          </h1>
          <div className={`${styles.heroSubText} mt-6 text-white-300 overflow-hidden`} style={{ height: '80px' }}>
            <AnimatePresence>
              <motion.p
                key={currentText}
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                  opacity: { duration: 1, ease: "linear" },
                  y: { duration: 1, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                {texts[currentText]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {loadingProgress < 100 ? (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${loadingProgress}%` }}
            transition={{ duration: 0.2, ease: "linear" }}
            style={{
              height: '5px',
              backgroundColor: '#4d56ff',
              maxWidth: '100%',
            }}
          />
          <div style={{ marginTop: '10px', color: '#fff', textAlign: 'center' }}> {/* Adjusted: Added div for text with margin-top */}
            Loading {loadingProgress}%
          </div>

        </div>
      ) : (
        <>
          <ComputersCanvas />
          {/* Static label and line example */}
{/*                 <div style={{
                  position: 'absolute',
                  bottom: '40px', // Position according to your needs
                  left: '50%',
                  transform: 'translateY(-12%) translateX(-165%)',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <div style={{
                  position: 'relative',
                  width: '2px',
                  height: '40px',
                  backgroundColor: '#4d56ff',
                }}></div>
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  padding: '8px 16px',
                  borderRadius: '60px',
                  color: '#fff',
                  fontWeight: '',
                  marginLeft: '10px', // Adjust spacing between line and label as needed
                  opacity: 0.5,
                }}>
                Dual Arm Winding System
            </div> 
          </div>*/}
        </>
            )}
      
                        
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white-100 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white-100 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;