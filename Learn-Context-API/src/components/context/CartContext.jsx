import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext(null);

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const updateQuantity = (index, newQuantity, remove = false) => {
    if (newQuantity <= 0 || remove) {
      const updatedItems = [...items];
      updatedItems.splice(index, 1); // Remove the item at the specified index
      setItems(updatedItems);
    } else {
      // Otherwise, update the quantity of the item
      const updatedItems = [...items];
      updatedItems[index] = { ...updatedItems[index], quantity: newQuantity };
      setItems(updatedItems);
    }
  };
  

  

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, setItems, updateQuantity, total }}>
      {props.children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
