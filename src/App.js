import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import StarShips from './components/StarShips';

function App() {
  return (
    <div className="App">
      <StarShips />
    </div>
  );
}

export default App;
