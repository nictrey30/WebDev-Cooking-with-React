import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const RecipeContext = createContext();

export default function RecipeContextProvider(props) {
  const [recipes, setRecipes] = useState(sampleRecipes);

  // add a recipe function
  function handleRecipeAdd() {
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
    setRecipes([...recipes, newRecipe]);
  }

  // delete a recipe
  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider
      value={{ recipes, handleRecipeAdd, handleRecipeDelete }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions:
      '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork',
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
];
