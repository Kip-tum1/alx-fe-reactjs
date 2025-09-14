import RecipeList from "./Components/RecipeList";
import AddRecipeForm from "./Components/AddRecipeForm";
import DeleteRecipeButton from "./components/DeleteRecipeButton";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";


function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/recipes" element={<><RecipeRecommendations /><RecipeList /></>} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
      <RecipeList />
      <AddRecipeForm />
      <DeleteRecipeButton />
      <RecipeDetails />
      <EditRecipeForm />
      

    </div>
  )
}

export default App;
