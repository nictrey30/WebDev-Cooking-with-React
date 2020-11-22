import React from 'react';

export default function Ingredient({ ingredient }) {
  return (
    <div>
      <span>{ingredient.name}:</span>
      <span> {ingredient.amount}</span>
    </div>
  );
}
