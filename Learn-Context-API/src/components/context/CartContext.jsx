import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext(null);

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ items, setItems, total }}>
      {props.children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
