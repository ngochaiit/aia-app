import React, { useState, useReducer, FC, useMemo, useCallback } from "react";
import { IProductInfo } from "../../components/molecules/ProductCard";

import CartContext from "./CartContext";
import {
  shopReducer,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  INIT_STATE,
} from "./CartReducer";
import {ProductsData} from '../../mock/product'



const GlobalState: FC = ({ children }) => {
  const [cartState, dispatch] = useReducer(shopReducer, INIT_STATE);

  const addProductToCart = useCallback((product: IProductInfo, quantity?: number) => {
    dispatch({ type: ADD_PRODUCT, product: product, quantity });
  },[]);

  const removeProductFromCart = useCallback((productId: number) => {
    dispatch({ type: REMOVE_PRODUCT, productId: productId });
  },[]);

  const values = useMemo(
    () => ({
      products: ProductsData,
      cart: cartState.cart,
      addProductToCart: addProductToCart,
      removeProductFromCart: removeProductFromCart,
    }),
    [cartState, addProductToCart, removeProductFromCart]
  );
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default GlobalState;
