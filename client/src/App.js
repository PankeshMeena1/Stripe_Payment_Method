import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import CartPage from "./pages/CartPage";
import Products from "./pages/Products";
import Success from "./components/Success"
import Cancel from "./components/Cancel";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
};

export default App;
