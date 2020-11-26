import React from 'react';
import IngredientForm from './components/IngredientForm';
import RecipeEdit from './components/RecipeEdit';
import RecipeList from './components/RecipeList';
import RecipeContextProvider from './contexts/RecipeContext';
import './css/App.css';

function App() {
  return (
    <RecipeContextProvider>
      <RecipeList />
      <RecipeEdit />
      <IngredientForm />
    </RecipeContextProvider>
  );
}

export default App;
