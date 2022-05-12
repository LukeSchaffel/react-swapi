import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import StarShips from './pages/StarShips';
import ShipDetails from './pages/ShipDetails';
import Civilizations from './pages/Civilizations';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Starwars Starships</h1>
      </header>
      <Routes>
        <Route path='/' element={<StarShips />} />
        <Route path='/ship' element={<ShipDetails />} />
        <Route path='/civilizations' element={<Civilizations/>}/>
      </Routes>

    </div>
  );
}

export default App;
