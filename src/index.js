import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import PokemonBoard from './PokemonBoard';
import PokemonDetails from './PokemonDetails';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
          <Route path="/Pokedex" element={<PokemonBoard />} />
          <Route path="/Pokedex/:id" element={<PokemonDetails />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



/**
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
*/ /*
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonBoard from "./PokemonBoard";
import PokemonDetails from "./PokemonDetails";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<PokemonBoard />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

**/
