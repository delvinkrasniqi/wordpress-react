import Layout from "./components/Layout";
import "./App.css";
import themeContext from "./context/themeContext";
import { useContext } from "react";
import { ThemeProvider } from "./context/themeContext";

function App() {
 
  return (
    <ThemeProvider>
      <div className="App">
    
        <Layout />
      </div>
    </ThemeProvider>

  );
}

export default App;
