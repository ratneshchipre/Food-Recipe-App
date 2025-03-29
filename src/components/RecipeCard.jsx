import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { useRecipeContext } from '../contexts/RecipeContext'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
    const { isFavs, addToFavs, removeFromFavs } = useRecipeContext()
    const { setSelectedRecipe } = useRecipeContext();
    const isFavorites = isFavs(recipe.idCategory || recipe.idMeal)

    const handleFavorites = () => {
        if (isFavorites) removeFromFavs(recipe.idCategory || recipe.idMeal)
        else addToFavs(recipe)
    }

    const handleDivClick = (recipe) => {
        setSelectedRecipe(recipe)
        localStorage.setItem('recipe', JSON.stringify(recipe))
    }

    return (
        <div className='flex flex-col items-center justify-between overflow-hidden p-[1.2rem] bg-card-green shadow-[0_0_20px_rgba(0,0,0,0.09)] rounded-2xl min-w-[10rem] max-w-[20rem] h-[20rem] cursor-pointer transform hover:scale-[1.04] transition duration-300 border-gray-300'>
            <Link
                to={recipe.idCategory ? `/categories/${recipe.strCategory}` : `/recipe/${recipe.idMeal}`}
                onClick={() => handleDivClick(recipe)}
                className='w-full h-full flex flex-col items-center justify-between'
            >
                <div className={`w-full ${recipe.strMeal ? 'h-[13rem]' : 'h-[11rem]'}`}>
                    <img
                        src={recipe.strCategoryThumb || recipe.strMealThumb}
                        className='rounded-2xl h-full w-full object-cover bg-center'
                        alt='recipe img'
                    />
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <p className='font-Circular-Bold text-txt-black text-[1.3rem] line-clamp-1 overflow-hidden [-webkit-box-orient:vertical] [display:-webkit-box] w-[88%]'>{recipe.strMeal || recipe.strCategory
                    }</p>
                    <p className='font-Circular-Medium text-txt-gray-black text-[1rem] text-wrap line-clamp-2 overflow-hidden [-webkit-box-orient:vertical] [display:-webkit-box]'>{recipe.strCategoryDescription || recipe.strArea
                    }</p>
                </div>
            </Link>
            <div className='absolute right-[1.2rem] top-4.8 z-20'>
                <button
                    className='rounded-bl-[45%] rounded-tr-[45%] flex justify-center items-center size-9 text-center bg-fav-bg text-txt-gray-black cursor-pointer'
                    onClick={handleFavorites}
                >
                    <FontAwesomeIcon
                        icon={isFavorites ? faHeartSolid : faHeartRegular}
                        className='text-[1rem] text-white'
                    />
                </button>
            </div>
        </div>
    )
}

export default RecipeCard