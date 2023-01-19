import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import HelloComponents from './components/HelloComponent'
import InputComponents from './components/InputComponent'
import { Reloj3 } from './components/Reloj3';
import { Toggle } from './components/Toggle';
import ReactDOM from 'react-dom/client';


class App extends Component{
  constructor(){
    super()
    this.state={
      name:'Mundo'
    }
    this.hora= new Date();
  }

  changeName=(event)=>{
    this.setState({
      name: event.target.value
    })
  }
  


  render(){
  return (
    <div className="App">
        <HelloComponents nombre={this.state.name}></HelloComponents>
        <InputComponents name={this.state.name} cambiarNombre={this.changeName}></InputComponents>     
        <Reloj3/>
        <Toggle />
    </div>
  );
}

}



export default App;
