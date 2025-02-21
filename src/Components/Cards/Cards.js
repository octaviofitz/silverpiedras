import React from 'react';

import Card1 from '../../IMG/Cards/Card1.webp';
import Card2 from '../../IMG/Cards/Card2.webp';
import Flecha from '../../IMG/Varios/Flecha.webp'

import './cards.css';
import { Link } from 'react-router-dom';
import CardsComponent from '../Prueba/CardsComponent';

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