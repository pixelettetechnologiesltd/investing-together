
import "./App.css";
import Home from "./Pages/Home";

import Howitworks from "./Pages/Howitworks";
import Company from "./Pages/Company";
import Index from "./assets/components/Index";
import Whyinvesting from "./Pages/Whyinvesting";
import AboutUs from "./Pages/AboutUs";
import LearningCenter from "./Pages/LearningCenter";
import LearnDetail from "./Pages/LearnDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/howitworks" element={<Howitworks />}></Route>
          <Route path="/learningcenter" element={<LearningCenter />}></Route>
          <Route path="/learndetail" element={<LearnDetail />}></Route>

          <Route path="/why-investing-togerther" element={< Whyinvesting/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
