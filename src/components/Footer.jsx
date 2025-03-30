import React from 'react'
import '@flaticon/flaticon-uicons/css/all/all.css';

const Footer = () => {
    return (
        <footer className='flex flex-col bg-btn-green justify-center items-center w-full px-[3rem] py-[2rem] gap-[1rem]'>
            <div>
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
            </div>
            <p className='font-Circular-Medium text-txt-gray-black text-center'>Copyright @2025. All rights reserved | Made by <span className='font-Circular-Bold text-txt-black'>Ratnesh Chipre</span></p>
        </footer>
    )
}

export default Footer