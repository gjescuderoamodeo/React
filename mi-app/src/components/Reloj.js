import React,{Component} from "react";
export class Tiempo extends Component {
    constructor(){
        super();
        this.state={fecha:new Date}
        setInterval(this.render(),1000)
    }
    render(){
        return(
            <div>
            <h2>Son las {this.state.fecha.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

