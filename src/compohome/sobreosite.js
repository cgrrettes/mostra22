import React from 'react';
import '../App.css';
import '../components/sobreosite.css';
import Navbar from './nav';
import Footer from '../footer';

function Sobreosite() {
  return (
    
    <div className='sobresite'>
       <Navbar/>
      <h1>Sobre nosso site</h1>
      <p>
      O AcessTour é uma plataforma dedicada a proporcionar experiências para todos os turistas de Salvador, independente de suas condições físicas! 
      Nosso objetivo é tornar o turismo na cidade mais fácil e prático para todos, oferecendo roteiros personalizados e adaptados às necessidades específicas de cada viajante.
      </p>
      <img
        src='https://via.placeholder.com/400x200' // Substitua pelo URL da sua imagem
        alt='Imagem do nosso site'
      />
      <button className='btn-contato'>Entre em Contato</button>

      {/* Vídeo sobre deficientes */}
      <div className='video-deficientes'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/SEqUJ6QX9Wk' // Substitua pelo URL do seu vídeo
          title='Vídeo sobre acessibilidade'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        ></iframe>
      </div>
      <Footer/>
    </div>
  );
}

export default Sobreosite;
