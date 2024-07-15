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
            <img src={require('../assets/logotur.png')} width={110} alt="Logo" />
          </div>
          <ul className="navigation-menu">
            <li className='teu'><a href='/Home'>Inicio</a></li>
            <li className='teu'><a href="#serv-groom">Serviços</a></li>
            <li className='teu'><a href="#locate">Quem Somos</a></li>
          </ul>
        </nav>
      </header>
    );
  }

export default Navbar;
  