import PropTypes from "prop-types";
import "./Item.css";
import { useCart } from "../context/CartContext";

const Item = (props) => {
  const cart = useCart();
  console.log("Cart", cart);
  return (
    <div className="item-card">
      <img src={props.img} alt="" />
      <div className="card-text-wrapper">
        <div className="button-info">
          <h2 className="info-name">{props.name}</h2>
          <h4 className="info-price">Price: ${props.price}</h4>
        </div>
        <button
          onClick={() =>
            cart.setItems([
              ...cart.items,
              { name: props.name, price: props.price },
            ])
          }
        >
          Add to cart
        </button>
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
