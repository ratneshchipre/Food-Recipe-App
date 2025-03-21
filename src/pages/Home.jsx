import React, { useEffect, useRef, useState } from 'react'
import HeroSec from '../components/HeroSec'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import RecipeCard from '../components/RecipeCard'
import { getPopularRecipes, getRecipeBySearch } from '../services/api'
import errorImg from '../assets/errorImg.png';
import { Link } from 'react-router-dom'
import { useRecipeContext } from '../contexts/RecipeContext'

const Home = () => {
  const inputRef = useRef()
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const { setSelectedRecipe } = useRecipeContext();
  const hasFetched = useRef(false);

  const loadPopularRecipes = async () => {
    try {
      setLoading(true)
      const popularRecipes = await getPopularRecipes()
      setRecipes(popularRecipes)
    } catch (error) {
      setError('Failed to load recipes...')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!hasFetched.current) {
      loadPopularRecipes();
      hasFetched.current = true;
    }
  }, []);

  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    const inputValue = inputRef.current.value.trim()
    if (!inputValue) return
    if (loading) return

    setLoading(true)

    try {
      setLoading(true)
      const searchedRecipes = await getRecipeBySearch(inputValue)
      console.log(searchedRecipes);
      if (searchedRecipes != null) {
        setRecipes(searchedRecipes)
      }
    } catch (error) {
      setError('Failed to load recipes...')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleDivClick = (recipe) => {
    setSelectedRecipe(recipe)
    localStorage.setItem('recipe', JSON.stringify(recipe))
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

        {error &&
          <div className='flex flex-col items-center justify-center'>
            <img
              src={errorImg}
              alt="error"
              className='h-[14rem]'
            />
            <p className='font-Circular-Medium text-[1.5rem] text-center mt-[-1.2rem]'>{error}</p>
          </div>
        }

        {loading && !error ? (
          <div className='flex justify-center items-center mt-[3rem]'>
            <p className='text-[1.5rem] font-Circular-Medium text-center'>Please Wait...</p>
          </div>
        ) : (
          <div className='w-full grid grid-cols-[repeat(auto-fit,_minmax(12rem,_20rem))] items-center justify-center gap-x-[2rem] gap-y-[2rem]'>
            {recipes.map(recipe => (
              <Link
                to={`/recipe/${recipe.idMeal || recipe.idCategory}`}
                key={recipe.idMeal || recipe.idCategory}
                onClick={() => handleDivClick(recipe)}
              >
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home