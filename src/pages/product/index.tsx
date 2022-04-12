import { useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";
import Header from "../../components/organisms/Header";
import ProductInfo from "../../components/organisms/ProductInfo";
import '../../components/templates/default.scss'
const ProductDetail = () => {
  let { id: productId } = useParams();
  const context = useContext(CartContext);

  const product = context.products.find(
    (item) => item?.id === Number(productId)
  );
  if (product) {
    return (
      <div>
        <Header />
        <div className="layout">
          <ProductInfo product={product} />
        </div>
      </div>
    );
  }
  return <p>Product Not Found</p>;
};

export default ProductDetail;
