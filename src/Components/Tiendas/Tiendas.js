import React from 'react';
import DataTiendas from '../../Data/DataTiendas';
import imgTienda from '../../IMG/Varios/tienda.png'

import './tiendas.css';

function Tiendas() {
    return (
        <section className='tiendas'>
            <h3 className='titulo'>¿Dónde comprar Silver?</h3>

            <div className='card'>
                {DataTiendas.map((dato) => (
            <div className='datos'  key={dato.id}>
                <div className='containerIMG'>
                <img className='img' alt='tienda' src={imgTienda} />
                </div>
                <div className='informacion'>
                <h4 className='nombre'>{dato.nombre}</h4>
                <p className='direccion'>{dato.direccion}</p>
                <p className='contacto'>{dato.contacto}</p>
                </div>
                        </div>
        ))}
            </div>

        </section>
    );
}

export default Tiendas;