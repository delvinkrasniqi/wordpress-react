import { createContext, useState } from "react";

const ThemeContext = createContext(null);


export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState('dark');


    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;
