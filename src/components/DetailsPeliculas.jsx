import { useLocation } from 'react-router-dom';
import styles from '../styles/detailsPeliculas.module.css';

export const DetailsPeliculas = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data)

  return (
    <div className={styles.container_detalle} style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`}}>
      <div className='detalles'>
        <h1>{data.original_title}</h1>

      </div>
    </div>
  )
}
