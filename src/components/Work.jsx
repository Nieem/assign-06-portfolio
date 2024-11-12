import React from 'react';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';

const Work = () => {
    return (
        <section className='py-8 xl:py-24 xlh-screen flex items-center' id='work'>
            <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row gap-x-10'>
               {/* left side */}
                <motion.div
                variants={fadeIn('right',0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false,amount:0.3}}
                className='flex-1 flex flex-col gap-y-12  mb-10 xl:mb-0'>
                    <div>
                        <h2 className='h2 leading-tight text-accent'>
                            My Latest <br/>
                            Work
                        </h2>
                        <p className='max-w-sm'>
                        
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                        <button className='btn btn-sm'>View All Projects</button>
                    </div>
                    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                        {/* overlay */}
                        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

                        </div>
                        <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt=''/>
                        {/* pretitle */}
                        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
                            <span className='text-gray-300'>UI/UX Design</span></div>
                        {/* title */}
                        <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                        transition-all duration-700 z-40'>
                            <span className='text-3xl text-white'>Portfolio</span>
                        </div>
                    </div>
                    </motion.div>
                              {/*end left side */}

                     {/* start right side */}
            
                <motion.div
                variants={fadeIn('left',0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false,amount:0.3}} 
                 className='flex-1 flex flex-col gap-y-10 xl:pt-16'>
                    {/* image */}
                    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                    {/* overlay */}
                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

                    </div>
                    <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt=''/>
                    {/* pretitle */}
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
                        <span className='text-gray-300'>UI/UX Design</span></div>
                    {/* title */}
                    <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                    transition-all duration-700 z-40'>
                        <span className='text-3xl text-white'>Portfolio</span>
                    </div>
                </div>


                <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                    {/* overlay */}
                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

                    </div>
                    <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt=''/>
                    {/* pretitle */}
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
                        <span className='text-gray-300'>UI/UX Design</span></div>
                    {/* title */}
                    <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                    transition-all duration-700 z-40'>
                        <span className='text-3xl text-white'>Portfolio</span>
                    </div>
                  </div>
                </motion.div>
                   {/* end right side */}
            </div>
            </div>
        </section>
    );
};

export default Work;