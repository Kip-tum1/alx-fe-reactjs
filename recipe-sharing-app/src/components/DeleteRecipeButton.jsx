import React from 'react';
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    if (onDelete) onDelete(); // Optional callback to notify parent component
    navigate('/recipes'); // Redirect to the recipes list page after deletion
  };

  return (
    <button onClick={handleDelete} className="delete-recipe-button">
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;