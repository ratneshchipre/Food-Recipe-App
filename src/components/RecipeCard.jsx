import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'

const RecipeCard = ({ recipe }) => {
    return (
        <div className='flex flex-col items-center justify-between overflow-hidden p-[1.2rem] bg-card-green shadow-[0_0_20px_rgba(0,0,0,0.09)] rounded-2xl min-w-[10rem] max-w-[20rem] h-[20rem] cursor-pointer transform hover:scale-[1.04] transition duration-300 border-gray-300'>
            <div className={`w-full ${recipe.strMeal ? 'h-[13rem]' : 'h-[11rem]'}`}>
                <img
                    src={recipe.strCategoryThumb || recipe.strMealThumb}
                    className='rounded-2xl h-full w-full object-cover bg-center'
                    alt='recipe img'
                />
            </div>
            <div className='w-full relative flex flex-col gap-1'>
                <p className='font-Circular-Bold text-txt-black text-[1.3rem] line-clamp-1 overflow-hidden [-webkit-box-orient:vertical] [display:-webkit-box] w-[88%]'>{recipe.strMeal || recipe.strCategory
                }</p>
                <p className='font-Circular-Medium text-txt-gray-black text-[1rem] text-wrap line-clamp-2 overflow-hidden [-webkit-box-orient:vertical] [display:-webkit-box]'>{recipe.strCategoryDescription || recipe.strArea
                }</p>
                <button className='absolute right-0 top-0 rounded-[50%] text-center text-txt-gray-black cursor-pointer z-20'>
                    <FontAwesomeIcon icon={faHeartRegular} className='text-[1.2rem]' />
                </button>
            </div>
        </div>
    )
}

export default RecipeCard