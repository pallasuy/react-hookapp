import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage, HomePage, LoginPage } from "./index"


export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                {/* <Route path="/*" element={<HomePage />} /> */}

                <Route path="/*" element={<Navigate to={"/"} />} />

            </Routes>

        </>

    )
}
