import React, { useState, useContext } from 'react';
import ACTIONS from '../constants';
import { RecipeContext } from '../contexts/RecipeContext';

export default function IngredientForm() {
  const { dispatch } = useContext(RecipeContext);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_INGREDIENT });
    setAmount('');
    setName('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='amount'>Amount</label>
        <input
          type='text'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
}
