import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import BusinessDemo from "./pages/BusinessDemo";
import FinanceDemo from "./pages/FinanceDemo";
import StoreDemo from "./pages/StoreDemo";

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/business"
          element={<BusinessDemo />}
        />

        <Route
          path="/finance"
          element={<FinanceDemo />}
        />

        <Route
          path="/store"
          element={<StoreDemo />}
        />

      </Routes>

    </BrowserRouter>

  );

}