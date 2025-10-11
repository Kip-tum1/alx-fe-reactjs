import { useState, useEffect } from 'react';
import data from '../data.json';

const HomePage = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    setRecipe(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipe.map((rec) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <img src={rec.recipe_image} alt={rec.recipe_title} className="w-full h-32 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{rec.recipe_title}</h2>
            <p className="text-gray-600 mt-2">{rec.recipe_summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;