import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Image from '../assets/logo Lucas.png';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* Text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              animate='show' 
              transition={{ duration: 1.2 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
            >
              LUCAS <span>WHIRT</span>
            </motion.h1>

            <motion.div 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show' 
              transition={{ duration: 1.2 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'Front End Developer',
                  2000,
                  'Full Stack Developer',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              animate='show' 
              transition={{ duration: 1.2 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              &quot;Welcome to my Portfolio!
              Explore my work and projects.
              Get inspired by innovative designs and creative solutions.
              Let&apos;s connect and bring your ideas to life.
              Contact me to discuss your next web development project.&quot;
            </motion.p>

            <motion.div 
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              animate='show' 
              transition={{ duration: 1.2 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <a href='https://wa.me/351924955524'>
              <button className='btn btn-lg'>Contact me</button> </a>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>

            {/* Social */}
            <motion.div 
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              animate='show' 
              transition={{ duration: 1.2 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='https://www.linkedin.com/in/lucas-whirt-b08490220/'>
                <FaLinkedin />
              </a>
              <a href='https://github.com/LucasWhirt'>
                <FaGithub />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('up', 0.8)}
            initial='hidden'
            animate='show' 
            transition={{ duration: 1.2 }}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            {/* Image */}
            <img src={Image} alt='' className='logo' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
