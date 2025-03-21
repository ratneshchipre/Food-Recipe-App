import { createContext, useContext, useState, useEffect } from "react";

const RecipeContext = createContext()

export const useRecipeContext = () => useContext(RecipeContext)

export const RecipeProvider = ({ children }) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    // const [favorites, setFavorites] = useState(() => {
    //     const storedFavs = localStorage.getItem('favorites');
    //     return storedFavs ? JSON.parse(storedFavs) : []
    // })

    // const value = {
    //     favorites,
    //     addToFavs,
    //     removeFromFavs,
    //     isFavs
    // }

    return <RecipeContext.Provider value={{ selectedRecipe, setSelectedRecipe }}>
        {children}
    </RecipeContext.Provider>
}