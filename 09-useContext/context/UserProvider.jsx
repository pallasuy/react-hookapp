import { UserContext } from "./userContext"

const user = {
    id: 123,
    name: 'Juan',
    email: 'juan@gmail.com'

}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
            {children}
        </UserContext.Provider>
    )
}
