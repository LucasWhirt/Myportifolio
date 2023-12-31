/* eslint-disable no-unused-vars */
import React from 'react';
// motion
import { motion } from 'framer-motion';

// Variants
import { fadeIn } from '../variants';

// Image
import imgquack from '../assets/XOsX.gif';

const Contact = () => {
  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            
            <div className='max-w-[200px]'>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let&apos;s work <br />together!
              </h2>
              <img src={imgquack} alt='Latest Work' className='w-full h-full object-cover' />
            </div>

           
      
             
          
          
          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your name'
            />

            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              placeholder='Your email'
            />

            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              placeholder='Your message'
              rows={1}
            />
            <button className='btn btn-lg'>Send message</button>
          </motion.form>
          
        </div>
        
      </div>
      
    </section>
  );
};

export default Contact;
