import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import Header from "../../components/organisms/Header";
import '../../components/templates/default.scss'
import Carts from "../../components/organisms/Carts/Carts";
const CartPage = () => {
  const context = useContext(CartContext);


  if (context.cart.length) {
    return (
      <div>
        <Header />
        <div className="layout">
            <Carts />
        </div>
      </div>
    );
  }
  return <p>Cart Empty</p>;
};

export default CartPage;
