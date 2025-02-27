import React from 'react';

import ProductoFrontal from '../../../IMG/Productos/mockupFrontal.webp';


import './diatomita.css';

function Diatomita() {
    return (
        <article className="diatomita">
                    <div>
                        <img className="img" src={ProductoFrontal} alt=''/>
                    </div>
                    <div className="data">
                        <h2 className="titulo">Diatomita</h2>
                        <p className="texto">Silver posee una gran cualidad de absorción debido a su estructura porosa y a la alta pureza del mineral. Los microporos internos, favorecen la retención e inhibición de bacterias causantes del mal olor en la bandeja sanitaria. Silver está realizado a base de diatomita.</p>
                    </div>
                </article>
    );
}

export default Diatomita;