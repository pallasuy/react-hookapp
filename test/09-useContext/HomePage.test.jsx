import { render, screen } from "@testing-library/react"
import { HomePage } from "../../09-useContext/HomePage"
import { UserContext } from "../../09-useContext/context/userContext";

describe('Pruebas en <HomePage/>', () => {
    const user = {
        id: 1,
        name: 'Gabriel'
    }
    test('Debe de mostrar el componente sin el usuario ', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider >
        );
        //screen.debug();

        const preTag = screen.getByLabelText('pre');
        // console.log(preTag.innerHTML);
        expect(preTag.innerHTML).toEqual('null');

    });

    test('Debe de mostrar el componente con el usuario ', () => {

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider >
        );
        screen.debug();

        const preTag = screen.getByLabelText('pre');
        console.log(user.name);
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());
        expect(preTag.innerHTML).toContain(`${user.id}`);
        

    });


})