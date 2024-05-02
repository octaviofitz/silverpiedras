import React from 'react';

import Card1 from '../IMG/BannerDesktop.png';
import Card2 from '../IMG/BannerDesktop.png';
import Flecha from '../IMG/flecha.png'

import './cards.css';
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <section className='cards'>
            <h1 className='titulo'>SILVER: Reluciente Diatomita</h1>   
            <div className='container'>
            <article className='tarjeta'>
                <img src={Card1} className='img' alt='Silver' />
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
                <img src={Card1} className='img' alt='Silver' />
                <div className='textos'>
                <h2>Retención de olores</h2>
                <p>Sus microporos internos favorecen la retención de olores e inhibición de bacterias</p>
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
            </div>
        </section>
    );
}

export default Cards;