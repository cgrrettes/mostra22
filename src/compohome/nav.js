import React from 'react'

import '../components/nav.css'
import '../assets/logotur.png'


import '../assets/logotur.png'

import { Link } from 'react-router-dom'

function Navbar() {
    return (
      <header>
        <nav>
          <div className="logo">
            <img src={require('../assets/logotur.png')} width={118} alt="Logo" />
          </div>
          <p>Acess Tour.</p>
          <ul className="navigation-menu">
            <li className='teu'><Link to={'/'}>Inicio</Link></li>
            <li className='teu'><a href="#serv-groom">Serviços</a></li>
            <li className='teu'><a href="#locate">Quem Somos</a></li>
          </ul>
          <div className="Mille">
            <Link to={'/register'}><button className="btn-outline-dark btn-hover-color"><span className="material-symbols-outlined">Faça o seu login</span></button></Link>
          </div>
        </nav>
      </header>
    );
  }

export default Navbar;
