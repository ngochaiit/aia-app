import { IProductInfo } from "../../components/molecules/ProductCard";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";


export type ICartItem = {
    quantity: number
} & IProductInfo

interface ICartState { 
    cart: Array<ICartItem>
}

export const INIT_STATE: ICartState = {
    cart: []
}



const addProductToCart = (product: IProductInfo, quantity: number, state: ICartState) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === product.id
  );
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...product, quantity: quantity ? quantity : 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };
        if (quantity) {
          updatedItem.quantity = quantity
        } else {
         updatedItem.quantity++;
        }
        updatedCart[updatedItemIndex] = updatedItem;
      }
    return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId: number, state: ICartState) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

export const shopReducer = (state: ICartState, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, action.quantity, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    default:
      return state;
  }
};
