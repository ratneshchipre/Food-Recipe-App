/**
 * This component is responsible for displaying detailed information about a selected recipe.
 * 
 * ✅ Handles two scenarios:
 *    1. When a user clicks on a recipe → Gets data from context (faster).
 *    2. When a user directly visits the details page → Fetches data using the recipe ID.
 * 
 * 🛠️ Key Functionalities:
 *    - Uses `useParams()` to get the recipe ID from the URL.
 *    - Uses `useRecipeContext()` to check if the recipe is available in context.
 *    - If recipe data is missing, fetches from the API using `getRecipeBySearch()`.
 *    - Displays recipe name, image, description, and ingredients.
*/

import React, { useEffect, useState } from 'react'
import { useRecipeContext } from '../contexts/RecipeContext';
import { Link, useParams } from 'react-router-dom';
import { getRecipeBySearch } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import youtube_Logo from '../assets/youtube_Logo.png';

const RecipeDetails = () => {
  const { selectedRecipe } = useRecipeContext();
  const { id } = useParams();
  const storedRecipe = localStorage.getItem('recipe');
  const [recipe, setRecipe] = useState(storedRecipe ? JSON.parse(storedRecipe) : selectedRecipe);
  const [isInsActive, setIsInsActive] = useState(false)

  useEffect(() => {
    if (!recipe) {
      const fetchRecipe = async () => {
        try {
          const data = await getRecipeBySearch("");
          const foundRecipe = data.find((meal) => meal.idMeal === id);
          if (foundRecipe) {
            setRecipe(foundRecipe);
            localStorage.setItem('recipe', JSON.stringify(foundRecipe));
          }
        } catch (error) {
          console.log("Failed to fetch recipe", error);
        }
      };
      fetchRecipe();
    }
  }, [id, selectedRecipe]);

  if (!recipe) {
    return <p className='text-center font-Circular-Medium text-txt-black text-[1.2rem] mt-[1rem]'>Loading recipe details...</p>;
  }

  return (
    <div className='flex justify-center flex-col w-full px-[2rem] pb-[2rem]'>
      <div>
        <div className='flex justify-between'>
          <button className='text-[1.1rem] font-Circular-Medium text-txt-black py-[0.5rem] px-[1.2rem] rounded-2xl bg-btn-green cursor-pointer'>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className='mr-[0.5rem]'
            />
            Back
          </button>
          <button className='text-[1.1rem] font-Circular-Medium text-txt-black py-[0.5rem] px-[1.2rem] rounded-2xl bg-btn-green cursor-pointer'>
            <FontAwesomeIcon
              icon={faHeartRegular}
              className='mr-[0.5rem]'
            />
            Add To Favorites
          </button>
        </div>
        <div className='flex justify-center items-center mt-[1.5rem] w-full h-[25rem] rounded-2xl overflow-hidden'>
          <img
            src={recipe.strMealThumb || recipe.strCategoryThumb}
            alt="recipe-img"
            className='w-full object-cover rounded-2xl'
          />
        </div>
      </div>
      <div className='mt-[1rem]'>
        <h2 className='text-[1.8rem] text-txt-black font-Circular-Bold'>{recipe.strMeal || recipe.strCategory}</h2>
        <div className='flex justify-center items-center w-full mt-[2rem] font-Circular-Medium text-txt-gray-black'>
          <div className='text-center w-full border-border border-r-[2px]'>
            <p>Area:</p>
            <p className='text-[1.4rem] leading-7'>{recipe.strArea || 'NA'}</p>
          </div>
          <div className='text-center w-full'>
            <p>Category:</p>
            <p className='text-[1.4rem] leading-7'>{recipe.strCategory}</p>
          </div>
        </div>
        <div className='mt-[2rem] text-txt-gray-black'>
          <h2 className='text-[1.2rem] font-Circular-Bold w-full border-border border-b-[2px] pb-[1rem]'>Ingredients</h2>
          <div className='mt-[0.7rem] font-Circular-Medium'>
            {(() => {
              const availableIngredients = [];

              for (let i = 1; i <= 20; i++) {
                const ingredient = recipe[`strIngredient${i}`];
                const measure = recipe[`strMeasure${i}`];

                if (ingredient && ingredient.trim() !== "") {
                  availableIngredients.push(`${measure} ${ingredient}`);
                }
              }

              return availableIngredients.length > 0 ? (
                <ul className='list-disc ml-[1rem]'>
                  {availableIngredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>⚠️ No ingredients available for this recipe, try searching another recipe.</p>
              );
            })()}
          </div>
        </div>
        <div className='mt-[2rem] text-txt-gray-black' onClick={() => setIsInsActive(!isInsActive)}>
          <div className='flex justify-between items-center border-border border-b-[2px] py-[0.5rem] cursor-pointer'>
            <h2 className='font-Circular-Bold text-[1.2rem] '>Instructions</h2>
            <FontAwesomeIcon
              icon={isInsActive ? faCaretUp : faCaretDown}
              className='self-center text-[1.4rem]'
            />
          </div>
          {isInsActive && <p className='mt-[0.7rem] font-Circular-Medium'>{recipe.strInstructions && recipe.strInstructions !== '' ? recipe.strInstructions : <p>⚠️ No instructions available for this recipe, try searching another recipe.</p>}</p>}
        </div>
        <div className='flex justify-center items-center mt-[1.5rem]'>
          <Link to={recipe.strYoutube}>
            <button className='font-Circular-Medium text-txt-black py-[0.5rem] px-[1rem] flex rounded-2xl cursor-pointer bg-bg-yt-red'>
              Watch on
              <img src={youtube_Logo} alt="youtube-logo" className='h-[1.5rem] ml-[0.5rem]' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetails