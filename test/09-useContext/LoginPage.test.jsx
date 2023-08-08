import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../09-useContext/LoginPage";
import { UserContext } from "../../09-useContext/context/userContext";


describe('Pruebas en el <LoginPage/>', () => {

    const setUserMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    const user = { id: 123, name: 'Usuario Uno', email: 'usr@react.com' };

    test('Renderizar el componente sin usuario logueado', () => {

        render(<LoginPage />);
        const pre = screen.getByLabelText('pre');
        expect(pre.innerHTML.length).toBe(0);
    });

    test('Debe llamar al setUser al hacer click en el boton', () => {

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>

        );
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(setUserMock).toHaveBeenCalledWith(user)



    });

})