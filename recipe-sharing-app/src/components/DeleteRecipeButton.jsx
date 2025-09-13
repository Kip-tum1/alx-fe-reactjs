import { useRecipeStore } from './recipeStore';

function DeleteRecipeButton(){
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const deleteRecipe = useRecipeStore(state => state.DeleteRecipeButton);
    return(

        <div>
            <button onClick={onclick(deleteRecipe())}>DeleteRecipeButton</button>
        </div>
    )

}

export default DeleteRecipeButton;