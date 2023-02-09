import React from 'react';
import Counter from './Counter.js';

export default(props)=>{
    /*const [count,setCount]=React.useState(0);

    const increment = () => setCount(count+1)
    const decrement = () => setCount(count-1)
    const reset = () => setCount(0);*/


    const [count,setCount] = React.useState(0);

    //efectos
    const myEffect = () =>
    {
        document.title = `${count}`;
    }

    const increment=()=>{
      setCount(c =>c + 1)
    }

    const decrement = () => setCount(count+1);
    const reset = () => setCount(0)

   return <Counter value={count} increment={increment} decrement={decrement} reset={reset}/>
}