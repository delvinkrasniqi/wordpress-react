import React, {
    useContext,
} from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Projects } from "../pages/Projects/Projects";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import ThemeContext from "../context/themeContext";

const Layout = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <BrowserRouter>
            <main className={`layout ${theme == 'dark' ? 'dark-theme': 'light-theme'}`}>
                <Header />
            
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" exact element={<Projects />} />
                </Routes >
                <Footer />
            </main>


        </BrowserRouter>
    )
}


export default Layout;