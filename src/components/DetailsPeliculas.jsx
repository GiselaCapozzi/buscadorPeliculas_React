import { useLocation } from 'react-router-dom';
import styles from '../styles/detailsPeliculas.module.css';
import Youtube from 'react-youtube';

export const DetailsPeliculas = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data)

  const { backdrop_path, title, overview, genres, tagline, videos: { results } } = data;

  const onReady = e => {
    e.target.pauseVideo();
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.container_imagen}
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=""
      />
      <div className={styles.container_titulo}>
        <h1>{title}</h1>
        <h3>{tagline}</h3>
      </div>
      <div className={styles.container_detalles}>
        <div className={styles.video}>
          <Youtube
            className={styles.reproductor}
            videoId={results[0].key}
            opts={{
              playerVars: {
                autoplay: 0,
                controls: 1,
                cc_load_policy: 0,
                fs: 1,
                iv_load_policy: 0,
                modestbranding: 0,
                rel: 0,
                showinfo: 0
              }
            }}
            onReady={onReady}
          />
        </div>
        <div className={styles.container_info}>
          <p className={styles.sinopsis}>{overview}</p>
          <ul className={styles.generos}>
            {
              genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
