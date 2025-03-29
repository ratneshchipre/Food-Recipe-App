import { createContext, useContext, useState, useEffect } from "react";

const RecipeContext = createContext()

export const useRecipeContext = () => useContext(RecipeContext)

export const RecipeProvider = ({ children }) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [favorites, setFavorites] = useState(() => {
        const storedFavs = localStorage.getItem('favorites');
        return storedFavs ? JSON.parse(storedFavs) : []
    })

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavs = (recipe) => {
        setFavorites((prev) => [...prev, recipe])
    }

    const removeFromFavs = (recipeId) => {
        setFavorites((prev) => prev.filter(recipe => (recipe.idCategory || recipe.idMeal) !== recipeId))
    }

    const isFavs = (recipeId) => {
        return favorites.some(recipe => (recipe.idCategory || recipe.idMeal) === recipeId)
    }

    const value = {
        selectedRecipe,
        setSelectedRecipe,
        favorites,
        addToFavs,
        removeFromFavs,
        isFavs
    }

    return <RecipeContext.Provider value={value}>
        {children}
    </RecipeContext.Provider>
}