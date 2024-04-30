import React from 'react';
import BannerMobile from '../IMG/BannerPrincipal.png';

import './banner.css';

function Banner() {
    return (
        <section className='banner'>
            <img src={BannerMobile} alt='Banner Silver Piedras' className='img' />
        </section>
    );
}

export default Banner;