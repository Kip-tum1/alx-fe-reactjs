import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find(r => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc pl-5 mb-4">
        {/* Add ingredients logic here if available in data.json */}
        <li>Ingredient 1</li>
        <li>Ingredient 2</li>
      </ul>
      <h2 className="text-xl font-semibold mt-4">Cooking Instructions</h2>
      <ol className="list-decimal pl-5">
        {/* Add steps logic here if available in data.json */}
        <li>Step 1</li>
        <li>Step 2</li>
      </ol>
    </div>
  );
};

export default RecipeDetail;