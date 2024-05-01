import React from 'react';

import logoFooter from '../IMG/Logo.png';

import './footer.css';

function Footer() {
    return (
        <section className='footer'>
            <div>
                <img src={logoFooter} alt='Logo Silver Piedras' className='logo' />
                </div>
                <div>
                <p className='ubicacion'>Argentina 🏠</p>
                </div>
        </section>
    );
}

export default Footer;