import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./components/context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);