import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/Home" className="nav-link">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="/Sobre" className="nav-link">Serviços</a>
        </li>
        <li className="nav-item">
          <a href="/Contato" className="nav-link">Quem Somos</a>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;