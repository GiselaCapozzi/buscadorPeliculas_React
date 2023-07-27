import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useNavigate } from 'react-router-dom';

export const Card = ({ pelicula }) => {

  const [detailsPeliculas, setDetailsPeliculas] = useState([]);

  const URL_DETAILS = 'https://api.themoviedb.org/3/movie';
  const API_KEY = import.meta.env.VITE_API_KEY;
  const url_details = `${URL_DETAILS}/${pelicula.id}?api_key=${API_KEY}`;
  const navigate = useNavigate();

  const getDetails = async (id, url) => {
    if (!id || !url) return;
    try {
      const result = await fetch(url);
      const data = await result.json();
      setDetailsPeliculas(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDetails(pelicula.id, url_details)
  }, [])

  const handleClick = async () => {
    await getDetails(pelicula.id, url_details);
    navigate('/details', {
      state: detailsPeliculas
    })
  }
  
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
        alt={pelicula.title}
      />
      <h2>{pelicula.title}</h2>
      <Button
        onClick={handleClick}
      >Detalles</Button>
    </>
  )
}
