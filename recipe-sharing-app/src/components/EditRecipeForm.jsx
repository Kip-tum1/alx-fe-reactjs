import React, { useState, useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipeId, onClose }) => {
  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    const recipeToEdit = recipes.find((recipe) => recipe.id === recipeId);
    if (recipeToEdit) {
      setFormData({ title: recipeToEdit.title, description: recipeToEdit.description });
    }
  }, [recipeId, recipes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = { ...formData, id: recipeId };
    updateRecipe(updatedRecipe);
    onClose(); // Close the form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="edit-recipe-form">
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;