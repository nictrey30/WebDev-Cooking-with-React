import React from 'react';
import RecipeEdit from './components/RecipeEdit';
import RecipeList from './components/RecipeList';
import RecipeContextProvider from './contexts/RecipeContext';
import './css/App.css';

function App() {
  return (
    <RecipeContextProvider>
      <RecipeList />
      <RecipeEdit />
    </RecipeContextProvider>
  );
}

export default App;
