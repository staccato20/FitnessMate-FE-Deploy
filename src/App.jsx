import {React} from "react"
import {ThemeProvider} from "styled-components"
import theme from "./styles/theme"
import Navigator from "./routes/Navigator"
import {RecoilRoot} from "recoil"

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<RecoilRoot>
					<Navigator />
				</RecoilRoot>
			</ThemeProvider>
		</div>
	)
}

export default App
