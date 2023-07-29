console.log('Hola Mundo');

const initialState = [
    {
        id: 1,
        todo: 'Recolectar Piedra',
        done: false,

    }
];

/* eL REDUCER es una simple funcion que va a recibir el estado inicial, y un segundo argumento que es la accion, que nos dira
como va a cambiar nuestro estado 
Siempre debe retornar un estado
*/

const todoReducer = (state = initialState, action = {}) => {
    if (action.type === '[TODO] add todo') return [...state, action.playload]
    return state;
}

let todos = todoReducer();

console.log(todos);

let newTodo = {
    id: 2,
    todo: 'Recolectar Madera',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    playload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);