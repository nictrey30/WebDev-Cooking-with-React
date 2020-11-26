import React from 'react';

export default function Ingredient({ ingredient }) {
  return Object.keys(ingredient).length !== 0 ? (
    <div>
      <span>{ingredient.name}:</span>
      <span> {ingredient.amount}</span>
    </div>
  ) : null;
}
