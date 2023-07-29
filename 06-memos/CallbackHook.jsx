import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

    const [counter, setCounter] = useState(1);

    const incrementFunction = useCallback(
        (value) => {
            setCounter((c) => value + c);
        },
        [],
    )

    /*    const incrementFunction = () => {
           setCounter(counter + 1);
   
       } */



    return (
        <>
            <h1>Callback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFunction} />


        </>
    )
}
