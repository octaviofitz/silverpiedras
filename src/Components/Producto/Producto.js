import React from 'react';

import ProductoFrontal from '../IMG/mockupFrontal.png';
import ProductoDorso from '../IMG/MockupDorso.png';
import BannerML from '../IMG/BannerDesktop.webp';

import './producto.css';

function Producto() {
    return (
        <section className='producto'>
            <h4 className='titulo'>Producto</h4>
        <div className='container'>
            <div>
                <img src={ProductoFrontal} alt='Silver Piedras para gatos' className='img' />
                </div>
                     <div className='textos'>
                        <h5 className='subtitulo'>Silver</h5>
                        <p className='descripcion'>Silver posee una gran cualidad de absorción debido a su estructura porosa y a la alta pureza del mineral. Los microporos internos, favorecen la retención e inhibición de bacterias causantes del mal olor en la bandeja sanitaria.</p>
                        <p className='descripcion'> <strong>Disponible en 3.8KG</strong></p>
                         </div>
                         </div>

                <div className='container' id='Container'>
                         <div>
                            <img src={ProductoDorso} alt='Silver Piedras para gatos' className='img' />
                         </div>

                            <div className='textos'>
                            <h5 className='subtitulo'>Diatomita</h5>
                        <p className='descripcion'>Silver posee una gran cualidad de absorción debido a su estructura porosa y a la alta pureza del mineral. Los microporos internos, favorecen la retención e inhibición de bacterias causantes del mal olor en la bandeja sanitaria.</p>
                            </div>
                            </div>
        <img src={BannerML} className='banner'/>
        </section>
    );
}

export default Producto;