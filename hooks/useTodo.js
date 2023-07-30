import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";




const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];

}


export const useTodo = (initialState) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);




    const handleNewTodo = (newTodoValue) => {

        if (todos.some(todo => todo.description === newTodoValue.description)) {
            return;
        }

        const action = {
            type: '[TODO] Add',
            payload: newTodoValue
        }

        dispatch(action);
    }



    const handleDeleteTodo = (id) => {

        const action = {
            type: '[TODO] Remove',
            payload: id
        }

        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle',
            payload: id
        }

        dispatch(action);
    }

    const todosCount = todos.length;
    const todosPending = todos.filter(todo => !todo.done).length;



    return {
        todos, dispatch, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, todosPending

    }



}
