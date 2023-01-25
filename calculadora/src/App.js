import logo from './logo.svg';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [resultado, setResultado] = useState('');

  const handleClick = (num) => {
    setResultado(resultado + num)
  }

  const handleClear = () => {
    setResultado('');
  }

  const handleEqual = () => {
    try {
      console.log(eval(resultado))
      setResultado(eval(resultado))      
    } catch (e) {
      setResultado('Error')
    }
  }

  return (    
    <div class="card bg-black card-block " >
      <h2 style={{textAlign:'center', color:'white'}}>Calculadora</h2>
      <div class="card-body">
      <div>
        <input type="text" value={resultado} disabled className="form-control"/>
      </div>
      <br />
      <div >
      <div className="btn-group ">
        <button className="btn btn-primary invisible mb-1 ms-1" style={{maxWidth:'6rem'
        }}></button>
        <button className="btn btn-primary invisible mb-1 ms-1" style={{maxWidth:'6rem'
        }}></button>
        <button className="btn btn-primary invisible mb-1 ms-1" style={{maxWidth:'6rem'
        }}></button>
        <button className="btn mb-1 ms-1" style={{
        backgroundColor: 'red', color:'white', maxWidth:'5rem'
      }} onClick={handleClear}>CE</button>
      </div>      
      <br />
      <div className="btn-group">
        <button className="btn btn-light mb-1 ms-1" style={{maxWidth:'6rem'
        }} onClick={() => handleClick(1)}>1</button>
        <button className="btn btn-light mb-1 ms-1" style={{maxWidth:'6rem'
        }} onClick={() => handleClick(2)}>2</button>
        <button className="btn btn-light mb-1 ms-1" style={{maxWidth:'6rem'
        }} onClick={() => handleClick(3)}>3</button>
        <button className="btn btn-info mb-1 ms-1" style={{maxWidth:'6rem'
        }} onClick={() => handleClick('-')}>-</button>
      </div>      
      <br />
      <div className="btn-group">
        <button className="btn btn-light mb-1 ms-1" style={{maxWidth:'6rem'
        }} onClick={() => handleClick(4)}>4</button>
        <button className="btn btn-light mb-1 ms-1" style={{maxWidth:'6rem'
        }} onClick={() => handleClick(5)}>5</button>
        <button className="btn btn-light mb-1 ms-1" style={{maxWidth:'6rem'
        }} onClick={() => handleClick(6)}>6</button>
        <button className="btn btn-info mb-1 ms-1" style={{maxWidth:'6rem'
        }} onClick={() => handleClick('/')}>/</button>  
      </div>
      <br /> 
      <div className="btn-group">
        <button className="btn btn-light mb-1 ms-1" style={{maxWidth:'6rem'
        }} onClick={() => handleClick(7)}>7</button>
        <button className="btn btn-light mb-1 ms-1" style={{maxWidth:'6rem'
        }} onClick={() => handleClick(8)}>8</button>
        <button className="btn btn-light mb-1 ms-1" style={{maxWidth:'6rem'
        }} onClick={() => handleClick(9)}>9</button>        
        <button className="btn btn-info mb-1 ms-1" style={{maxWidth:'6rem'
        }} onClick={() => handleClick('*')}>x</button> 
      </div>      <br />
      
      <div className="btn-group">        
      <button className="btn btn-light mb-1 ms-1" style={{maxWidth:'6rem'
        }} onClick={() => handleClick('.')}>.</button>
        <button className="btn btn-light mb-1 ms-1" style={{maxWidth:'6rem'
        }} onClick={() => handleClick(0)}>0</button>
        <button className="btn btn-success mb-1 ms-1" style={{maxWidth:'6rem'
        }} onClick={handleEqual}>=</button>
        <button className="btn btn-info mb-1 ms-1" style={{maxWidth:'6rem'
        }} onClick={() => handleClick('+')}>+</button>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
