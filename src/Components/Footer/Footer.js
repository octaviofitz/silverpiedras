import React from 'react';

import logoFooter from '../IMG/Logo.webp';
import RubicatLogo from '../IMG/Rubicat.webp';

import './footer.css';

function Footer() {
    return (
        <section className='footer'>
            <div>
                <img src={logoFooter} alt='Logo Silver Piedras' className='logo' />
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
        </section>
    );
}

export default Footer;