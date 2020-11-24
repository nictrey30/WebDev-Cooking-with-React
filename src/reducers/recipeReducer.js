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
    default:
      return state;
  }
}

export default recipeReducer;
