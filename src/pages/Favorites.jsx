import React from 'react'
import { useRecipeContext } from '../contexts/RecipeContext'
import RecipeCard from '../components/RecipeCard'

const Favorites = () => {
  const { favorites } = useRecipeContext()

  return (
    <div className='flex justify-center items-center flex-col w-full px-[2rem] pb-[2rem] tablet-2:px-[2.2rem] lg:px-[2.5rem]'>
      {favorites.length != '0' ? (
        <div className='flex w-full flex-col justify-center items-center'>
          <h1 className='mt-[0.5rem] text-[1.35rem] font-Circular-Bold text-txt-black text-center'>Here are your saved favorites! ❤️</h1>
          <div className='w-full mt-[1.5rem] grid grid-cols-[repeat(auto-fit,_minmax(12rem,_20rem))] items-center justify-center gap-x-[2rem] gap-y-[2rem]'>
            {favorites.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
              />
            ))}
          </div>
        </div>
      ) : (
        <h1 className='mt-[0.5rem] text-[1.35rem] font-Circular-Bold text-txt-black text-center'>Your favorites list is empty. Save your top picks! ❤️</h1>
      )}

    </div>
  )
}

export default Favorites