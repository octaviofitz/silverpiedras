import React, { useState } from 'react';
import imgTienda from '../../IMG/Varios/tienda.png';
import './tiendas.css';
import MapView from '../Utilidades/Map/Map';
import DataTiendas from '../../Data/DataTiendas';

function Tiendas() {
  const [view, setView] = useState('map'); // 'map' o 'list'
  const [selectedStore, setSelectedStore] = useState(null);

  // Función para cambiar la vista y centrar el mapa en la tienda seleccionada
  const handleSelectStore = (tienda) => {
    setSelectedStore(tienda);
    setView('map'); // Cambia la vista a mapa
  };

  return (
    <section className="tiendas">
      <h3 className="titulo">¿Dónde comprar SILVER?</h3>

      <div className="search-bar">
        {/* Aquí va tu componente de búsqueda */}
      </div>

      <div className="view-toggle">
        <div
          className={`view-option ${view === 'map' ? 'active' : ''}`}
          onClick={() => setView('map')}
        >
          MAPA
        </div>
        <div
          className={`view-option ${view === 'list' ? 'active' : ''}`}
          onClick={() => setView('list')}
        >
          LISTADO DE TIENDAS
        </div>
      </div>

      {/* Mostrar mapa o listado según el estado */}
      {view === 'map' ? (
        <MapView selectedStore={selectedStore} />
      ) : (

        <div>

        <div>
        <p className='subtitulo'>Seleccioná una tienda para ver su ubicación en el mapa</p>
        </div>

        <div className="tienda-list">
          {DataTiendas.map((tienda) => (
            <div 
              className="tienda-card" 
              key={tienda.id} 
              onClick={() => handleSelectStore(tienda)}
            >
              <img src={imgTienda} alt="tienda" className="tienda-img" />
              <div className="tienda-info">
                <h4 className="tienda-nombre">{tienda.nombre}</h4>
                <p className="tienda-direccion">{tienda.direccion}</p>
                <p className="tienda-contacto">{tienda.contacto}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      )}
    </section>
  );
}

export default Tiendas;
