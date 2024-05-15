import React from 'react';

import BannerMobile from '../../IMG/Banner/Bannercelu.webp';
import BannerDesktop from '../../IMG/Banner/BannerDesktop.webp';

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