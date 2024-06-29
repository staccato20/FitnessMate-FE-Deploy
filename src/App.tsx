import { RecoilRoot } from "recoil"

import { ThemeProvider } from "styled-components"

import Navigator from "@routes/Navigator"

import theme from "@styles/theme"

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
