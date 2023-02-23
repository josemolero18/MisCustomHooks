import { useState } from "react"


export const useCounter = (inicialValue = 10) => {

    const [counter, setCounter] = useState(inicialValue);

    const increment = () =>{
        setCounter( (current) => current + 1 );
    };

    const decrement = () =>{
        setCounter( (current) => current - 1 )
    };

    const reset = () =>{
        setCounter( inicialValue );
    };


    return {
        counter: counter,
        setCounter: setCounter,
        increment : increment,
        decrement,
        reset
    }

}