import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
