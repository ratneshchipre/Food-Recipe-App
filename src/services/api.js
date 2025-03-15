export const getPopularRecipes = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    return data.categories;
};

export const getRecipeBySearch = async (recipeInput) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeInput}`);
    const data = await response.json();
    console.log(data);
    return data.meals;
};