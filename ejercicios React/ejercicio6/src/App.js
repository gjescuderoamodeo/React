import logo from './logo.svg';
import './App.css';
import Juego from './components/Juego'


/* 
  Utilizar el componente anterior para crear un juego de 2 a 4 jugadores. Al inicio pedirá el
número de participantes, el nombre de cada uno y posteriormente realizará las tiradas por
turnos, hasta un total de 5. Irá mostrando la puntuación parcial junto con la media y al
acabar mostrará la clasificación final
*/

function App() {
  return (
    <div className="App">
      <Juego/>
    </div>
  );
}

export default App;
