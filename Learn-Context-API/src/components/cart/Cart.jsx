import "./Cart.css";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const cart = useCart();

  const total = cart.items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h3>Cart</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="total">Total bill: ${total}</h4>
    </div>
  );
};

export default Cart;
