import React from 'react';

import Rubicat from '../IMG/Rubicat.webp';

import './producido.css';

function Producido() {
    return (
        <section className='producido'>
            <h3 className='titulo'><strong>Producido por</strong></h3>
            <a href='https://www.rubicat.com.ar' target='_blank' rel="noreferrer noopener">
                <img src={Rubicat} alt='Rubicat' className='img' />
                </a>
        </section>
    );
}

export default Producido;