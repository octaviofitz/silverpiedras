import React from 'react';

import logoFooter from '../IMG/Logo.webp';
import RubicatLogo from '../IMG/Rubicat.webp';

import './footer.css';

function Footer() {
    return (
        <section className='footer'>
            <div>
            <a href='#logo' rel="noreferrer noopener">
                <img src={logoFooter} alt='Logo Silver Piedras' className='logo' />
                </a>
                </div>
                <div className='rubicat'>
                    <div>
                <p className='texto'>Producido por </p>
                </div>
                <div>
                <a href='https://www.rubicat.com.ar' target='_blank' rel="noreferrer noopener">
                <img src={RubicatLogo} alt='Rubicat' className='img' /> 
                </a>
                </div>
                </div>
                <div className='contacto'>
                  <p className='texto'>Contacto: <a href='mailto:info@rubicat.com.ar' className='link'>info@rubicat.com.ar</a></p>
                </div>
        </section>
    );
}

export default Footer;