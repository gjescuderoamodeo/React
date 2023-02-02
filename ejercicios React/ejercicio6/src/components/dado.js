import React, { useState } from 'react';
import './dado.css';

const Dado = () => {
  const [numero, setNumber] = useState(1);

  const handleRoll = () => {
    setNumber(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div>
    <div className="Dado">
      <h1 className="Dado-numero">{numero}</h1>    
    </div>

    <div>
      <button className="Dado-button" onClick={handleRoll}>
        Rodad dado
      </button>
    </div>
    </div>
  );
};

export default Dado;