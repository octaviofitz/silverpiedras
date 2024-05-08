import React from 'react';

import ProductoFrontal from '../IMG/mockupFrontal.webp';
import ProductoDorso from '../IMG/mockupDorso.webp';
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
                        <h5 className='subtitulo' id='subtitulo1'>Silver</h5>
                        <p className='descripcion'>Silver posee una gran cualidad de absorción debido a su estructura porosa y a la alta pureza del mineral. Los microporos internos, favorecen la retención e inhibición de bacterias causantes del mal olor en la bandeja sanitaria. Silver está realizado a base de diatomita.</p>
                        <p className='descripcion'> <strong>Disponible en 3.8KG</strong></p>
                         </div>
                         </div>

                <div className='container' id='Container'>
                         <div>
                            <img src={ProductoDorso} alt='Silver Piedras para gatos' className='img' />
                         </div>

                            <div className='textos'>
                            <h5 className='subtitulo'>Diatomita</h5>
                        <p className='descripcion'>La diatomita es una roca silícea, sedimentaria de origen biogénico. Este mineral se forma por la acumulación de los esqueletos microscópicos de algas unicelulares.</p>
                        <p className='descripcion'>Sus principales características son:</p>
                        <ul className='lista'>
                            <li className='items'>Alta porosidad</li>
                            <li className='items'>Volumen de muy baja densidad</li>
                            <li className='items'>Muy alta capacidad para absorber líquidos (absorbe hasta 150% de su peso en agua)</li>
                            <li className='items'>Alta resistencia a la temperatura</li>
                            <li className='items'>Químicamente inerte</li>
                        </ul>
                            </div>

                            </div>
                            <a href='https://listado.mercadolibre.com.ar/silver-piedras-sanitarias#D[A:silver%20piedras%20sanitarias]' target='_blank' rel="noreferrer noopener"><img src={BannerML} className='banner' alt='Silver Piedras para gatos' /></a>
        </section>
    );
}

export default Producto;