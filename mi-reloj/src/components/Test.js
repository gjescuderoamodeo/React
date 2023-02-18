import React, { useState, useEffect } from 'react';

export function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Actualiza el título del documento usando el valor actual del contador
    document.title = `Contador: ${contador}`;
  }, [contador]);

  const incrementarContador = () => {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>El contador es: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}

export default Contador;
