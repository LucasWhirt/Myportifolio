import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='About' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen justify-start'>
          {/* image */}
          <motion.div
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          
            
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            transition={{ duration: 0.3 }}
          ></motion.div>
          {/* text */}
          <motion.div
            className='flex-1'
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            transition={{ duration: 0.5 }}
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I&apos;m a Front-End Developer with over 2 years of experience.</h3>
            <p className='mb-6'>
              
I am a web development professional with 2 years of experience, seeking opportunities to continue growing in the field. I have strong skills in front-end and back-end development, proficient in HTML, CSS, JavaScript, and popular frameworks like React and Angular. I work well in a team, am resourceful, detail-oriented, and always willing to learn and stay updated. I am looking for a stimulating environment where I can contribute my skills and learn from experienced professionals. I am ready to take on new challenges and deliver high-quality results.
            </p>
            {/* stats */}
            <div className='flex gap-x-6- lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={2} duration={4} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of
                  <br />
                  Experience
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <a href='https://wa.me/351924955524'><button className='btn btn-lg'>Contact me</button></a>
              
              <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
