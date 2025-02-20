import './App.css';
import "leaflet/dist/leaflet.css"; // Importa el CSS de Leaflet
import 'bootstrap/dist/css/bootstrap.min.css';

/* Componentes */
import Router from './Components/Router/Router';

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
