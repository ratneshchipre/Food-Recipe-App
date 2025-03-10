import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'

const RecipeCard = () => {
    return (
        <div className='flex flex-col items-center justify-center'>

            <div className='w-[15rem] h-[18rem] overflow-hidden border-t-[1.5px] border-x-[1.5px] border-border shadow-[1px_0_10px_rgba(0,0,0,0.1)] hover:brightness-85 transition'>
                {/* <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='rounded-t-[0.5rem] h-[16rem] sm:h-[18rem] w-full object-cover bg-center'
                    alt={movie.title}
                /> */}
            </div>

            <div className='w-[15rem] h-[7rem] bg-bg-cream p-[0.5rem] absolute mb-[-16.5rem] border-b-[1.5px] border-x-[1.5px] border-border'>

                <p className='font-[500] text-text line-clamp-2 overflow-hidden [-webkit-box-orient:vertical] [display:-webkit-box]'>Recipe Ex Text</p>

                <p className='font-[500] text-wrap text-gray-500 inline'></p>

                <button
                    className='absolute right-2.5 top-[-15.3rem] sm:top-[-16.8rem] h-[2rem] w-[2rem] rounded-[50%] text-center bg-fav-bg text-background cursor-pointer'

                >
                    <FontAwesomeIcon icon={faHeartRegular} />
                </button>

            </div>

        </div>
    )
}

export default RecipeCard