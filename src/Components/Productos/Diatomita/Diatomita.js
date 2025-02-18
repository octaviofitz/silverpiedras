import React from 'react';

import ProductoFrontal from '../../../IMG/Productos/mockupFrontal.webp';
import ProductoDorso from '../../../IMG/Productos/mockupDorso.webp';
import BannerML from '../../../IMG/Banner/BannerDesktop.webp';

import './diatomita.css';

function Diatomita() {
    return (
        <section className='diatomita'>
        <div className='container' id='Container2'>
            <div>
                <img src={ProductoFrontal} alt='Silver Piedras para gatos' className='img' />
                </div>
                     <div className='textos'>
                        <h5 className='subtitulo' id='subtitulo1'>Diatomita</h5>
                        <p className='descripcion'>Silver posee una gran cualidad de absorción debido a su estructura porosa y a la alta pureza del mineral. Los microporos internos, favorecen la retención e inhibición de bacterias causantes del mal olor en la bandeja sanitaria. Silver está realizado a base de diatomita.</p>
                        <p className='descripcion'> <strong>Disponible en 3.8KG</strong></p>
                         </div>
                         </div>

                           <img src={BannerML} className='banner' alt='Silver Piedras para gatos' />
        </section>
    );
}

export default Diatomita;