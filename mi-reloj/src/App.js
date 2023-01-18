import logo from './logo.svg';
import './App.css';
import { Reloj3 } from './components/Reloj3';
import ReactDOM from 'react-dom/client';
import { Component } from 'react';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Reloj3></Reloj3>
      </div>
    )
  }

  
}

export default App;
