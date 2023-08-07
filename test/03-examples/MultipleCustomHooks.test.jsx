import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');


describe('Pruebas en MultipleCustomHooks', () => {

    const mockIncremente = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncremente
    });

    beforeEach( ()=>{
        jest.clearAllMocks();//Limpiamso los mocks antes de cada prueba
    });

    test('Debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Pokemon'));

        const nextButton = screen.getByRole('button', { name: 'Next Pokemon' });
        expect(nextButton.disabled).toBeTruthy();


    });


    test('Debe de mostrar un Pokemon', () => {
        const namePokemon = 'Pikachu';
        useFetch.mockReturnValue({
            data: { name: namePokemon, id: 1 },
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        //screen.debug();
        expect(screen.getByText('Pokemon')).toBeTruthy();
        expect(screen.getByText(namePokemon)).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next Pokemon' });
        expect(nextButton.disabled).toBeFalsy();

    });

    test('Debe llamar la funcion de incrementar', () => {



        const namePokemon = 'Pikachu';

        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next Pokemon' });
        fireEvent.click(nextButton);

        expect(mockIncremente).toHaveBeenCalled();

    });




});