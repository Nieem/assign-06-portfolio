import React from 'react';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import '../index.css'
const Contact = () => {
    return (
        <section className='px-24 xl:py-12 xl:mb-16' id='contact'>
            <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row'>
                <div className='flex-1'>
                    <div>
                        <h4 className='text-xl uppercase text-neutral-200 font-medium mb-2 tracking-wide'>Get in touch</h4>
                        <h2 className='text-[45px] xl:text-[60px] leading-none mb-12'>Let's work <br/> together!</h2>
                    </div>
             </div>
                <form className='flex-1 border rounded-2xl flex flex-col gap-y-2 pb-12 p-6 items-start'>
                    <input className='bg-transparent border-b py-3 outline-none w-full transition-all placeholder:text-white focus:border-b-red-300'
                     type='text'
                    placeholder='Your Name'
                    />
                    <input className='bg-transparent border-b py-3 outline-none w-full transition-all placeholder:text-white focus:border-b-red-300'
                     type='text'
                    placeholder='Your Email'
                    />
                    <textarea className='bg-transparent border-b py-3 outline-none w-full transition-all placeholder:text-white focus:border-b-red-300 resize-none mb-12'
                     
                    placeholder='Your message'>

                    </textarea>
                    <button className='btn btn-lg'>Send message</button>

                </form>
            </div>
        </div>
        </section>
    );
};

export default Contact;