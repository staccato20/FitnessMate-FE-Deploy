import { React } from "react";
import { LoginContextProvider } from "./Contexts/Login";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Navigator from "./routes/Navigator";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <LoginContextProvider>
        <BrowserRouter>
          <Navigator />
        </BrowserRouter>
      </LoginContextProvider>
    </div>
</ThemeProvider>
  );
}

export default App;