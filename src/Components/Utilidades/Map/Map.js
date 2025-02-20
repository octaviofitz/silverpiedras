import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Asegúrate de importar Leaflet
import SilverImg from '../../../IMG/Varios/Logo.webp'; // Ícono de tienda
import FlagImg from '../../../IMG/Varios/flag.png'; // Ícono de la banderita celeste
import DataTiendas from '../../../Data/DataTiendas'; // Importa los datos de las tiendas
import "./mapView.css";

// Modifica el componente MapUpdater
const MapUpdater = ({ position }) => {
  const map = useMap();
  if (position) {
    map.setView(position, 14);
  }
  return null;
};

const MapView = () => {
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState(null); // Cambiado a null
  const [userLocation, setUserLocation] = useState(null); // Estado para controlar la localización

  // Íconos personalizados
  const tiendaIcon = new L.Icon({
    iconUrl: SilverImg,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const userIcon = new L.Icon({
    iconUrl: FlagImg, // Ícono de banderita celeste
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  // Buscar dirección en OpenStreetMap
  const handleSearch = async () => {
    if (!search.trim()) return;

    try {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${search}`
      );
      if (res.data.length > 0) {
        const { lat, lon } = res.data[0];
        setPosition([parseFloat(lat), parseFloat(lon)]);
      } else {
        alert("Dirección no encontrada");
      }
    } catch (error) {
      console.error("Error al buscar la dirección:", error);
    }
  };

  // Obtener la ubicación del usuario
  const handleLocateMe = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
          setUserLocation([latitude, longitude]); // Cambiar ícono a banderita celeste
        },
        (error) => {
          console.error("Error obteniendo la ubicación:", error);
          alert("No se pudo obtener la ubicación.");
        }
      );
    } else {
      alert("Tu navegador no soporta geolocalización.");
    }
  };

  // Establecer posición inicial si no se ha hecho búsqueda ni localizado
  useEffect(() => {
    if (position === null) {
      setPosition([-34.6037, -58.3816]); // Establece una posición inicial por defecto (Buenos Aires)
    }
  }, [position]);
  

  return (
    <div>
      {/* Buscador */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Ingresa tu dirección o ciudad..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          BUSCAR
        </button>
      </div>

      {/* Contenedor del mapa */}
      <div className="map-container">
        <MapContainer center={position || [-34.6037, -58.3816]} zoom={13} className="map">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapUpdater position={position} />

          {/* Marcadores de tiendas */}
          {DataTiendas.map((tienda) => (
            <Marker key={tienda.id} position={[tienda.lat, tienda.lng]} icon={tiendaIcon}>
              <Popup>
                <strong>{tienda.nombre}</strong><br />
                {tienda.direccion}<br />
                {tienda.contacto}
              </Popup>
            </Marker>
          ))}

          {/* Marcador del usuario */}
          {userLocation && (
            <Marker position={userLocation} icon={userIcon}>
              <Popup>📍 Estás aquí</Popup>
            </Marker>
          )}
        </MapContainer>

        {/* Botón de LOCALIZARME */}
        <button onClick={handleLocateMe} className="locate-button">
          📍 LOCALIZARME
        </button>
      </div>
    </div>
  );
};

export default MapView;
