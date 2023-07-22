import { React } from "react";
import { LoginContextProvider } from "./Contexts/Login";
import Navigator from "./routes/Navigator";

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
