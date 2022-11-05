import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import AddColor from "./components/AddColor";
import Color from "./components/Color";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/colors" element={<Home />} />
        <Route path="/:name" element={<Color />} />
        <Route path="/colors/new" element={<AddColor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
