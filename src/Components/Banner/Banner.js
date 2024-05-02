import React from 'react';

import BannerMobile from '../IMG/BannerPrincipal.png';
import BannerDesktop from '../IMG/BannerDesktop.png';

import './banner.css';

function Banner() {
    return (
        <section>
        <div className='bannerMobile'>
        <a href='https://listado.mercadolibre.com.ar/silver-piedras-sanitarias#D[A:silver%20piedras%20sanitarias]' target='_blank' rel="noreferrer noopener">
              <img src={BannerMobile} alt='Banner Silver Piedras' className='img' />
              </a>
        </div>
        <div className='bannerDesktop'>
           <a href='https://listado.mercadolibre.com.ar/silver-piedras-sanitarias#D[A:silver%20piedras%20sanitarias]' target='_blank' rel="noreferrer noopener">
             <img src={BannerDesktop} alt='Banner Silver Piedras' className='img' />
             </a>
        </div>
        </section>
    );
}

export default Banner;