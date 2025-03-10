import React from 'react';
import './distribuidores.css';

function Distribuidores() {
    return (
        <section className='distribuidor'>
            <a href="https://api.whatsapp.com/send?phone=+541156997816&text=Hola" target='__black'>
            <div className="card">
                <div className="contenido">
                    <h4 className="titulo">¿Querés vender Silver?</h4>
                    <p className="mobileText">Si estás interesado en vender o distribuir <strong>Silver</strong> hacé click <strong>aquí</strong> para contactarnos.</p>
                    <p className="texto">Si estás interesado en vender o distribuir <strong>Silver</strong>, nuestra exclusiva línea de bentonita y diatomita, <strong>hacé click aquí para contactarnos</strong>. Te brindaremos toda la información necesaria y responderemos a la brevedad para que puedas sumarte a nuestra red de distribuidores.</p>
                </div>
            </div>
            </a>
        </section>
    );
}

export default Distribuidores;
