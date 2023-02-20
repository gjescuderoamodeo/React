//Crear un componente que simule un sorteo en el que el usuario deberá acertar un número entre el 1 y el 20.
//El funcionamiento será el siguiente:

//se generará un número aleatorio entre 1 y 20
//dicho número se escribirá en la consola 
//el usuario elegirá un número y se le dirá si ha acertado o no
//tendrá 3 oportunidades y tras agotarlas se le indicará que ha perdido.

import React, { useState } from 'react';

function Ejercicio3() {

 //número aleatorio
 const [numeroAleatorio, setNumeroAleatorio] = useState(Math.floor(Math.random() * 20) + 1);
 console.log("El número aleatorio es:", numeroAleatorio);
 //intentos del usuario
 const [intentos, setIntentos] = useState(3);
 //valor del input
 const [inputValue, setInputValue] = useState('');
 //resultado del juego
 const [resultado, setResultado] = useState('');

        

 //función para manejar el envío del formulario
 const handleSubmit = (e) => {
   e.preventDefault();

   // Si el input está vacío, no se hace nada
   if (inputValue === '') {
     return;
   }

   //valor del input a un número entero
   const numeroElegido = parseInt(inputValue);
   setInputValue('');

   //número elegido igual al número aleatorio generado, el usuario ha ganado
   if (numeroElegido === numeroAleatorio) {
     setResultado('¡Has ganado! Reiniciando juego...');
     // Reiniciamos el juego después de 2 segundos
     setTimeout(() => {        
        setNumeroAleatorio(Math.ceil(Math.random() * 20));
        setIntentos(3);
        setResultado('');
      }, 2000);
   } else {
     //restar un intento
     setIntentos(intentos - 1);

     // Si se han agotado los intentos, se muestra un mensaje y se reinicia en 2 segundos
     if (intentos === 1) {
       setResultado(`Has perdido. El número era: ${numeroAleatorio}.`);
       // Reiniciamos el juego después de 2 segundos
       setTimeout(() => {
         setNumeroAleatorio(Math.ceil(Math.random() * 20));
         setIntentos(3);
         setResultado('');
       }, 2000);
     } else {
       setResultado('número incorrecto');
       //console.log('Número aleatorio:', numeroAleatorio);
     }
   }
 };

 return (
   <div>
     <p>Elige un número entre 1 y 20</p>
     <form onSubmit={handleSubmit}>
       <input type="number" min="1" max="20" size={4} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
       <button type="submit">Comprobar</button>
     </form>
     {resultado && <p>{resultado}</p>}
     {intentos === 0 && <p>Se te acabaron los intentos. Reiniciando juego...</p>}
   </div>
 );
}

export default Ejercicio3;
