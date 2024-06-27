import {ThemeProvider} from "styled-components"
import theme from "./styles/theme"

import {RecoilRoot} from "recoil"
import Navigator from "./routes/Navigator"

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
