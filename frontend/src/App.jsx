import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login"
import Landing from "./Landing"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;