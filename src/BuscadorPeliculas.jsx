import { Buscador } from "./components/Buscador";
import { Routes, Route } from 'react-router-dom';
import { DetailsPeliculas } from "./components/DetailsPeliculas";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";

export const BuscadorPeliculas = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/buscador" element={<Buscador />} />
        <Route path='/details' element={<DetailsPeliculas />}/>
      </Routes>
    </div>
  )
}
