// import React from "react";
import "./Cart.css";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { items, updateQuantity } = useCart();

  const decreaseQuantity = (index) => {
    console.log("Decreasing quantity for index:", index);
    updateQuantity(index, items[index].quantity - 1);
  };

  const increaseQuantity = (index) => {
    console.log("Increasing quantity for index:", index);
    updateQuantity(index, items[index].quantity + 1);
  };

  return (
    <div className="cart">
      <h3>Cart {items.length}</h3>
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
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <button
                  onClick={() => decreaseQuantity(index)}
                  className="button-increase-decrease"
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => increaseQuantity(index)}
                  className="button-increase-decrease"
                >
                  +
                </button>
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="total">
        Total bill: $
        {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </h4>
    </div>
  );
};

export default Cart;
