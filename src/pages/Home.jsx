import React, { useEffect, useRef, useState } from 'react'
import HeroSec from '../components/HeroSec'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import RecipeCard from '../components/RecipeCard'
import { getPopularRecipes, getRecipeBySearch } from '../services/api'

const Home = () => {
  const inputRef = useRef()
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPopularRecipes = async () => {
      try {
        setLoading(true)
        const popularRecipes = await getPopularRecipes()
        setRecipes(popularRecipes)
      } catch (error) {
        setError('Failed to load movies...')
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    loadPopularRecipes()
  }, [])

  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    const inputValue = inputRef.current.value.trim()
    if (!inputValue) return
    if (loading) return

    setLoading(true)

    try {
      setLoading(true)
      const searchedRecipes = await getRecipeBySearch(inputValue)
      setRecipes(searchedRecipes)
    } catch (error) {
      setError('Failed to load movies...')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <HeroSec />

      <div className='w-full py-[3rem] px-[3rem] bg-btn-green text-txt-black'>

        <h1 className='font-Circular-Bold text-[1.7rem]'>Popular Recipes</h1>

        <form onSubmit={handleSearchSubmit} className='flex items-center mt-[1.5rem] mb-[3rem]'>

          <input
            type="text"
            placeholder='Search for Recipe...'
            className='font-Circular-Medium py-[0.5rem] px-[1.2rem] bg-white border-[1.5px] outline-none border-nav-green rounded-l-[1rem] w-full'
            ref={inputRef}
          />

          <button className='bg-nav-green py-[0.5rem] px-[1.2rem] border-[1.5px] border-nav-green rounded-r-[1rem] cursor-pointer'>
            <FontAwesomeIcon
              icon={faSearch}
              className='text-white'
            />
          </button>

        </form>

        <div className='w-full grid grid-cols-[repeat(auto-fit,_minmax(12rem,_20rem))] items-center justify-center gap-x-[2rem] gap-y-[2rem]'>
          {recipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>

      </div>

    </div>
  )
}

export default Home