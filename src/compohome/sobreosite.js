import React from 'react';
import '../App.css';
import '../components/sobreosite.css';

function Sobreosite() {
  return (
    <div className='sobresite'>
      <h1>Sobre nosso site</h1>
      <p>
        Bem-vindo ao nosso site. Somos uma plataforma dedicada a proporcionar experiências de viagem incríveis para todos os viajantes.<br></br>
        Acreditamos que viajar é um direito universal e estamos comprometidos em tornar isso uma realidade para pessoas de todas as habilidades!
      </p>
      <img
        src='https://via.placeholder.com/400x200' // Substitua pelo URL da sua imagem
        alt='Imagem do nosso site'
      />
      <button className='btn-contato'>Entre em Contato</button>

      {/* Seção sobre deficientes */}
      <section className='secao-deficientes'>
        <h2>Informações sobre Deficientes</h2>
        <p>Nosso compromisso é tornar o nosso site acessível para todos. Aqui estão algumas informações importantes:</p><br></br>

        <ul>
          <li>
            <strong>Acessibilidade:</strong> Utilizamos recursos como leitores de tela e legendas em vídeos para garantir que todos possam navegar no site.
          </li>

          <li>
            <strong>Direitos e Recursos:</strong> Saiba mais sobre os direitos das pessoas com deficiência e os recursos disponíveis para elas.
          </li>

          <li>
            <strong>Histórias Inspiradoras:</strong> Compartilhamos histórias de superação e sucesso de pessoas com deficiência.
          </li>
        </ul>
      </section>

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
