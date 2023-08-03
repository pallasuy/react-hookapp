import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";

describe('Pruebas en MultipleCustomHooks', () => {
    test('Debe mostrar el componente por defecto', () => {
        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Pokemon'));

        const nextButton = screen.getByRole('button', { name: 'Next Pokemon' });    
        expect(nextButton.disabled).toBeTruthy();

        screen.debug();

    });
});