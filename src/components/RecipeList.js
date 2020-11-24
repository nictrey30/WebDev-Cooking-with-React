import React, { useContext } from 'react';
import { RecipeContext } from '../contexts/RecipeContext';
import Recipe from './Recipe';
import ACTIONS from '../constants';

export default function RecipeList() {
  const { recipes, dispatch } = useContext(RecipeContext);
  return (
    // the div on the left half of the screen with each recipe
    <div className='recipe-list'>
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} recipe={recipe} />;
        })}
      </div>
      <div className='recipe-list__add-recipe-btn-container'>
        <button
          className='btn btn--primary'
          onClick={() => dispatch({ type: ACTIONS.ADD_RECIPE })}
        >
          Add Recipe
        </button>
      </div>
    </div>
  );
}
