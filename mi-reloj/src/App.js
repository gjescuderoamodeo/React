import logo from './logo.svg';
import './App.css';
import Reloj3 from './components/Reloj3';
import Contador from './components/Test';

import ReactDOM from 'react-dom/client';
import { Component } from 'react';

//version con funcion
function App() {
  return (
    <div className="App">
      <Reloj3 />
      <Contador/>
    </div>
  );
}

export default App;


/*class App extends Component {
  render(){
    return(
      <div className="App">
        <Reloj3></Reloj3>
      </div>
    )
  }

  
}

export default App;*/
