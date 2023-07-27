import { Input } from './Input';
import { Button } from './Button';
import { useForm } from '../hooks/useForm';
import { useFetch } from '../hooks/useFetch';
import { Cards } from './Cards';

export const Buscador = () => {

  const initialState = {
    busqueda: '',
    isLoading: true,
    isError: null
  }

  const URL_BASE = 'https://api.themoviedb.org/3/search/movie';
  const API_KEY = import.meta.env.VITE_API_KEY;

  const {
    busqueda,
    isLoading,
    isError,
    setStateForm,
    handleChange
  } = useForm(initialState);

  const url = `${URL_BASE}?query=${busqueda}&api_key=${API_KEY}`;

  const {
    peliculas,
    handleSubmit
  } = useFetch(url)

  return (
    <>
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
        {
          <Cards peliculas={peliculas}/>
        }
      </div>
    </>
  )
}
