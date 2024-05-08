import React from 'react';

import Recomendacion1 from '../../IMG/Recomendaciones/Recomendaciones1.webp';
import Recomendacion2 from '../../IMG/Recomendaciones/Recomendaciones2.webp';
import Recomendacion3 from '../../IMG/Recomendaciones/Recomendaciones3.webp';
import Recomendacion4 from '../../IMG/Recomendaciones/Recomendaciones4.webp';
import Consejo1 from '../../IMG/Consejos/Consejos1.webp';
import Consejo2 from '../../IMG/Consejos/Consejos2.webp';
import Consejo3 from '../../IMG/Consejos/Consejos3.webp';
import Consejo4 from '../../IMG/Consejos/Consejos4.webp';
import Consejo5 from '../../IMG/Consejos/Consejos5.webp';

import './recomendaciones.css';

function Recomendaciones() {
    return (
        <section className='recYConsejos'>

            <h3 className='titulo'>Recomendaciones</h3>

            <article className='recomendaciones'>
                
                <div className='card' id='tarjeta1R'>
                    <img src={Recomendacion1} alt='Silver piedra para gatos consejos' className='img' />
                    <p className='texto'>Retirar los desechos</p>
                    <p className='subtexto'>mínimo una vez al día</p>
                  </div>

                  <div className='card'>
                    <img src={Recomendacion2} alt='Silver piedra para gatos consejos' className='img' />
                    <p className='texto'> Lavarse las manos</p>
                    <p className='subtexto'>luego de cada retiro de residuos</p>
                  </div>

                  <div className='card' id='tarjeta3R'>
                    <img src={Recomendacion3} alt='Silver piedra para gatos consejos' className='img' />
                    <p className='texto'>La litera debe ser colocada en un lugar</p>
                    <p className='subtexto'>seco y libre de humedad</p>
                  </div>

                  <div className='card' id='tarjeta4R'>
                    <img src={Recomendacion4} alt='Silver piedra para gatos consejos' className='img' />
                    <p className='texto'>Higienizar la bandeja por completo</p>
                    <p className='subtexto'>mínimo cada 15 días</p>
                  </div>

                  </article>

                  <h3 className='tituloConsejos'>Consejos</h3>

                  <article className='consejos'>

                  <div className='card' id='tarjeta1C'>
                    <img src={Consejo1} alt='Silver piedra para gatos consejos' className='img' />
                    <p className='texto'>Duplicar recursos (Una bandeja por gato + una extra)</p>
                    <p className='subtexto'>para darles mayor superficie limpia</p>
                  </div>

                  <div className='card' id='tarjeta2C'>
                    <img src={Consejo2} alt='Silver piedra para gatos consejos' className='img' />
                    <p className='texto'>El tamaño ideal de la litera</p>
                    <p className='subtexto'>es una vez y media la medida del gato</p>
                  </div>

                  <div className='card'>
                    <img src={Consejo3} alt='Silver piedra para gatos consejos' className='img' />
                    <p className='texto'>Arenero ubicado</p>
                    <p className='subtexto'>en espacios tranquilos</p>
                  </div>

                  <div className='card'>
                    <img src={Consejo4} alt='Silver piedra para gatos consejos' className='img' />
                    <p className='texto'>Separar la bandeja </p>
                    <p className='subtexto'>del espacio de comida/bebedero de agua.</p>
                  </div>

                  <div className='card' id='tarjeta5C'>
                    <img src={Consejo5} alt='Silver piedra para gatos consejos' className='img' />
                    <p className='texto'>Para los gatos que escarban o tiran arena fuera de la bandeja</p>
                    <p className='subtexto'>se recomienda utilizar bandeja con bordes altos o con terminación.</p>
                  </div>

                  </article>
        </section>
    );
}

export default Recomendaciones;