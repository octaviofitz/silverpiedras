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
                        <p className="texto">Nuestra Diatomita para Gatos es una alternativa natural y ultraabsorbente para el arenero de tu mascota. Gracias a su composición liviana y porosa, controla eficazmente la humedad y neutraliza los olores, manteniendo el ambiente fresco por más tiempo.</p>
                    </div>
                </article>
    );
}

export default Diatomita;