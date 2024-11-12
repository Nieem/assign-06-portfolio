import React from 'react';
import Image from '../assets/formal_pic.jpg';
import {FaGithub,FaYoutube,FaDribbble, FaLinkedin} from 'react-icons/fa';
import { fadeIn } from '../variants';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import resume_raysul from '../assets/files/raysul_hasan_cv.pdf'

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
                            'Front-end(React) Developer',
                            2000,
                            'Full-stack(MERN) Developer ',
                            2000,
                            'ASP.NET Developer',
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
                     viewport={{once:false,amount:0.7}} className='ms-2'>
                         Full stack software developer. Expertise in ASP.NET,React,Node JS,Sql Server,MongoDb,NEXTjs etc.
                    </motion.p>
                    <motion.div 
                    variants={fadeIn('up',0.6)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.7}}>
                        <button className='btn btn-lg'> contact me</button>
                        <a href={resume_raysul} download="Raysul's Resume" target='_blank'>
                          <button className='btn btn-lg  ms-1'> Download Resume</button>
                          </a>

                    </motion.div>

                    <div className='flex text-[20] gap-x-6 max-w-max mx-auto xl:ms-24 mt-2 xl:text[40]'>
                        <a
                            href="https://www.linkedin.com/in/nieem-hasan-a112b0bb/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <FaLinkedin size={30}/>
                        </a>
                        
                         <a
                        href="https://github.com/Nieem"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <FaGithub size={30}/>
                        </a>
                        <a
                            href="https://www.youtube.com/@raysulhasan5966"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <FaYoutube size={30}/>
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