/* eslint-disable no-unused-vars */
import React from 'react';
// motion
import { motion } from 'framer-motion';

// Variants
import { fadeIn } from '../variants';

// IMG
import img1 from '../assets/15-23-06-837_512.gif';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount:0.3}}
          >
            {/* text */}
            <div
            
            >
              <h2 className='h2 leading-tight text-accent'>My Latest Work.</h2>
              <p className='max-w-sm mb-16'>DESIGNING...</p>
              <a href='https://github.com/LucasWhirt'>
                <button className='btn btn-sm'>View My Github </button>
                </a>
              
              </div>
            {/* image */}
            <img 
            src={img1} alt='Latest Work' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
