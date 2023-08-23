import React, { useState } from 'react'

//icons
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

//logo
import Logo from '../assets/logo2.svg';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <section className='bg-accent flex w-full items-center absolute h-20 px-4 z-10'>
        <div className='container mx-auto '>
            <div className='flex items-center justify-between '>
               
                {/* Logo */}
                <div>
                    <a href='/home'>
                        <img src={Logo} alt='logo' width={190} height={60}/>
                    </a> 
                </div>

                {/* link */}
                <div>
                    <ul className='hidden md:flex items-center gap-10'>
                        <li>
                            <a className='font-primary font-[600] text-secondary' href='#home'>Home</a>
                        </li>
                        <li>
                            <a className='font-primary font-[600] text-secondary' href='#services'>Services</a>
                        </li>  
                    </ul>
                </div>
                    
                {/* icons */}
                <div onClick={handleNav} className='md:hidden z-10'>
                    {nav ? <AiOutlineClose className='text-secondary' size={30}/> : <AiOutlineMenu className='text-secondary' size={30}/> }
                </div>

                {/* Navbar */}
                <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-20 md:top-0 w-full bg-gray-100/90 px-4 py-7' : ' hidden md:hidden'}>
                   <ul className='md:flex'>
                        <li className='border-b'>
                            <a className='font-primary font-[600] text-accent' href='/home'>Home</a>
                        </li>
                        <li className='border-b'>
                            <a className='font-primary font-[600] text-accent' href='/services'>Services</a>
                        </li>  
                    </ul> 
                </div>
            </div> 
        </div>            
    </section>
  )
}

export default Navbar;
