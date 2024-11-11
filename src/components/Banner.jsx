import React from 'react';
import Image from '../assets/formal_pic.jpg';
import {FaGithub,FaYoutube,FaDribbble, FaLinkedin} from 'react-icons/fa';
import { fadeIn } from '../variants';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center bottom-5 mx-8'  id='home'>
            <div className='container mx-auto'>
            <div className='flex flex-col gap-y-4 lg:items-center lg:flex-row lg:gap-x-2'>
                 <div className='flex-1 text-center font-secondary lg:text-left'>
                    <motion.h1
                    variants={fadeIn('up',0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.7}}
                    className='text-[55px] font-bold leading-[0.8] lg:text-[80px]'>Raysul <span>Hasan</span>
                    </motion.h1>
                    <div className='mb-6 text-[36px] lg:text-[50px] font-secondary  uppercase font-semibold leading-[1]'>
                        <span className='mr-4'>I am a</span>
                        <TypeAnimation
                        sequence={[
                            'Web Developer',
                            2000,
                            'DB Administrator',
                            2000,
                            'Mobile App Developer',
                            2000
                        ]}
                        speed={50}
                        className='text-accent'
                        wrapper='span'
                        repeat={Infinity}


                        />
                    </div>
                    <motion.p 
                     variants={fadeIn('up',0.5)}
                     initial='hidden'
                     whileInView={'show'}
                     viewport={{once:false,amount:0.7}}>
                        fgfg hjkhjkhk hjjjhj hghghjg hghghghg ghjgjhg
                        hgghj jhjkhjkhkj jhhjkhjj jhjhjhjkk jhjhk gggg
                        ffgfg 
                    </motion.p>
                    <motion.div 
                    variants={fadeIn('up',0.6)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.7}}>
                        <button className='btn btn-lg'> contact me</button>

                    </motion.div>

                    <div className='flex text-[20] gap-x-6 max-w-max mx-auto lg:ms-5 mt-2'>
                        <a href='#'>
                            <FaGithub/>
                        </a>
                        <a href='#'>
                            <FaYoutube/>
                        </a>
                        <a href='#'>
                            <FaLinkedin/>
                        </a>
                    </div>
                 </div>
                 
                <motion.div 
                variants={fadeIn('down',0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false,amount:0.7}}>
                 <img src={Image} alt='' className='rounded-full h-[50vh] justify-start'/>
                 </motion.div>

                 </div>
                 </div>
           
        </section>
    );
};

export default Banner;