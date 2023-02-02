import logo from './logo.svg';
import './App.css';
import Dado from './components/dado'

//Crear un componente que simule las tiradas de un dado. Deberá mostrar en una etiqueta un
//número aleatorio entre 1 y 6.

function App() {
  return (
    <div className="App">
      <Dado/>
    </div>
  );
}

export default App;
