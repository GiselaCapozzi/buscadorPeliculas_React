import { Link } from "react-router-dom"
import styles from '../styles/navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link to='/'><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/home--v2.png" alt="home--v2" /></Link>
        <Link to='/buscador'><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1" /></Link>
    </div>
  )
}
