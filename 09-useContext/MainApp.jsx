import { Navigate, Route, Routes, Link } from "react-router-dom"
import { AboutPage, HomePage, LoginPage, Navbar } from "./index"
import { UserProvider } from "./context/UserProvider"



export const MainApp = () => {
    return (
        <UserProvider>
            <Navbar />
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                {/* <Route path="/*" element={<HomePage />} /> */}

                <Route path="/*" element={<Navigate to={"/"} />} />

            </Routes>

        </UserProvider>

    )
}
