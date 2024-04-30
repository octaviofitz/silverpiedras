import React from 'react';

import logoFooter from '../IMG/Logo.png';

import './footer.css';

function Footer() {
    return (
        <section className='footer'>
            <div>
                <img src={logoFooter} alt='Logo Silver Piedras' className='logo' />
                <p className='ubicacion'>Argentina 🏠</p>
            </div>
            <p>footer</p>
        </section>
    );
}

export default Footer;