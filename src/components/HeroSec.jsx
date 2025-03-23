import React from 'react'
import landing_Img from '../assets/landing_Img.png';
import save_Personalize from '../assets/save_Personalize.png';
import recipe_Search from '../assets/recipe_Search.png';
import recipe_Guide from '../assets/recipe_Guide.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const HeroSec = ({ sectionRef }) => {
  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='h-auto flex flex-col justify-center items-center w-full px-[2rem] pb-[3rem]'>
      <div className='flex w-[93%] flex-col-reverse md:flex-row justify-between items-center gap-[0.8rem]'>
        <div className='flex flex-col items-start gap-[1rem]'>
          <h1 className='font-Circular-Bold text-[2.5rem] text-txt-black leading-[3.2rem] lg:text-[4rem] lg:leading-[5rem] ml-[-0.25rem]'>Discover <span className='text-sec-orange'>Delicious</span> <span className='text-nav-green'>Recipes</span> Instantly!</h1>
          <p className='font-Circular-Medium text-txt-gray-black'>Find the perfect dish with easy step-by-step guides, smart recommendations, and ingredient-based searches. Cook, save, and share your favorites!</p>
          <button className='flex justify-center items-center font-Circular-Medium bg-btn-green px-[1.2rem] py-[0.6rem] rounded-[1.5rem] text-nav-green gap-[0.7rem] cursor-pointer' onClick={scrollToSection}>
            <p>Explore Recipes</p>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="w-[80%] flex justify-end items-center">
          <img
            src={landing_Img}
            className=""
          />
        </div>
      </div>
      <ul className='w-[93%] flex flex-col sm:flex-row items-center justify-center gap-[4rem] mt-[4rem] text-txt-black'>
        <li className='flex flex-col items-center justify-center text-center'>
          <img
            src={recipe_Search}
            alt=""
            className='w-[4rem]'
          />
          <p className='font-Circular-Bold text-[1.4rem] mt-[1.5rem]'>Smart Search Recipe</p>
          <p className='font-Circular-Medium text-txt-gray-black mt-[0.5rem]'>Find the perfect dish in seconds! Search by ingredients, cuisine, or dietary preference. No more wondering what to cook!</p>
        </li>
        <li className='flex flex-col items-center justify-center text-center'>
          <img
            src={recipe_Guide}
            alt=""
            className='w-[4rem]'
          />
          <p className='font-Circular-Bold text-[1.4rem] mt-[1.5rem]'>Step-by-Step Cooking Guides</p>
          <p className='font-Circular-Medium text-txt-gray-black mt-[0.5rem]'>Cook with confidence! Follow easy, detailed instructions with images and videos to make every meal a success.</p>
        </li>
        <li className='flex flex-col items-center justify-center text-center'>
          <img
            src={save_Personalize}
            alt=""
            className='w-[4rem]'
          />
          <p className='font-Circular-Bold text-[1.4rem] mt-[1.5rem]'>Save & Personalize</p>
          <p className='font-Circular-Medium text-txt-gray-black mt-[0.5rem]'>Your personal cookbook! Save your favorite recipes, get personalized meal recommendations, and create shopping lists effortlessly.</p>
        </li>
      </ul>
    </div>
  )
}

export default HeroSec