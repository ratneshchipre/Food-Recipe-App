import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import test_Img from "../assets/test_Img.jpg";

const RecipeCard = ({ recipe }) => {
    return (
        <div className='flex flex-col items-center justify-between overflow-hidden p-[1.2rem] bg-card-green shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-2xl min-w-[10rem] max-w-[20rem] h-[20rem] cursor-pointer'>

            <div className='w-full h-[11rem]'>
                <img
                    src={recipe.strCategoryThumb}
                    className='rounded-2xl h-full w-full object-cover bg-center'
                    alt='recipe img'
                />
            </div>

            <div className='w-full text-txt-black relative flex flex-col gap-1'>

                <p className='font-Circular-Bold text-[1.3rem] line-clamp-2 overflow-hidden [-webkit-box-orient:vertical] [display:-webkit-box]'>{recipe.strCategory
                }</p>

                <p className='font-Circular-Medium text-[1.1rem] text-wrap line-clamp-2 overflow-hidden [-webkit-box-orient:vertical] [display:-webkit-box]'>{recipe.strCategoryDescription
                }</p>

                <button className='absolute right-0 bottom-0 rounded-[50%] text-center text-txt-black cursor-pointer'>
                    <FontAwesomeIcon icon={faHeartSolid} className='text-[1.4rem]' />
                </button>

            </div>

        </div>
    )
}

export default RecipeCard