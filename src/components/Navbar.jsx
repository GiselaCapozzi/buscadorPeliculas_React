import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center'}}>
      <Link to='/'>Home</Link>
      <Link to='/buscador'>Buscador</Link>
    </div>
  )
}
