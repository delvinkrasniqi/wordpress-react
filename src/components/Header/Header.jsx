import React, {
    useContext, useRef, useState,
} from "react";
import ThemeContext from "../../context/themeContext";

import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import "./header.css";

export const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [menuOpen, setMenuOpen] = useState(false);


    const changeTheme = (value) => {
        console.log(value);
        setTheme(value);
    }

    return (
        <header className="main-header">
            <Container>
                <div className="header-inner">
                    <Link to="/">
                        <h2>WP-React</h2>
                    </Link>
                    <ul className={`menu-items ${menuOpen ? 'active' : ''}`}>
                        <Link to="/" className="text-uppercase">Home</Link>
                        <Link to="/projects" className="text-uppercase">Projects</Link>
                        <li>
                            <select onChange={e => changeTheme(e.target.value)}>
                                <option value="light" selected={theme == 'light' ? true: false} >Light</option>
                                <option value="dark" selected={theme == 'dark' ? true: false}>Dark</option>
                            </select>
                        </li>
                    </ul>
                    <div className="toggler" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                    </div>
                </div>
            </Container>

        </header>
    )
}