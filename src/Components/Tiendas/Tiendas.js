import React, { useState } from 'react';
import imgTienda from '../../IMG/Varios/tienda.png';
import './tiendas.css';
import MapView from '../Utilidades/Map/Map';
import DataTiendas from '../../Data/DataTiendas';

function Tiendas() {
  // Estado para controlar la vista activa
  const [view, setView] = useState('map'); // 'map' o 'list'

  // Cambiar la vista entre mapa y listado
  const handleToggleView = (viewType) => {
    setView(viewType);
  };

  return (
    <section className="tiendas">
      <h3 className="titulo">¿Dónde comprar SILVER?</h3>

      {/* Botón de búsqueda (supongo que ya lo tienes) */}
      <div className="search-bar">
        {/* Aquí va tu componente de búsqueda */}
      </div>

      {/* Opciones de Mapa y Listado debajo del botón de búsqueda */}
      <div className="view-toggle">
        <div
          className={`view-option ${view === 'map' ? 'active' : ''}`}
          onClick={() => handleToggleView('map')}
        >
          MAPA
        </div>
        <div
          className={`view-option ${view === 'list' ? 'active' : ''}`}
          onClick={() => handleToggleView('list')}
        >
          LISTADO DE TIENDAS
        </div>
      </div>

      {/* Mostrar mapa o listado según el estado */}
      {view === 'map' ? (
        <MapView />
      ) : (
        <div className="tienda-list">
          {DataTiendas.map((tienda) => (
            <div className="tienda-card" key={tienda.id}>
              <img src={imgTienda} alt="tienda" className="tienda-img" />
              <div className="tienda-info">
                <h4 className="tienda-nombre">{tienda.nombre}</h4>
                <p className="tienda-direccion">{tienda.direccion}</p>
                <p className="tienda-contacto">{tienda.contacto}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Tiendas;
