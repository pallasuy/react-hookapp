import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'usuario',
        email: 'usuario@react.com'

    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {//Recibimos el event pero podemso desestructurarlo
        const { name, value } = target;
        setFormState({
            ...formState, [name]: value

        });

    }

    useEffect(() => {
       // console.log('UseEffect called!');
    }, []);

    useEffect(() => {
      // console.log('formState change!');
    }, [formState]);

    useEffect(() => {
       // console.log('email change!');
    }, [email]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="User Name"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            {
                username == 'usuario2' && <Message />
            }



            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

        </>
    )
}
