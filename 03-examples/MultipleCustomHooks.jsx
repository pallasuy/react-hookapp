import { useFetch, useCounter } from "../hooks/"
import { BoxInfo, LoadingInfo } from "./";





export const MultipleCustomHooks = () => {


    const { counter, increment, decrement } = useCounter(1, 1);

    const url = `https://pokeapi.co/api/v2/pokemon-form/${counter}`;
    const { data, isLoading, hasError } = useFetch(url);

    const { name, id } = !!data && data;



    const nextPokemon = () => {
        increment();

    }

    const previusPokemon = () => {
        if (counter > 0) decrement();

    }
    //console.log(name, id);

    return (
        <>
            <h1> Pokemon </h1>
            <hr />

            {isLoading ? (<LoadingInfo />) : (<BoxInfo id={id} name={name} />)}

            <button className="btn btn-primary" onClick={previusPokemon} disabled={isLoading}>Previus Pokemon</button>
            <button className="btn btn-primary" onClick={nextPokemon} disabled={isLoading}>Next Pokemon</button>




        </>
    )
}
