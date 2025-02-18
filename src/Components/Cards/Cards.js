import React from 'react';

import Card1 from '../../IMG/Cards/Card1.webp';
import Card2 from '../../IMG/Cards/Card2.webp';
import Flecha from '../../IMG/Varios/Flecha.webp'

import './cards.css';
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <section className='cards'>
            <h1 className='titulo'><span className='subrayado'>SILVER:</span> Reluciente Diatomita</h1>   
            <div className='container'>
            <article className='tarjeta'>
                <img src={Card1} className='img' alt='Silver Piedras sanitarias' />
                <div className='textos'>
                <h2>Bentonita</h2>
                <p>La arena de bentonita Silver para gatos ofrece una excelente absorción de desechos, manteniendo la caja limpia y sin malos olores. Su fórmula de alta calidad garantiza máxima efectividad y comodidad para tu gato.</p>
                <div className='containerBoton'>
                    <div>
                    <Link to='/bentonita'><p className='boton'>Ver más</p></Link>
                    </div>
                    <div>
                    <img src={Flecha} className='flecha' alt='' />
                    </div>
                </div>
                </div>
            </article>

            <article className='tarjeta'>
                <img src={Card2} className='img' alt='Piedras sanitarias'/>
                <div className='textos'>
                <h2>Diatomita</h2>
                <p>La arena de diatomita Silver para gatos absorbe rápidamente los desechos, manteniendo la caja limpia y libre de malos olores. Su fórmula natural y eficaz garantiza una higiene superior para tu gato.</p>
                <div className='containerBoton'>
                    <div>
                    <Link to='/diatomita'><p className='boton'>Ver más</p></Link>
                    </div>
                    <div>
                    <img src={Flecha} className='flecha' alt='' />
                    </div>
                </div>
                </div>
            </article>
            </div>
        </section>
    );
}

export default Cards;