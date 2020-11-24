import React from 'react';
import RecipeList from './components/RecipeList';
import RecipeContextProvider from './contexts/RecipeContext';
import './css/App.css';

function App() {
  return (
    <RecipeContextProvider>
      <RecipeList />
    </RecipeContextProvider>
  );
}

export default App;
