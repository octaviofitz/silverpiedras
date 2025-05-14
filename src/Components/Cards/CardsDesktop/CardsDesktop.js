import React from 'react';
import Bentonita from '../../../IMG/Productos/Bentonita/Silver-verde.webp'
import Diatomea from '../../../IMG/Productos/mockupFrontal.webp';

import { Link } from 'react-router-dom';
import './cardsDesktop.css';

function CardsDesktop() {
    return (
        <section className='CardsDesktop'>
            <div>
            <h1 className='titulo'><span className='subrayado'>SILVER:</span> PIEDRAS RELUCIENTES</h1>   
            </div>
            <div className='container'>
            <article className='articuloBentonita'>
                <Link to='/bentonita'>
                <img src={Bentonita} alt='Bentonita Silver' className='img1' />
                <div className='overlay-text'>BENTONITA</div>
                </Link>
            </article>
            <article className='articuloDiatomita'>
                <Link to='/diatomita'>
                <img src={Diatomea} alt='Diatomita Silver' className='img2' />
                <div className='overlay-text'>DIATOMITA</div>
                </Link>
            </article>
            </div>

        </section>
    );
}

export default CardsDesktop;