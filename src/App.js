
import "./App.css";
import Home from "./Pages/Home";
import Index from "./assets/components/Index";
import wInvesting from "./Pages/wInvesting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/why-investing-togerther" element={<wInvesting />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
