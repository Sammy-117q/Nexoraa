
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import BusinessDemo from "./pages/BusinessDemo";
import FinanceDemo from "./pages/FinanceDemo";
import StoreDemo from "./pages/StoreDemo";

import HospitalityDemo from "./pages/HospitalityDemo";
import HospitalitySiteDemo from "./pages/HospitalitySiteDemo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Existing NEXORA pages */}
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/business" element={<BusinessDemo />} />
        <Route path="/finance" element={<FinanceDemo />} />
        <Route path="/store" element={<StoreDemo />} />

        {/* Hospitality showcase */}
        <Route
          path="/hospitality"
          element={<HospitalityDemo />}
        />

        {/* Three individual hospitality website designs */}
        <Route
          path="/hospitality/:type"
          element={<HospitalitySiteDemo />}
        />
      </Routes>
    </BrowserRouter>
  );
}
