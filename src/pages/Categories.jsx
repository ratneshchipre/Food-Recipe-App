import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipeBySearch } from '../services/api'
import RecipeCard from '../components/RecipeCard'
import errorImg from '../assets/errorImg.png';

const Categories = () => {
    const { categoryName } = useParams()
    const [categories, setcategories] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadCategories = async () => {
            try {
                setLoading(true)
                const categoryRecipes = await getRecipeBySearch(categoryName)
                if (categoryRecipes) {
                    setcategories(categoryRecipes)
                }
            } catch (error) {
                setError('Failed to load recipes...')
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        loadCategories();
    }, [])

    return (
        <div className='flex justify-center flex-col w-full px-[2rem] tablet-2:px-[2.5rem] mini-desktop:px-[2.8rem] lg:px-[3.5rem] xl:px-[4.5rem] pb-[2rem]'>
            <h1 className='font-Circular-Bold text-[1.7rem] text-txt-gray-black'>Categories of <span className='text-txt-black'>{categoryName}</span></h1>

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

            {categories.length === 0 && !loading && !error ? (
                <div className='mt-[0.5rem]'>
                    <p className='font-Circular-Medium text-txt-black text-[1.1rem]'>Nothing here! Try different category.</p>
                </div>
            ) : (loading && !error ? (
                <div className='flex justify-center items-center mt-[3rem]'>
                    <p className='text-[1.5rem] font-Circular-Medium text-center'>Please Wait...</p>
                </div>
            ) : (
                <div className='w-full mt-[2rem] grid grid-cols-[repeat(auto-fit,_minmax(12rem,_20rem))] items-center justify-center gap-x-[2rem] gap-y-[2rem]'>
                    {categories.map(recipe => (
                        <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Categories