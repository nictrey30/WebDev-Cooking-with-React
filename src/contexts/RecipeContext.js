import React, { createContext, useReducer, useEffect } from 'react';
import recipeReducer from '../reducers/recipeReducer';

export const RecipeContext = createContext();

export default function RecipeContextProvider(props) {
  const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';
  const [recipes, dispatch] = useReducer(recipeReducer, [], () => {
    const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return localData ? JSON.parse(localData) : sampleRecipes;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));

    // cleanup function
    // the useEffect hook is calling this return every time the "recipes" dependency changes to make sure it cleans everything up before it re-instates what it is inside the useEffect hook
    return () => console.log('recipes set in localStorage');
  }, [recipes]);

  return (
    <RecipeContext.Provider value={{ recipes, dispatch }}>
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
