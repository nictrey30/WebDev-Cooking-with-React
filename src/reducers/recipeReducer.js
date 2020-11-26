import ACTIONS from '../constants';
import { v1 as uuidv1 } from 'uuid';

function recipeReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_RECIPE:
      const newRecipe = {
        id: uuidv1(),
        name: 'New',
        servings: 1,
        cookTime: '1:00',
        instructions: 'Instr.',
        ingredients: [
          {
            id: uuidv1(),
            name: 'Name',
            amount: '1 Tbs'
          }
        ]
      };
      return [...state, newRecipe];
    case ACTIONS.DELETE_RECIPE:
      return state.filter((recipe) => recipe.id !== action.payload);
    case ACTIONS.UPDATE_RECIPES:
      return state.map((recipe) => {
        if (recipe.id === action.payload.id) {
          return action.payload.recipe;
        }
        return recipe;
      });
    case ACTIONS.UPDATE_INGREDIENT:
      return state.map((recipe) => {
        if (recipe.id === action.payload.id) {
          recipe.ingredients = recipe.ingredients.map((ingredient) => {
            if (ingredient.id === action.payload.ingredientId) {
              ingredient.name = action.payload.name;
              ingredient.amount = action.payload.amount;
              return ingredient;
            }
            return ingredient;
          });
          return recipe;
        }
        return recipe;
      });
    case ACTIONS.DELETE_INGREDIENT:
      return state.map((recipe) => {
        if (recipe.id === action.payload.id) {
          recipe.ingredients = recipe.ingredients.filter(
            (ingredient) => ingredient.id !== action.payload.ingredientId
          );
        }
        return recipe;
      });
    case ACTIONS.ADD_INGREDIENT:
      return state.map((recipe) => {
        if (recipe.id === action.payload.id) {
          return {
            ...recipe,
            ingredients: [
              ...recipe.ingredients,
              {
                id: action.payload.ingredientId,
                name: action.payload.name,
                amount: action.payload.amount
              }
            ]
          };
        }
        return recipe;
      });
    default:
      return state;
  }
}

export default recipeReducer;
