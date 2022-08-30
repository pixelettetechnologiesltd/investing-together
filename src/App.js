import "./App.css";
import Home from "./Pages/Home";
import Howitworks from "./Pages/Howitworks";
import Index from "./assets/components/Index";
import Whyinvesting from "./Pages/Whyinvesting";
import MarketplaceDetail from "./Pages/MarketplaceDetail"
import Resources from "./Pages/Resources";
import Faq from "./Pages/Faq";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/howitworks" element={<Howitworks />}></Route>
            <Route
              path="/why-investing-togerther"
              element={<Whyinvesting />}
            ></Route>
             <Route
              path="/marketPlace-detail"
              element={<MarketplaceDetail />}
            ></Route>
            <Route
              path="/resources"
              element={<Resources />}
            ></Route>
            <Route
              path="/faq"
              element={<Faq />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
