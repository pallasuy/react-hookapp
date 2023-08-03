import { useState } from "react"

//Un hook no es mas que una funcion con algun tipo de retorno 
export const useCounter = (initialValue = 10, min = 0, max = 100) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        if (counter < max) setCounter((current) => current + value);

    }

    const decrement = (value = 1) => {
        if (counter > min) setCounter((current) => current - value);

    }

    const reset = () => {
        setCounter(initialValue);

    }

    return {
        counter, // esto es lo mismo que poner counter: counter
        increment, decrement, reset
    }

}