import "./App.css";
import Home from "./Pages/Home";
import Howitworks from "./Pages/Howitworks";
import Whyinvesting from "./Pages/Whyinvesting";
import MarketplaceDetail from "./Pages/MarketplaceDetail";
import Resources from "./Pages/Resources";
import Faq from "./Pages/Faq";
import Company from "./Pages/Company";
import Index from "./assets/components/Index";
import AboutUs from "./Pages/AboutUs";
import LearningCenter from "./Pages/LearningCenter";
import LearnDetail from "./Pages/LearnDetail";
import AccountInfo from "../src/Pages/AccountInfo"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MarketPlace } from "./Pages/MarketPlace";
import Wallet from "../src/Pages/Wallet"
import Settings from "../src/Pages/Settings"

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
            <Route path="/marketPlace-detail" element={<MarketplaceDetail />}></Route>
            <Route path="/resources" element={<Resources />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/howitworks" element={<Howitworks />}></Route>
            <Route path="/learningcenter" element={<LearningCenter />}></Route>
            <Route path="/learndetail" element={<LearnDetail />}></Route>
            <Route path="market-place" element={<MarketPlace />} />
            <Route path="/howitworks" element={<Howitworks />}></Route>
            <Route path="/account-info" element={<AccountInfo />}></Route>
            <Route path="/wallet" element={<Wallet/>}></Route>
            <Route path="/settings" element={<Settings/>}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
