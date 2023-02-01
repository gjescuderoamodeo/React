import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  //Crear una aplicación con dos controles tipo number y un botón. Al pulsar el botón deberá
  //mostrarse en un alert la suma de los números

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleSum = () => {
    const sum = num1 + num2;
    alert(`La suma es: ${sum}`);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
      <input type="number" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
      <button onClick={handleSum}>Sumar</button>
    </div>
  );
}

export default App;
