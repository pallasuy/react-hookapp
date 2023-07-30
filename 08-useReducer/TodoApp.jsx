import { useEffect, useReducer, useState } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";


const initialState = [
    /*   {
          id: new Date().getTime(),
          description: 'Recolectar Piedra',
          done: false,
      } */

];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];

}


export const TodoApp = () => {

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

        return (
            <>
                <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
                <hr />

                <div className="row">
                    <div className="col-7">

                        {/* TodoList */}
                        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
                        {/* Fin TodoList */}
                    </div>
                    <div className="col-5">

                        <h4>Agregar TODO</h4>
                        <hr />
                        {/* TodoAdd  onNewTodo (todo) */}
                        <TodoAdd onNewTodo={handleNewTodo} /> {/* (newTodo) => handleNewTodo(newTodo) */}
                        {/* Fin TodoAdd */}
                    </div>
                </div>



            </>

        )
    }
