import React from 'react';

import logoFooter from '../../IMG/Varios/Logo.webp';
import RubicatLogo from '../../IMG/Varios/Rubicat.webp';

import './footer.css';

function Footer() {
    return (
        <section className='footer'>
            <div>
            <a href='#logo' rel="noreferrer noopener">
                <img src={logoFooter} alt='Logo Silver Piedras' className='logo' />
                </a>
                </div>
               {/*  <div className='rubicat'>
                    <div>
                <p className='texto'>Producido por</p>
                </div>
                <div>
                <a href='https://www.rubicat.com.ar' target='_blank' rel="noreferrer noopener">
                <img src={RubicatLogo} alt='Rubicat' className='img' /> 
                </a>
                </div>
                </div> */}
                <div className='contacto'>
                <img src="https://www.clipartmax.com/png/small/222-2228214_cartoon-e-mail-envelope-icon-mail-envelope-png.png" alt="Cartoon, E-mail, Envelope, Icon, Mail - Envelope .png @clipartmax.com" className='mail' />
                 <a href='mailto:info@rubicat.com.ar' className='link'>info@silverpiedras.com.ar</a>
                </div>
        </section>
    );
}

export default Footer;