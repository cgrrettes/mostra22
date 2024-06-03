import React from 'react';
import '../App.css';
import '../components/sobreosite.css';

function Sobreosite() {
  return (
    <div className='sobresite'>
      <h1>Sobre nosso site</h1>
      <p>
      O AcessTour é uma plataforma dedicada a proporcionar experiências para todos os turistas de Salvador, independente de suas condições físicas! 
      <br></br>
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
    </div>
  );
}

export default Sobreosite;
