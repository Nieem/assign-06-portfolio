import React from 'react';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';

const services=[
    {
        name:'Front-end Developer(React)',
        description:'The React library is a front-end development toolkit. Developers use it to handle the view layer of an application, which only deals with the elements of a page that are visible to users. However, the React library is JavaScript based, and JavaScript is a full-stack technology. I am expertise in Tailwind css,Daisy UI and raw Javascript.',
         link:'Learn more'
    },
    {
        name:' FULL-STACK(MERN) DEVELOPER',
        description:'MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily. I have used nodejs ,Mongodb as a backend tehnology.I have also experienced in NextJs.',
         link:'Learn more'
    },
    {
        name:'.NET DEVELOPER',
        description:'I have experieneed with .NET framework.MSSql server,Entity Framework,ASP.NET Core are all are the technology used by me.',
         link:'Learn more'
    },
   
]

const Services = () => {
    return (
        <section className='py-8 xl:py-24 xlh-screen flex items-center' id='services'>
           <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>

                    
                    {/* left part */}
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
                    
                    {/* end left part */}
                {/*start right  part */}
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
                                        {/* <div>links</div> */}
                                    </motion.div>
                                );
                            
                        }) }
                    </div> 
                     {/*end right  part */}
                    
                </div>
            </div> 
        </section>
    );
};

export default Services;