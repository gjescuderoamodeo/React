import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  //Crear una aplicación con dos elementos tipo text en la que los valores introducidos en uno
 //de ellos se reflejen automáticamente en el otro  
 const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <input type="text" value={text} disabled/>
    </div>
  );
}

export default App;
