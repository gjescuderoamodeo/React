//Crea un componente temporizador que realice una cuenta atras. Suponer máximo a contar será 2 minutos.
//Tendra los siguientes elementos:

//dos cuadros de texto para escribir los minutos y los segundos
//un boton para iniciar la cuenta atras y otro para detenerla
//el tiempo restante se irá colocando en un elemneto H2
//al agotar el tiempo mostrará el mensaje "TIEMPO FINALIZADO"

import React, { useState, useRef } from 'react';

function Temporizador() {
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(null);
  const intervalRef = useRef(null);

  // Función para manejar cambios en el campo de texto de minutos
  const handleMinutosChange = event => {
    setMinutos(event.target.value);
  };

  // Función para manejar cambios en el campo de texto de segundos
  const handleSegundosChange = event => {
    setSegundos(event.target.value);
  };

  // Función para iniciar el temporizador
  const iniciarTemporizador = () => {
    const tiempoTotal = (minutos * 60) + segundos;
    setTiempoRestante(tiempoTotal);

    // Establecer un intervalo para reducir el tiempo restante en 1 segundo
    intervalRef.current = setInterval(() => {
      setTiempoRestante(prevTiempoRestante => {
        if (prevTiempoRestante === 0) {
          clearInterval(intervalRef.current);
          return null;
        }

        return prevTiempoRestante - 1;
      });
    }, 1000);
  };

  // Función para detener el temporizador
  const detenerTemporizador = () => {
    clearInterval(intervalRef.current);
    setTiempoRestante(null);
  };

  // Función para formatear el tiempo restante en minutos y segundos
  const formatoTiempo = tiempo => {
    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div>
        <label htmlFor="minutos">Minutos:</label>
        <input type="number" id="minutos" value={minutos} onChange={handleMinutosChange} />
      </div>
      <div>
        <label htmlFor="segundos">Segundos:</label>
        <input type="number" id="segundos" value={segundos} onChange={handleSegundosChange} />
      </div>
      <div>
        <button onClick={iniciarTemporizador}>Iniciar</button>
        <button onClick={detenerTemporizador}>Detener</button>
      </div>
      {tiempoRestante !== null && (
        <h2>{formatoTiempo(tiempoRestante)}</h2>
      )}
      {tiempoRestante === 0 && (
        <h2>TIEMPO FINALIZADO</h2>
      )}
    </div>
  );
}

export default Temporizador;









