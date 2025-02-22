import React from 'react';
import './distribuidores.css';

function Distribuidores() {
    return (
        <section className='distribuidor'>
            <div className='containerTexto'>
            <h3 className='titulo'>Vender SILVER</h3>
            <p className='texto'>¿Tenés un petshop, una veterinaria o sos distribuidor y querés vender Silver?</p>
            </div>
            <div className='containerBoton'>
            <button className='boton'><a href='https://api.whatsapp.com/send/?phone=1159300042' target='__blanck'>Contactanos</a></button>
            </div>
        </section>
    );
}

export default Distribuidores;