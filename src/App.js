import { React } from "react";
// import { LoginContextProvider } from "./Contexts/Login";
// import Navigator from "./routes/Navigator";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
		<ThemeProvider theme={theme}>
			<div className="App">
				{/* <LoginContextProvider>
					<Navigator />
				</LoginContextProvider> */}
			</div>
		</ThemeProvider>
  );
}

export default App;