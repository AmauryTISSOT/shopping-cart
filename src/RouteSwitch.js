import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cart from "./Cart";
import Products from "./Products";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
