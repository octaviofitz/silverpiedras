import React from 'react';

import Card1 from '../../IMG/Cards/Card1.webp';
import Card2 from '../../IMG/Cards/Card2.webp';
import Flecha from '../IMG/Flecha.webp'

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
                <h2>Absorbente sanitario</h2>
                <p>Debido a su estructura porosa y la alta pureza del mineral posee una gran calidad de absorsión</p>
                <div className='containerBoton'>
                    <div>
                    <Link to='/producto'><p className='boton'>Ver más</p></Link>
                    </div>
                    <div>
                    <img src={Flecha} className='flecha' />
                    </div>
                </div>
                </div>
            </article>

            <article className='tarjeta'>
                <img src={Card2} className='img' alt='Piedras sanitarias'/>
                <div className='textos'>
                <h2>Tips y consejos de uso</h2>
                <p>Es importante utilizar las piedras sanitarias de una forma adecuada para obtener su máximo rendimiento</p>
                <div className='containerBoton'>
                    <div>
                    <Link to='/recomendaciones'><p className='boton'>Ver más</p></Link>
                    </div>
                    <div>
                    <img src={Flecha} className='flecha' />
                    </div>
                </div>
                </div>
            </article>
            </div>
        </section>
    );
}

export default Cards;