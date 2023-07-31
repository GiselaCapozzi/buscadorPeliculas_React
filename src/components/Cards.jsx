import { Button } from './Button';
import { Card } from './Card';
import { CardActual } from './CardActual';

export const Cards = ({ peliculas, actualMovie }) => {

  console.log(actualMovie)
  return (
    <>
      {
        !peliculas ? (
          actualMovie.map(actual => (
            <div className="movie-card" key={actual.id}>
              <CardActual 
                actual={actual}
              />
            </div>
          ))
        ) :
          (
            peliculas.map(pelicula => (
              <div className='movie-card' key={pelicula.id}>
                <Card
                  pelicula={pelicula}
                />
              </div>
            ))
          )
      }
    </>
  )
}
