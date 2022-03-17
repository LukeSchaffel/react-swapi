import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import StarShips from './pages/StarShips';
import ShipDetails from './pages/ShipDetails';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Starwars Starships</h1>
      </header>
      <Routes>
        <Route path='/' element={<StarShips />} />
        <Route path='/ship' element={<ShipDetails />} />
      </Routes>

    </div>
  );
}

export default App;
