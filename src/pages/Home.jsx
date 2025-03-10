import React from 'react'
import HeroSec from '../components/HeroSec';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import RecipeCard from '../components/RecipeCard';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <HeroSec />

      <div className='w-full py-[3rem] px-[2.5rem] bg-btn-green text-txt-black'>

        <h1 className='font-Circular-Bold text-[1.7rem]'>Popular Recipes</h1>

        <form className='flex items-center mt-[1.5rem] mb-[4rem]'>

          <input
            type="text"
            placeholder='Search for Recipe...'
            className='font-Circular-Medium py-[0.5rem] px-[1.2rem] bg-white border-[1.5px] outline-none border-nav-green rounded-l-[1rem] w-full'
          />

          <button className='bg-nav-green py-[0.5rem] px-[1.2rem] border-[1.5px] border-nav-green rounded-r-[1rem] cursor-pointer'>
            <FontAwesomeIcon
              icon={faSearch}
              className='text-white'
            />
          </button>

        </form>

        <RecipeCard />

      </div>

    </div>
  )
}

export default Home