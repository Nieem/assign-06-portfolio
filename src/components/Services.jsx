import React from 'react';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';

const services=[
    {
        name:'UI/UX designer',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
         link:'Learn more'
    },
    {
        name:'.NET DEVELOPER',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
         link:'Learn more'
    },
    {
        name:'MERN STACK DEVELOPER',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
         link:'Learn more'
    },
    {
        name:'MOBILE APP DEVELOPER',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
         link:'Learn more'
    }
]

const Services = () => {
    return (
        <section className='py-8 xl:py-24 xlh-screen flex items-center' id='services'>
           <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>

                    

                    <motion.div 
                    variants={fadeIn('right',0.3)}
                                        initial='hidden'
                                        whileInView={'show'}
                                        viewport={{once:false,amount:0.4}} 
                    
                     className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
                        <h2 className='h2 text-accent mb-6'>What I Do.</h2>
                        <h3 className='h3 max-w-[455px] mb-16'>Contrary to popular belief, Lorem Ipsum is not simply random text.
                             </h3>
                             <button className='btn btn-sm'>see my work</button>
                    </motion.div>
                    
                    
                
                    <div>
                        {
                            services.map((service,index)=>{
                                const {name,description,link}=service;
                                return(
                                    <motion.div 
                                    variants={fadeIn('left',0.3)}
                                        initial='hidden'
                                        whileInView={'show'}
                                        viewport={{once:false,amount:0.7}} 
                                        className='border-b border-white/20 h-[176px] mb-[38px] flex' key={index}>
                                        <div className='max-w-[476px]'>
                                            <h4 className='text-[20] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                                            <p className='font-secondary leading-tight'>{description}</p>
                                        </div>
                                        <div>links</div>
                                    </motion.div>
                                );
                            
                        }) }
                    </div> 
                    
                </div>
            </div> 
        </section>
    );
};

export default Services;