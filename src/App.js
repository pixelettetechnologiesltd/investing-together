
import "./App.css";
import Home from "./Pages/Home";
import Index from "./assets/components/Index";
import Whyinvesting from "./Pages/Whyinvesting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/why-investing-togerther" element={< Whyinvesting/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
