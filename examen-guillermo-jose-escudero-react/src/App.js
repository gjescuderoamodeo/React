import './App.css';
import React, { useState } from 'react';
import Ejercicio1 from './Componentes/ejercicio1';
import Ejercicio2 from './Componentes/ejercicio2';
import Ejercicio3 from './Componentes/ejercicio3';


function App() {

  //ej2
  const [colorSeleccionado, setColorSeleccionado] = useState('negro');  

  //función para manejar cambios en el select de colores
  const handleColorChange = event => {
    setColorSeleccionado(event.target.value);
  };

  //ej3
  console.log("fijarse en el numero aleatorio solo el segundo la primera vez que carga este componente:");

  return (
    <div className='App'>
      <div className='ej1'>
        <Ejercicio1 />
      </div>

      <h1 className='separador'>-----------------------------</h1>
      <div>
        <select value={colorSeleccionado} onChange={handleColorChange}>
          <option value="negro">negro</option>
          <option value="rojo">rojo</option>
          <option value="verde">verde</option>
          <option value="azul">azul</option>
          <option value="cian">cian</option>
          <option value="magenta">magenta</option>
          <option value="amarillo">amarillo</option>
          <option value="blanco">blanco</option>
        </select>
        <p className='p'>Valor RGB del color seleccionado: <Ejercicio2 color={colorSeleccionado}/></p>
    </div>
      <h1 className='separador'>-----------------------------</h1>
      <div>
        <Ejercicio3/>
      </div>
    </div>
    
    
  );
}

export default App;
