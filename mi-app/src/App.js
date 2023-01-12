import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import HelloComponents from './components/HelloComponent'
import InputComponents from './components/InputComponent'

class App extends Component{
  constructor(){
    super()
    this.state={
      name:'Mundo'
    }
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
    </div>
  );
}
}

export default App;
