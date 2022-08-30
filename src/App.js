
import "./App.css";
import Home from "./Pages/Home";
import Index from "./assets/components/Index";
import wInvesting from "./Pages/wInvesting";
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
