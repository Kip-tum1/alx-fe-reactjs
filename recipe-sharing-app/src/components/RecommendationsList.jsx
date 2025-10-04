import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const RecipeRecommendations = () => {
  const { recipes, favoriteIds, filterRecipes } = useRecipeStore();
  const { searchTerm, setSearchTerm } = useRecipeStore();

  useEffect(() => {
    setSearchTerm(''); // Reset search term for recommendations
    filterRecipes();
  }, [filterRecipes, setSearchTerm]);

  // Get favorite recipes
  const favoriteRecipes = recipes.filter((recipe) => favoriteIds.includes(recipe.id));

  // Recommendation logic: Suggest recipes with similar ingredients to favorites
  const getRecommendations = () => {
    if (favoriteRecipes.length === 0) return recipes.slice(0, 3); // Default to top 3 if no favorites

    const favoriteIngredients = favoriteRecipes.flatMap((r) => r.ingredients || []);
    return recipes
      .filter((recipe) => !favoriteIds.includes(recipe.id)) // Exclude favorites
      .map((recipe) => ({
        ...recipe,
        matchScore: (recipe.ingredients || []).filter((ing) => favoriteIngredients.includes(ing)).length,
      }))
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3); // Top 3 recommendations
  };

  const recommendations = getRecommendations();

  return (
    <div className="recipe-recommendations">
      <h2>Recommended for You</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available. Mark some recipes as favorites!</p>
      )}
    </div>
  );
};

export default RecipeRecommendations;