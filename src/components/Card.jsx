import { useFetch } from "../hooks/useFetch";
import { Button } from "./Button";

export const Card = ({ pelicula }) => {

const { getDetails } = useFetch();

const URL_DETAILS = 'https://api.themoviedb.org/3/movie';
const API_KEY = import.meta.env.VITE_API_KEY;
const url_details = `${URL_DETAILS}/${pelicula.id}?api_key=${API_KEY}`;

  return (
    <>
      <img 
        src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`} 
        alt={pelicula.title}
      />
      <h2>{pelicula.title}</h2>
      <Button 
        type='button'
        onClick={() => getDetails(pelicula.id, url_details)}
      >Detalles</Button>
    </>
  )
}
