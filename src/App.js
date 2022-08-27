
import "./App.css";
import Home from "./Pages/Home";
<<<<<<< HEAD
import Howitworks from "./Pages/Howitworks";
=======
import Index from "./assets/components/Index";
import Whyinvesting from "./Pages/Whyinvesting";
>>>>>>> f3d1ac296653d6adb82d7e881d561af593704c27
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}>
          <Route path="/" element={<Home />}></Route>
<<<<<<< HEAD
          <Route path="/howitworks" element={<Howitworks />}></Route>
=======
          <Route path="/why-investing-togerther" element={< Whyinvesting/>}></Route>
          </Route>
>>>>>>> f3d1ac296653d6adb82d7e881d561af593704c27
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
