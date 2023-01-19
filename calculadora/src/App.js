import logo from './logo.svg';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [resultado, setResultado] = useState('0');

  const handleClick = (num) => {
    setResultado(resultado + num)
  }

  const handleClear = () => {
    setResultado('');
  }

  const handleEqual = () => {
    try {
      setResultado(eval(resultado))
    } catch (e) {
      setResultado('Error')
    }
  }

  return (
    <div className="container bg-dark" style={{
      width: '5 rem',
      height: '50 rem'
    }}>
      <div>
        <input type="text" value={resultado} disabled className="form-control"/>
      </div>
      <br />
      <div className="btn-group">
        <button className="btn btn-primary invisible ms-1"></button>
        <button className="btn btn-primary invisible ms-1"></button>
        <button className="btn btn-primary invisible ms-1"></button>
        <button className="btn ms-1" style={{
        backgroundColor: 'red'
      }} onClick={handleClear}>CE</button>
      </div>      
      <br />
      <div className="btn-group">
        <button className="btn btn-light ms-1" onClick={() => handleClick(1)}>1</button>
        <button className="btn btn-light ms-1" onClick={() => handleClick(2)}>2</button>
        <button className="btn btn-light ms-1" onClick={() => handleClick(3)}>3</button>
        <button className="btn btn-info ms-1" onClick={() => handleClick('-')}>-</button>
      </div>      
      <br />
      <div className="btn-group">
        <button className="btn btn-light ms-1" onClick={() => handleClick(4)}>4</button>
        <button className="btn btn-light ms-1" onClick={() => handleClick(5)}>5</button>
        <button className="btn btn-light ms-1" onClick={() => handleClick(6)}>6</button>
        <button className="btn btn-info ms-1" onClick={() => handleClick('/')}>/</button>  
      </div>
      <br /> 
      <div className="btn-group">
        <button className="btn btn-light ms-1" onClick={() => handleClick(7)}>7</button>
        <button className="btn btn-light ms-1" onClick={() => handleClick(8)}>8</button>
        <button className="btn btn-light ms-1" onClick={() => handleClick(9)}>9</button>        
        <button className="btn btn-info ms-1" onClick={() => handleClick('*')}>x</button> 
      </div>      <br />
      
      <div className="btn-group">        
      <button className="btn btn-light ms-1" onClick={() => handleClick('.')}>.</button>
        <button className="btn btn-light ms-1" onClick={() => handleClick(0)}>0</button>
        <button className="btn btn-success ms-1" onClick={handleEqual}>=</button>
        <button className="btn btn-info ms-1" onClick={() => handleClick('+')}>+</button>
      </div>
    </div>
  );
}

export default App;
