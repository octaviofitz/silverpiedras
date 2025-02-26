import React from 'react';
import Databentonita from '../../../Data/DataBentonita';
import './bentonita.css';

function Bentonita() {
    return (
        <section className='bentonita'>
            {Databentonita.map((producto) => (
                <article 
                    key={producto.id} 
                    className="producto"
                    style={{ backgroundColor: producto.color }} // Aplica el color desde la data
                >
                    <div>
                        <img
                            className="img"
                            src={producto.img}
                            alt={producto.titulo}
                        />
                    </div>
                    <div className="data">
                        <h2 className="titulo">{producto.titulo}</h2>
                        <p className="texto">{producto.texto}</p>
                    </div>
                </article>
            ))}
        </section>
    );
}

export default Bentonita;
