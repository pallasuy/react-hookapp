import { useState } from "react";
import { PropTypes } from 'prop-types'

import { useForm } from './../hooks/useForm';


export const TodoAdd = ({ onNewTodo }) => {

    //console.log(onNewTodo);

    const { description, onInputChange, onResetForm } = useForm(
        {
            description: ''
        }
    );



    const onFormSubmit = (event) => {

        event.preventDefault();
        const desT = description.trim();
        if (desT.length == 0) return;


        const newTodo = {
            id: new Date().getTime(),
            description: desT,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();

    }



    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-2"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}


TodoAdd.propTypes = {
    // onNewTodo: PropTypes.func.isRequiered,

}
