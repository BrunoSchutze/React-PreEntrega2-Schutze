import React from 'react';

import'./NavBar.css';
import CartWidget from './CartWidget/CartWidget.jsx';

const NavBar = () => {
  return (
    <header>
        <h1>SneakStride</h1>
        <nav>
            <ul>
                <li>Productos</li>
                <li>Entregas</li>
                <li>Nosotros</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar