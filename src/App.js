import { React } from "react";
import { LoginContextProvider } from "./Contexts/Login";
import Navigator from "./routes/Navigator";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <BrowserRouter>
          <Navigator />
        </BrowserRouter>
      </LoginContextProvider>
    </div>
  );
}

export default App;
