import '../components/guiasturis.css'; // Importação do arquivo CSS correto
import Footer from '../footer';
import Navbar from './nav';
function Guiasturis() {
  return (
    <div>
         <Navbar/>
      <section>
        <h2>Destinos Populares</h2>

        <ul className="guias"> {/* Alteração da classe de "destinations" para "guias" */}
          <li className="cartao1" id="dest-paris"> {/* Substituição de "card-large card-light" por "cartao1" */}
            <div className="card-image"><img src="paris.jpg" alt="Paris, França"/></div>
            <ul>
              <li><a href="#">Surdos</a></li>
              <li><a href="#">Descrição</a></li>
              <li><button className="acesse">Explorar<span className="material-symbols-outlined"></span></button></li> {/* Substituição de "cartao2" por "acesse" */}
            </ul>
          </li>
          <li className="cartao3" id="dest-rome"> {/* Substituição de "btn-outline-dark" por "cartao3" */}
            <div className="card-image"><img src="rome.jpg" alt="Roma, Itália"/></div>
            <ul>
              <li><a href="#">Cegos</a></li>
              <li><a href="#">Descrição</a></li>
              <li><button className="cartao3">Explorar<span className="material-symbols-outlined"></span></button></li> {/* Substituição de "btn-outline-dark" por "cartao3" */}
            </ul>
          </li>
          <li className="cartao3" id="dest-tokyo"> {/* Substituição de "card-large card-dark" por "cartao3" */}
            <div className="card-image"><img src="tokyo.jpg" alt="Tóquio, Japão"/></div>
            <ul>
              <li><a href="#">Amputantes</a></li>
              <li><a href="#">Descrição</a></li>
              <li><button className="cartao3">Explorar<span className="material-symbols-outlined"></span></button></li> {/* Substituição de "btn-outline-dark" por "cartao3" */}
            </ul>
          </li>
        </ul>
        
      </section>
     <Footer/>
    </div>
  );
}

export default Guiasturis;
