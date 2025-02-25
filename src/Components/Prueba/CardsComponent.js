import React from 'react';
import { useNavigate } from 'react-router-dom';
import DataCards from '../../Data/DataCards';
import './cardsComponent.css';

function Cards() {
    const navigate = useNavigate(); // Hook para la navegación

    return (
        <div className="cards-container">
            {DataCards.map((card) => (
                <article key={card.id} className="card prueba">
                    <img
                        className="card__background"
                        src={card.img}
                        alt={card.titulo}
                        width="1920"
                    />
                    <div className="card__content | flow">
                        <div className="card__content--container | flow">
                            <h2 className="card__title">{card.titulo}</h2>
                            <p className="card__description">{card.texto}</p>
                        </div>
                        <button
                            className="card__button"
                            onClick={() => navigate(`/${card.titulo.toLowerCase()}`)}
                        >
                            Ver más
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default Cards;
