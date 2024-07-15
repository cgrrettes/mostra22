import React from 'react';
import Navbar from './nav';
import '../components/inicio.css';
import '../assets/logotur.png';
import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div className="App">
    <Navbar/>
     <div className="container">
        <div className="text-section">
          <h1>Conectando viajantes a 
            experiências únicas</h1>
          <p>Seja agora um usuário da nossa plataforma intuita e acessível.</p>
        </div>
        <div className="imginicio">
        <img src={require('../assets/amarelo2.jpeg')} width={1083} alt="Imagem Inicio" />
        </div>
          <button className='camile-botao'>Vamos começar! </button>
      </div>
      <div className="faixa">
      <img src={require('../assets/faixa.png')} width={300} height={30} alt="Imagem Inicio" />
      </div>
    </div>
  );
}

export default Inicio;