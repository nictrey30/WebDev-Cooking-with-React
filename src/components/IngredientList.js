import React from 'react';
import Ingredient from './Ingredient';

export default function IngredientList({ ingredients }) {
  const ingredientElements =
    Object.keys(ingredients).length !== 0 ? (
      ingredients.map((ingredient) => (
        <Ingredient key={ingredient.id} ingredient={ingredient} />
      ))
    ) : (
      <div></div>
    );
  return <div className='ingredient-grid'>{ingredientElements}</div>;
}
