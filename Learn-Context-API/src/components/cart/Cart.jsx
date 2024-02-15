// import React from "react";
import "./Cart.css";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const cart = useCart();

  return (
    <div className="cart">
      <h3>Cart {cart.items.length}</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="total">Total bill: ${cart?.total}</h4>
    </div>
  );
};

export default Cart;
