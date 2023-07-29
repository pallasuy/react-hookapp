import { useMemo, useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";



const heavyStuff = (iterationNumber = 100) => {
    for (let index = 0; index < iterationNumber; index++) {
        console.log('Ahi vamos...');

    }

    return `${iterationNumber} iteraciones realizadas`;

}


export const MemoHook = () => {
    const { counter, increment } = useCounter(1000, 0, 999999999);
    const [show, setShow] = useState(true)

    const memoValue = useMemo(() => heavyStuff(counter), [counter]);//useMemo memoriza un valor

    return (
        <>
            <h1>Counter: <small> {counter} </small> </h1>
            <hr />

            <h4>{memoValue}</h4>

            <button className="btn btn-primary "
                onClick={() => { increment() }}
            > +1 </button>

            <button className="btn btn-outline-primary"
                onClick={() => setShow(!show)}>
                Show/Hide - {JSON.stringify(show)}
            </button>
        </>
    )
}
