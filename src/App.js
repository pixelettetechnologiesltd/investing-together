
import "./App.css";
import Home from "./Pages/Home";
import Howitworks from "./Pages/Howitworks";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/howitworks" element={<Howitworks />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
