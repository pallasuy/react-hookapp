import { render, screen } from "@testing-library/react"
import { MainApp } from "../../09-useContext"
import { MemoryRouter } from "react-router-dom";

describe('Prueba sobre <MainApp/>', () => {

    test('Debe de mostrar el HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('HomePage')).toBeTruthy();

    });

    test('Debe de mostrar el LoginPage', () => {
        render(
            <MemoryRouter initialEntries={[`/login`]}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('LoginPage')).toBeTruthy();

    });


    test('Debe de mostrar el AboutPage', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('AboutPage')).toBeTruthy();

    });


    test('Debe de mostrar el Login con cualquier otra url', () => {
        render(
            <MemoryRouter initialEntries={['/aboasdasdut']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('HomePage')).toBeTruthy();

    });


})