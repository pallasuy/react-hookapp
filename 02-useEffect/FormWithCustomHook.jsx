import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
//import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const { username,email,password, onInputChange,onResetForm} = useForm({
        username: '',
        email: '',
        password: ''

    });

   // const { username, email, password } = formState;



    return (
        <>
            <h1> Form With Custom Hook </h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="User Name"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            {/*  {
                username == 'usuario2' && <Message />
            }
 */}


            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button className="btn btn-primary mt-2" onClick={ onResetForm }> Borrar</button>

        </>
    )
}
