import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <h1>Bienvenido!</h1>
      <p>Este es un ejemplo de una aplicacion utilizando React y una practica muy utilizada llamada: Ruteo.</p>
      <p>Listado de paises por region:</p>
      <button>
      <Link to="/region">Ver los paises listados por region</Link>
      </button>
    </>
  );
}

export default App;