import React from 'react';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import img1 from '../assets/food.png';
import img2 from '../assets/it.jpg';
import img3 from '../assets/book.jpg';


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
                        
                        All of the projects below are the most recent work by me.You can check by live url and also goto projects github repo.
                        </p>
                        <button className='btn btn-sm mt-2'>View All Projects</button>
                    </div>
                    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl xl: mt-16'>
                        {/* overlay */}
                        <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

                        </div>
                        <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt=''/>
                        {/* pretitle */}
                        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
                            <span className='text-gray-300'> Raw Javascript Api Handeling</span>
                        </div>
                        {/* title */}
                        <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                        transition-all duration-700 z-40'>
                            <span className='text-3xl text-white'>Food Bar Portal</span>
                        </div>
                        <a
                            href="https://raysul-hasan.w3spaces.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                        <div className='absolute -bottom-full left-80 group-hover:bottom-24 transition-all duration-500 z-40'>
                            <button className=' btn btn-sm text-white'>Live Project</button>
                        </div>
                        </a>
                        {/* title */}
                        <a
                            href="https://github.com/Nieem/assign_2_online_food_portal.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                        <div className='absolute -bottom-full left-80 group-hover:bottom-10 
                        transition-all duration-700 z-40'>
                            <button className='btn btn-sm text-white ms-3'> Github</button>
                        </div>
                        </a>
                    </div>
                    </motion.div>
                              {/*end left side */}

                     {/* start right side */}
            
                <motion.div
                variants={fadeIn('left',0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false,amount:0.3}} 
                 className='flex-1 flex flex-col gap-y-10 xl:pb-10'>
                    {/* image */}
                    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                    {/* overlay */}
                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

                    </div>
                    <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt=''/>
                    {/* pretitle */}
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
                            <span className='text-gray-300'> React Router & Authentication<br/> with Firebase</span>
                        </div>
                        {/* title */}
                        <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                        transition-all duration-700 z-40'>
                            <span className='text-3xl text-white'> BD IT Training </span>
                        </div>
                        <a
                            href="https://assign4client.web.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                        <div className='absolute -bottom-full left-80 group-hover:bottom-24 transition-all duration-500 z-40'>
                            <button className=' btn btn-sm text-white'>Live Project</button>
                        </div>
                        </a>
                        {/* title */}
                        <a
                            href="https://github.com/Nieem/assign4client.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                        <div className='absolute -bottom-full left-80 group-hover:bottom-10 
                        transition-all duration-700 z-40'>
                            <button className='btn btn-sm text-white ms-3'> Github</button>
                        </div>
                        </a>
                </div>


                <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                    {/* overlay */}
                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>

                    </div>
                    <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt=''/>
                    {/* pretitle */}
                    <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
                            <span className='text-gray-300'> Full-stack (MERN) Project</span>
                        </div>
                        {/* title */}
                        <div className='absolute -bottom-full left-12 group-hover:bottom-14 
                        transition-all duration-700 z-40'>
                            <span className='text-3xl text-white'>Online Book Shop</span>
                        </div>
                        <a
                            href="https://assign-5-raysul.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                        <div className='absolute -bottom-full left-80 group-hover:bottom-24 transition-all duration-500 z-40'>
                            <button className=' btn btn-sm text-white'>Live Project</button>
                        </div>
                        </a>
                        {/* title */}
                        <a
                            href="https://github.com/Nieem/assign-5-client.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                        <div className='absolute -bottom-full left-80 group-hover:bottom-10 
                        transition-all duration-700 z-40'>
                            <button className='btn btn-sm text-white ms-3'> Github</button>
                        </div>
                        </a>
                  </div>
                </motion.div>
                   {/* end right side */}
            </div>
            </div>
        </section>
    );
};

export default Work;