import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import HelloComponents from './components/HelloComponent'
import InputComponents from './components/InputComponent'
import { Tiempo } from './components/Reloj';

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
        <Tiempo tiempo={this.hora}></Tiempo>       
    </div>
  );
}
}

export default App;
