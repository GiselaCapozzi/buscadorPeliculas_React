import { Buscador } from "./components/Buscador";
import { Routes, Route } from 'react-router-dom';
import { DetailsPeliculas } from "./components/DetailsPeliculas";

export const BuscadorPeliculas = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/buscador" element={<Buscador />} />
        <Route path='/details' element={<DetailsPeliculas />}/>
      </Routes>
    </div>
  )
}
