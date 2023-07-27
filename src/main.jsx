import React from 'react';
import ReactDOM from 'react-dom/client';
import { BuscadorPeliculas } from './BuscadorPeliculas';
import { BrowserRouter } from 'react-router-dom';
import './styles/movieSearch.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <BuscadorPeliculas />
    </React.StrictMode>
  </BrowserRouter>
)
