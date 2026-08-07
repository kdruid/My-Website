import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login"
import Landing from "./Landing"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;