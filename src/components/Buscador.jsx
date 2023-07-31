import { Input } from './Input';
import { Button } from './Button';
import { useForm } from '../hooks/useForm';
import { useFetch } from '../hooks/useFetch';
import { Cards } from './Cards';
import { useFetchActual } from '../hooks/useFetchActual';

export const Buscador = () => {

  const initialState = {
    busqueda: '',
    isLoading: true,
    isError: null
  }

  const URL_BASE = 'https://api.themoviedb.org/3/search/movie';
  const URL_ACTUAL = 'https://api.themoviedb.org/3/movie/now_playing'
  const API_KEY = import.meta.env.VITE_API_KEY;

  const {
    busqueda,
    isLoading,
    isError,
    setStateForm,
    handleChange
  } = useForm(initialState);

  const url = `${URL_BASE}?query=${busqueda}&api_key=${API_KEY}`;
  const url_actual = `${URL_ACTUAL}?api_key=${API_KEY}&language=es-ES`;

  const {
    peliculas,
    handleSubmit
  } = useFetch(url);

  const {
    actualMovie
  } = useFetchActual(url_actual);

  return (
    <>
      <h1>Buscador de Películas</h1>
      <form onSubmit={handleSubmit} >
        <Input
          type='text'
          name='busqueda'
          placeholder='Busque una película...'
          value={busqueda}
          onChange={handleChange}
        />
        <Button
          type='submit'
        >Buscar</Button>
      </form>
      <div className="movie-list">
          <>
            {peliculas.length < 1 ? 
            (<Cards actualMovie={actualMovie}/>) : 
            (
              <Cards peliculas={peliculas}/>
            )
            }
          </>        
      </div>
    </>
  )
}
