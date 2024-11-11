import React from 'react';
import Image from '../assets/formal_pic.jpg';
import {FaGithub,FaYoutube,FaDribbble} from 'react-icons/fa';
import { fadeIn } from '../variants';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center bottom-5'  id='home'>
            <div className='container mx-auto'>
            <div className='flex flex-col gap-y-8 lg:items-center lg:flex-row lg:gap-x-12 lg:mx-auto'>
                 <div className='flex-1 text-center font-secondary lg:text-left'>
                    <motion.h1
                    variants={fadeIn('up',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.7}}
                    className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Raysul <span>Hasan</span>
                    </motion.h1>
                    <div className='mb-6 text-[36px] lg:text-[60px] font-secondary  uppercase font-semibold leading-[1]'>
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
                    <p>
                        fgfg hjkhjkhk hjjjhj hghghjg hghghghg ghjgjhg
                        hgghj jhjkhjkhkj jhhjkhjj jhjhjhjkk jhjhk
                    </p>
                    <div>
                        <button className='btn btn-lg'> contact me</button>

                    </div>
                 </div>
                 
                <div>
                 <img src={Image} alt='' className='rounded-full h-[70vh]'/>
                 </div>

                 </div>
                 </div>
           
        </section>
    );
};

export default Banner;