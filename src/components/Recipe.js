import React from 'react';

export default function Recipe({ recipe }) {
  return (
    <div key={recipe.id}>
      <div>
        <h3>{recipe.name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>{recipe.cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{recipe.servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>{recipe.instructions}</div>
      </div>
    </div>
  );
}
