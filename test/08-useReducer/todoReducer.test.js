import { todoReducer } from "../../08-useReducer/todoReducer"

describe('Purbeas en el todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]

    test('Debe regresar el estado inicial', () => {

        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('Debe de agregar un TODO', () => {
        const newTodo = {
            id: 2,
            description: 'Segundo Todo',
            done: false
        }
        const action = {
            type: '[TODO] Add',
            payload: newTodo

        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

    });

    test('Debe eliminar un TODO', () => {
        const action = {
            type: '[TODO] Remove',
            payload: 1
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);

    });

    test('Debe realizar el Toggle del TODO', () => {
        const action = {
            type: '[TODO] Toggle',
            payload: 1
        };
        const newState = todoReducer(initialState, action); 
        expect(newState.length).toBe(1);
        expect(newState[0].done).toBeTruthy();

        const newStateDos = todoReducer(newState, action);
        expect(newStateDos[0].done).toBe(false);

    });

})