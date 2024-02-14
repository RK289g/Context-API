import "./App.css";
import Cart from "./components/cart/Cart";
import Item from "./components/item/Item";
import iBookImg from "../src/assets/images/iBook.jpg";
import iKidImg from "../src/assets/images/iKid.jpg";
import iPodImg from "../src/assets/images/ipod.jpg";
import iPhoneImg from "../src/assets/images/iphone.jpg";

function App() {
  return (
    <div className="app">
      <div className="app-wrapper">
      <div className="card-wrapper">
        <Item name="iBook" price={25000} img={iBookImg} />
        <Item name="iPhone" price={15000} img={iPhoneImg} />
        <Item name="iPod" price={2000} img={iPodImg} />
        <Item name="iKid" price={1300} img={iKidImg} />
      </div>
      <Cart />
      </div>
    </div>
  );
}

export default App;
