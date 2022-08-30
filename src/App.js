
import "./App.css";
import Home from "./Pages/Home";

import Howitworks from "./Pages/Howitworks";

import Index from "./assets/components/Index";
import Whyinvesting from "./Pages/Whyinvesting";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MarketPlace } from "./Pages/MarketPlace";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/why-investing-togerther" element={<wInvesting />}></Route>
            <Route path="market-place" element={<MarketPlace />} />
            <Route path="/howitworks" element={<Howitworks />}></Route>
            <Route path="/why-investing-togerther" element={< Whyinvesting />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
