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
                <img src={RubicatLogo} alt='Rubicat' className='img' />
                </div>
                </div>
        </section>
    );
}

export default Footer;