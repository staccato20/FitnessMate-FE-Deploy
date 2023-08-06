import { React } from "react";
import { LoginContextProvider } from "./Contexts/Login";
import Navigator from "./routes/Navigator";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <LoginContextProvider>
          <Navigator />
        </LoginContextProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
