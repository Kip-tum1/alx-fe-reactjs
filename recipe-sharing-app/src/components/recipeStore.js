import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
  })),
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
  favorites: [], // Array to store favorite recipe IDs
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),
  recommendations: [], // Array to store recommended recipe IDs
  generateRecommendations: () => set((state) => {
    const favoriteRecipes = state.recipes.filter((recipe) => state.favorites.includes(recipe.id));
    const recommended = state.recipes
      .filter((recipe) => !state.favorites.includes(recipe.id)) // Exclude favorites
      .sort(() => Math.random() - 0.5) // Randomize for variety
      .slice(0, 3); // Top 3 recommendations
    return { recommendations: recommended.map((r) => r.id) };
  }),
}));

export default useRecipeStore;

