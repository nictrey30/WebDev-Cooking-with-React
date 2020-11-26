import React, { useContext } from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import RecipeIngredientEdit from './RecipeIngredientEdit';

export default function RecipeEdit() {
  const { selectedRecipe } = useContext(RecipeContext);
  return selectedRecipe ? (
    <div className='recipe-edit'>
      <div className='recipe-edit__remove-button-container'>
        <button className='recipe-edit__remove-button'>&times;</button>
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
        />
        <label htmlFor='instructions' className='recipe-edit__label'>
          Instructions
        </label>
        <textarea
          name='instructions'
          id='instructions'
          className='recipe-edit__input'
          value={selectedRecipe.instructions}
        ></textarea>
      </div>
      <br />
      <label className='recipe-edit__label'>Ingredients</label>
      <div className='recipe-edit__ingredient-grid'>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {/* Ingredient Components */}
        {selectedRecipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit ingredient={ingredient} />
        ))}
        {/* <RecipeIngredientEdit />
        <RecipeIngredientEdit /> */}
      </div>
      <div className='recipe-edit__add-ingredient-btn-container'>
        <button className='btn btn--primary'>Add Ingredient</button>
      </div>
    </div>
  ) : null;
}
