import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailItem from "./components/DetailPage/ItemDetailContainer";
import CartPage from "./components/CartPage/Cartpage";
import { CartProvider } from "./context/CartContext";
import CategoryList from "./components/ShopPage/CategoryPage/Categorypage";
import ItemListContainer from "./components/ShopPage/Itemlistcontainer";
import AboutUsContainer from "./components/AboutUsPage/AboutUsContainer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Inicio" element={<App />} />
          <Route path="/Tienda" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/Sobre%20nosotros" element={<AboutUsContainer />} />
          <Route path="/product/:id" element={<DetailItem />} />
          <Route path="/producto/:category" element={<CategoryList />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
