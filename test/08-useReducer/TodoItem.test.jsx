import { TodoItem } from "../../08-useReducer/TodoItem";
import { fireEvent, render, screen } from '@testing-library/react'

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
        expect(spanElement.className.trim()).toBe('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');



    });

    test('Debe de msotrar el todo completado', () => {

        render(
            <TodoItem
                id={id}
                description={description}
                done={true}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodoMock={onDeleteTodoMock}

            />
        );
        const liElement = screen.getByRole('listitem');

        expect(liElement.className).toBe("list-group-item d-flex justify-content-between");
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });



    test('Span debe llamar al ToggleTodo cuando se hace click', () => {
        render(
            <TodoItem
                id={id}
                description={description}
                done={true}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodoMock={onDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(id);
    });

    test('Button debe llamar al deleteTodo cuando se hace click', () => {
        render(
            <TodoItem
                id={id}
                description={description}
                done={true}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click( buttonElement );
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( id );
    });





});