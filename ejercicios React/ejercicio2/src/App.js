import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  //Mostrar un selector tipo select con los días de la semana. Cuando se pulse uno de ellos
  //deberá mostrarse en la página

  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const [selectedDay, setSelectedDay] = useState('');

  const handleChange = (event) => {
    setSelectedDay(event.target.value);
  };

  return (
    <div>
      <select value={selectedDay} onChange={handleChange}>
        <option value="">Selecciona un día</option>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      {selectedDay && <p>Día seleccionado: {selectedDay}</p>}
    </div>
  );
}

export default App;
