import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import '@flaticon/flaticon-uicons/css/all/all.css';

const Footer = () => {
    return (
        <footer className='flex flex-col bg-btn-green justify-center items-center w-full px-[3rem] py-[2rem] gap-[1rem]'>
            <div className='mobile:flex mobile:gap-[1.5rem] justify-center items-center'>
                <ul className='flex flex-row text-txt-gray-black justify-center items-center gap-[1rem] text-[1.5rem]'>
                    <li className='hover:text-txt-black'>
                        <a href="https://www.linkedin.com/in/ratneshchipre/" target="_blank"><i class="fi fi-brands-linkedin"></i></a>
                    </li>
                    <li className='hover:text-txt-black'>
                        <a href="https://github.com/ratneshchipre" target="_blank"><i class="fi fi-brands-github"></i></a>
                    </li>
                    <li className='hover:text-txt-black'>
                        <a href="https://x.com/ratneshchipre" target="_blank"><i class="fi fi-brands-twitter-alt"></i></a>
                    </li>
                </ul>
                <a href="https://drive.google.com/drive/folders/1Dla-UoVHD83M3Tjp96f_xdvs-7hQ7ziW" target="_blank">
                    <button className='bg-white hover:bg-gray-50 flex justify-center items-center font-Circular-Medium text-txt-black py-[0.5rem] px-[1rem] mt-[0.8rem] mobile:mt-[0rem] rounded-2xl cursor-pointer'>
                        <FontAwesomeIcon icon={faCircleArrowDown} className='mr-[0.6rem] text-[1.1rem]' />
                        Download our App
                    </button>
                </a>
            </div>
            <p className='font-Circular-Medium text-txt-gray-black text-center'>Copyright © 2025. All rights reserved | Made by <span className='font-Circular-Bold text-txt-black'>Ratnesh Chipre</span></p>
        </footer>
    )
}

export default Footer