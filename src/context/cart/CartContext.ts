import React from "react";
import { IProductInfo } from "../../components/molecules/ProductCard";
import { ICartItem } from "./CartReducer";

  type ProductCartState =  {
    products: Array<IProductInfo>,
    cart: Array<ICartItem>,
    addProductToCart: (product: IProductInfo, quantity?: number) => void,
    removeProductFromCart: (productId: number) => void
  }

export default React.createContext<ProductCartState>({
  products: [],
  cart: [],
  addProductToCart: (product: IProductInfo, quantity?: number) => {},
  removeProductFromCart: (productId: number) => {}
});
