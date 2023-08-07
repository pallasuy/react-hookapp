import { TodoItem } from "../../08-useReducer/TodoItem";
import { render, screen } from '@testing-library/react'

describe('Pruebas sobre el <TodoItem />', () => {

    const id = 1;
    const description = 'Comida'
    const todo = {
        id: id,
        descripcion: description,
        done: false,

    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });


    test('Debe de msotrar el todo pendiente de completar', () => {

        render(
            <TodoItem
                id={id}
                description={description}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodoMock={onDeleteTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        //console.log(liElement.innerHTML);

        expect(liElement.className).toBe("list-group-item d-flex justify-content-between");

        const spanElement = screen.getByLabelText('span');
        //console.log(spanElement.className);
        //screen.debug();
        expect( spanElement.className.trim() ).toBe('align-self-center');



    })




});