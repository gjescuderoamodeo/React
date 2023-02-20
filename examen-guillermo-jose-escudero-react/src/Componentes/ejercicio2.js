//Crear un componete que reciba un color y devuelva su código rgb. Dicho componente se 
//usará dentro del app.js en la que el usuario elegirá un color mediante un select y se mostrará su 
//valor correspondiente. Los colores a elegir serán los siguientes: negro, rojo, verde, azul, cian, magenta, amarillo y blanco.

import React from 'react';

function Ejercicio2(props) {
  //objetos con los códigos RGB correspondientes a cada color
  const colores = {
    negro: '#000000',
    rojo: '#ff0000',
    verde: '#00ff00',
    azul: '#0000ff',
    cian: '#00ffff',
    magenta: '#ff00ff',
    amarillo: '#ffff00',
    blanco: '#ffffff'
  };

  //para obtener el código RGB del color seleccionado
  const codigoRGB = colores[props.color];

  return <span>{codigoRGB}</span>;
}

export default Ejercicio2;






