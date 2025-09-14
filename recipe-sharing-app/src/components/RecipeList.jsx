import { useRecipeStore } from '../recipeStore';
import { useEffect } from 'react';

const RecipeList = () => {
  const { filteredRecipes, filterRecipes } = useRecipeStore();
  const { searchTerm, setSearchTerm } = useRecipeStore();

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;