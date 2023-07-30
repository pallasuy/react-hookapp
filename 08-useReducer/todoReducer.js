export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add':
            //throw new Error('Action.type = add no esta implementada');
            return [...initialState, action.payload]
            break;
        case '[TODO] Remove':
            //Asumiremos que el action.payload sera el id
            return initialState.filter(todo => todo.id !== action.payload);
            break;
            break;
        case '[TODO] Toggle':
            //Asumiremos que el action.payload sera el id
            return initialState.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo, done: !todo.done
                    }

                }
                return todo;
            });
            break;
        default:
            return initialState;
            break;
    }

}