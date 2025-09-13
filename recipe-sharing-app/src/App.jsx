import RecipeList from "./Components/RecipeList";
import AddRecipeForm from "./Components/AddRecipeForm";
import DeleteRecipeButton from "./components/DeleteRecipeButton";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";


function App(){
  return(
    <div>
      <RecipeList />
      <AddRecipeForm />
      <DeleteRecipeButton />
      <RecipeDetails />
      <EditRecipeForm />
      

    </div>
  )
}

export default App;
