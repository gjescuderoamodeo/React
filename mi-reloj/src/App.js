import logo from './logo.svg';
import './App.css';
import Reloj3 from './components/Reloj3';
import Contador from './components/Test';

import ReactDOM from 'react-dom/client';
import { Component } from 'react';
import React, { useState, useEffect } from 'react';

//version con funcion
function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Este código se ejecuta solo una vez, al montar el componente
    console.log('Componente montado');

    // Esta función se ejecuta al desmontar el componente
    return () => {
      console.log('Componente desmontado');
    }
  }, []);

  useEffect(() => {
    // Este código se ejecuta cada vez que el estado del contador cambia
    console.log('Contador actualizado: ' + contador);
  }, [contador]);

  const incrementarContador = () => {
    setContador(contador + 1);
  }

  return (
    <div className="App">
      <Reloj3 />
      <Contador/>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default App;


/*class App extends Component {
  render(){
    return(
      <div className="App">
        <Reloj3></Reloj3>
      </div>
    )
  }

  
}

export default App;*/
