import React from 'react';

import Rubicat from '../IMG/Rubicat.webp';

import './producido.css';

function Producido() {
    return (
        <section className='producido'>
            <h3 className='titulo'>Producido por</h3>
            <img src={Rubicat} alt='Rubicat' className='img' />
        </section>
    );
}

export default Producido;