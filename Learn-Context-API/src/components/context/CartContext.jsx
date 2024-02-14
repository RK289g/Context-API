import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext(null);

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
