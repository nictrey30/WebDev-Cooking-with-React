import React, { useContext } from 'react';
import ACTIONS from '../constants';
import { RecipeContext } from '../contexts/RecipeContext';

export default function RecipeIngredientEdit({ ingredient }) {
  const { selectedRecipe, dispatch } = useContext(RecipeContext);
  return (
    <>
      <input
        type='text'
        className='recipe-edit__input'
        value={ingredient.name}
        onChange={(e) => {
          console.log(selectedRecipe.id);
          dispatch({
            type: ACTIONS.UPDATE_INGREDIENT,
            payload: {
              id: selectedRecipe.id,
              ingredientId: ingredient.id,
              name: e.target.value,
              amount: ingredient.amount
            }
          });
        }}
      />
      <input
        type='text'
        className='recipe-edit__input'
        value={ingredient.amount}
        onChange={(e) => {
          dispatch({
            type: ACTIONS.UPDATE_INGREDIENT,
            payload: {
              id: selectedRecipe.id,
              ingredientId: ingredient.id,
              name: ingredient.name,
              amount: e.target.value
            }
          });
        }}
      />
      <button className='btn btn--danger'>&times;</button>
    </>
  );
}
