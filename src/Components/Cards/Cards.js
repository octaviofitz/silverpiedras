import React from 'react';

import Card1 from '../IMG/BannerPrincipal.png';
import Card2 from '../IMG/BannerPrincipal.png';

import './cards.css';

function Cards() {
    return (
        <section className='cards'>
            <h1 className='titulo'>Silver Piedras</h1>   
            <div>
                <div className='tarjeta'>
                    <img src={Card1} alt='' className='img' />
                    <div className='texto'>
                        <h2 className='tituloVolanta'>Piedras Sanitarias</h2>
                    <p className='volanta'>lorem lorem lorem lorem lorem lorem lorem lorem</p>
                    <p className='boton' >Ver más 🠲</p>
                    </div >
                </div>
                <div className='tarjeta'>
                    <img src={Card2} alt='' className='img' />
                    <h2 className='tituloVolanta'>Piedras Sanitarias</h2>
                    <p className='volanta'>lorem lorem lorem lorem lorem lorem lorem lorem</p>
                    <p className='boton'>Ver más 🠲</p>
                </div>
            </div>
        </section>
    );
}

export default Cards;