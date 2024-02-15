import PropTypes from "prop-types";
import "./Item.css";
import { useCart } from "../context/CartContext";

const Item = (props) => {
  const cart = useCart();
  console.log("Cart", cart);

  // Function to handle adding items to the cart
  const addToCart = () => {
    const existingItem = cart.items.find((item) => item.name === props.name);
    if (existingItem) {
      // If item already exists in cart, update its quantity
      const updatedItems = cart.items.map((item) =>
        item.name === props.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      cart.setItems(updatedItems);
    } else {
      // If item doesn't exist in cart, add it
      cart.setItems([
        ...cart.items,
        { name: props.name, price: props.price, quantity: 1 },
      ]);
    }

    console.log(cart, "cart");
  };

  return (
    <div className="item-card">
      <img src={props.img} alt="" />
      <div className="card-text-wrapper">
        <div className="button-info">
          <h2 className="info-name">{props.name}</h2>
          <h4 className="info-price">Price: ${props.price}</h4>
        </div>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
};

Item.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
