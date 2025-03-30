import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion.js";
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <motion.nav
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className='flex justify-center items-center py-[1.5rem]'
    >
      <div className='w-[90%] lg:w-[91%] bg-nav-green px-[2rem] py-[1.2rem] rounded-[1rem] flex items-center justify-between shadow-[1px_0_30px_rgba(0,0,0,0.2)]'>
        <Link to='/' className='font-Circular-Bold tracking-[0.5px]'>
          <div>
            <h1 className='text-white text-[1.3rem] sm:text-[1.5rem]'>Fork & Fire</h1>
          </div>
        </Link>
        <div>
          <ul className='flex gap-[1rem] font-Circular-Medium'>
            <li className='text-[1rem] sm:text-[1.2rem] cursor-pointer'>
              <NavLink to='/' className={({ isActive }) => `${isActive ? 'bg-white' : ''} ${isActive ? 'text-txt-black' : 'text-white'} py-[0.5rem] px-[0.7rem] hidden sm:flex justify-center items-center gap-[0.5rem] rounded-[0.6rem] transition`}>
                <FontAwesomeIcon icon={faHome} className='text-[1rem]' />
                Home
              </NavLink>
              <NavLink to='/' className={({ isActive }) => `${isActive ? 'bg-white' : ''} ${isActive ? 'text-txt-black' : 'text-white'} py-[0.5rem] px-[0.7rem] flex sm:hidden justify-center items-center rounded-[0.6rem] transition`}>
                <FontAwesomeIcon icon={faHome} />
              </NavLink>
            </li>
            <li className='text-[1rem] sm:text-[1.2rem] cursor-pointer'>
              <NavLink to='/favorites' className={({ isActive }) => `${isActive ? 'bg-white' : ''} ${isActive ? 'text-txt-black' : 'text-white'} py-[0.5rem] px-[0.7rem] hidden sm:flex justify-center items-center gap-[0.5rem] rounded-[0.6rem] transition`}>
                <FontAwesomeIcon icon={faHeart} className='text-[1rem]' />
                Favorites
              </NavLink>
              <NavLink to='/favorites' className={({ isActive }) => `${isActive ? 'bg-white' : ''} ${isActive ? 'text-txt-black' : 'text-white'} py-[0.5rem] px-[0.7rem] flex sm:hidden justify-center items-center rounded-[0.6rem] transition`}>
                <FontAwesomeIcon icon={faHeart} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar