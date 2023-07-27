import { Card } from './Card';

export const Cards = ({ peliculas }) => {
  
  return (
    <>
      {
        peliculas &&
        peliculas.map(pelicula => (
          <div className='movie-card' key={pelicula.id}>
            <Card 
              pelicula={pelicula}
            />
          </div>
        ))
      }
    </>
  )
}
