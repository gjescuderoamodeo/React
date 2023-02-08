import { useState } from "react"

export default Counter = props =>{
    const [count, setCount]= useState(0);

    return(
        <spam>{count}</spam>
    );
};