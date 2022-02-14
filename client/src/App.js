import React from 'react';
import { Routes, Route } from "react-router-dom";
import Fibonacci from './components/Fibonacci/Fibonacci';
import Modulo from './components/Modulo/Modulo'
import Movies from './components/Movies/Movies';
import './App.css';

function App() {
  return (

    <React.Fragment>
      <Routes>
        <Route path="/fibonacci" element={<Fibonacci/>} />
        <Route path="/modulo" element={<Modulo/>} />
        <Route path="/movies" element={<Movies/>} />
      </Routes>
    </React.Fragment>

  );
}

export default App;
