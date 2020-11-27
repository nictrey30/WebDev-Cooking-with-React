import React, { useContext } from 'react';
import ACTIONS from '../constants';
import { RecipeContext } from '../contexts/RecipeContext';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { v1 as uuidv1 } from 'uuid';

export default function RecipeEdit() {
  const { selectedRecipe, handleRecipeSelect, dispatch } = useContext(
    RecipeContext
  );

  return selectedRecipe ? (
    <div className='recipe-edit'>
      <div className='recipe-edit__remove-button-container'>
        <button
          className='recipe-edit__remove-button'
          onClick={() => handleRecipeSelect(undefined)}
        >
          &times;
        </button>
      </div>
      <div className='recipe-edit__details-grid'>
        <label htmlFor='name' className='recipe-edit__label'>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='recipe-edit__input'
          value={selectedRecipe.name}
          onChange={(e) => {
            dispatch({
              type: ACTIONS.UPDATE_RECIPES,
              payload: {
                id: selectedRecipe.id,
                recipe: { ...selectedRecipe, name: e.target.value }
              }
            });
          }}
        />
        <label htmlFor='cookTime' className='recipe-edit__label'>
          Cook Time
        </label>
        <input
          type='text'
          name='cookTime'
          id='cookTime'
          className='recipe-edit__input'
          value={selectedRecipe.cookTime}
          onChange={(e) => {
            dispatch({
              type: ACTIONS.UPDATE_RECIPES,
              payload: {
                id: selectedRecipe.id,
                recipe: { ...selectedRecipe, cookTime: e.target.value }
              }
            });
          }}
        />
        <label htmlFor='servings' className='recipe-edit__label'>
          Servings
        </label>
        <input
          type='number'
          min='1'
          name='servings'
          id='servings'
          className='recipe-edit__input'
          value={selectedRecipe.servings}
          onChange={(e) => {
            dispatch({
              type: ACTIONS.UPDATE_RECIPES,
              payload: {
                id: selectedRecipe.id,
                recipe: {
                  ...selectedRecipe,
                  servings: parseInt(e.target.value) || ''
                }
              }
            });
          }}
        />
        <label htmlFor='instructions' className='recipe-edit__label'>
          Instructions
        </label>
        <textarea
          name='instructions'
          id='instructions'
          className='recipe-edit__input'
          value={selectedRecipe.instructions}
          onChange={(e) => {
            dispatch({
              type: ACTIONS.UPDATE_RECIPES,
              payload: {
                id: selectedRecipe.id,
                recipe: { ...selectedRecipe, instructions: e.target.value }
              }
            });
          }}
        ></textarea>
      </div>
      <br />
      <label className='recipe-edit__label'>Ingredients</label>
      <div className='recipe-edit__ingredient-grid'>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {/* Ingredient Components */}
        {selectedRecipe.ingredients.length !== 0
          ? selectedRecipe.ingredients.map((ingredient) => (
              <RecipeIngredientEdit
                key={ingredient.id}
                ingredient={ingredient}
              />
            ))
          : null}
      </div>
      <div className='recipe-edit__add-ingredient-btn-container'>
        <button
          className='btn btn--primary'
          onClick={() => {
            dispatch({
              type: ACTIONS.ADD_INGREDIENT,
              payload: {
                id: selectedRecipe.id,
                ingredientId: uuidv1(),
                name: '',
                amount: ''
              }
            });
          }}
        >
          Add Ingredient
        </button>
      </div>
    </div>
  ) : null;
}
