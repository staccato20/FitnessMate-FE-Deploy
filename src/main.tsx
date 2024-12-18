import { StrictMode } from "react"
import ReactDOM from "react-dom/client"

import GlobalStyles from "@styles/GlobalStyles"

import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)
