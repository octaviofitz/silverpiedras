import React from 'react';
import CardsComponent from '../CardsComponent/CardsComponent';

import './cards.css';

function Cards() {
    return (
        <section className='cards'>
            <h1 className='titulo'><span className='subrayado'>SILVER:</span> PIEDRAS RELUCIENTES</h1>   
            <div className='container'>
            <CardsComponent />
            </div>
        </section>
    );
}

export default Cards;