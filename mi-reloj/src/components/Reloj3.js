import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';

/*export class Reloj3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
}

componentDidMount() {
    this.timerID = setInterval(() => this.tictac(),1000);
    }
    componentWillUnmount() {
    clearInterval(this.timerID)
    }
    tictac() {
    this.setState( {
    date: new Date()
    } );
    }

render() {
return (
<div>
<h1>Hola mundo!</h1>
<h2>Son las {this.state.date.toLocaleTimeString()}.</h2>
</div>
);
}
}*/

//version con funciones
export function Reloj3() {
    const [date, setDate] = useState(new Date());
  
    useEffect(() => {
      const timerID = setInterval(() => {
        setDate(new Date());
      }, 1000);
  
      return () => clearInterval(timerID);
    }, []);
  
    return (
      <div>
        <h1>Hola mundo!</h1>
        <h2>Son las {date.toLocaleTimeString()}.</h2>
      </div>
    );
  }



