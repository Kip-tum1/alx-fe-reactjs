import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    preparation: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.title) tempErrors.title = 'Title is required';
    if (!formData.ingredients) {
      tempErrors.ingredients = 'Ingredients are required';
    } else if (formData.ingredients.split('\n').filter(Boolean).length < 2) {
      tempErrors.ingredients = 'Please add at least two ingredients';
    }
    if (!formData.preparation) tempErrors.preparation = 'Preparation steps are required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., send data to an API)
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Recipe Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter recipe title"
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Ingredients</label>
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter ingredients (one per line)"
        />
        {errors.ingredients && <p className="text-red-500 text-xs mt-1">{errors.ingredients}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Preparation Steps</label>
        <textarea
          name="preparation"
          value={formData.preparation}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter preparation steps"
        />
        {errors.preparation && <p className="text-red-500 text-xs mt-1">{errors.preparation}</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default AddRecipeForm;