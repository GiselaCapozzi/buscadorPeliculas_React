import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useNavigate } from 'react-router-dom';

export const CardActual = ({ actual }) => {

  const [detailsPeliculas, setDetailsPeliculas] = useState([]);

  const URL_DETAILS = 'https://api.themoviedb.org/3/movie';
  const API_KEY = import.meta.env.VITE_API_KEY;
  const url_details = `${URL_DETAILS}/${actual.id}?api_key=${API_KEY}&language=es-ES&append_to_response=videos`;
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
    getDetails(actual.id, url_details)
  }, [])

  const handleClick = async () => {
    await getDetails(actual.id, url_details);
    navigate('/details', {
      state: detailsPeliculas
    })
  }
  
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500/${actual.poster_path}`}
        alt={actual.title}
      />
      <h2>{actual.title}</h2>
      <Button
        onClick={handleClick}
      >Detalles</Button>
    </>
  )
}
