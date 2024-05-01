import React from 'react';

import BannerMobile from '../IMG/BannerPrincipal.png';
import BannerDesktop from '../IMG/BannerDesktop.png';

import './banner.css';

function Banner() {
    return (
        <section>
        <div className='bannerMobile'>
            <img src={BannerMobile} alt='Banner Silver Piedras' className='img' />
        </div>
        <div className='bannerDesktop'>
            <img src={BannerDesktop} alt='Banner Silver Piedras' className='img' />
        </div>
        </section>
    );
}

export default Banner;