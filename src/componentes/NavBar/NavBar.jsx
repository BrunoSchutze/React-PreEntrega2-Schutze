import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='logoMarca' src={"../img/logo4.png"} alt="Logo de la marca" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="categoria/1"> Home </NavLink>
          </li>

          <li>
            <NavLink to="categoria/2"> Zapatillas </NavLink>
          </li>

          <li>
            <NavLink to="categoria/3"> Medias </NavLink>
          </li>

          <li>
            <NavLink to="categoria/4"> Cordones </NavLink>
          </li>
          
        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar