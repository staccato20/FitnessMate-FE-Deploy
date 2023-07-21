import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { LoginContextProvider } from "./Contexts/Login";
import Navigator from "./routes/Navigator";
import SignIn, { signInAction } from "./pages/SignIn/SignIn";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <Navigator />
      </LoginContextProvider>
    </div>
  );
}

export default App;
