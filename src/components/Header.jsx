import React from 'react';
import Logo from '../assets/head_left_logo.svg'

const Header = () => {
    return (
        <header className='py-8'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <a>
                    <img src={Logo} alt='' className='rounded-full h-[10vh] ms-5 '/>
                    </a>
                    <button className='btn btn-sm'>Work with me</button>

                </div>
            </div>
        </header>
    );
};

export default Header;