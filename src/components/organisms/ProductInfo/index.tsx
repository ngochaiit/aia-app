import { FC, useState } from 'react'
import  { useContext } from "react";

import CartContext from "../../../context/cart/CartContext";
import Button from '../../atoms/Button';
import QuantityButton from "../../atoms/QuantityButton/QuantityButton"

import classes from './ProductInfo.module.scss'

export interface IProductInfo {
    id: number;
    source: string;
    name: string;
    price: number;
    description?: string;
}

interface ProductCardProps {
    product: IProductInfo;
    onView?: (id: number) => void;
    onAdd?: (product: IProductInfo) => void;
}
const ProductCard: FC<ProductCardProps> = ({ product, onView, onAdd }) => {
   const [count, setCount] = useState(1)
  const context = useContext(CartContext);
         
    const handleAddCard = () => {
        context.addProductToCart(product,count)
    }
    return <div className={classes.productCardInfoContainer}>
        <div className={classes.productCardInfo}>
            <img src={product.source} alt="product-img" />
            <div>
                <p className={classes.title}>{product.name}</p>
                <p>{product.price ? `$${product.price}` : '--'}</p>
                <p className={classes.description}>{product.description}</p>
            </div>
        </div>
        <div className={classes.addCart}>
            <div className={classes.quantityButton}>
                <span>Quantity</span>
                <QuantityButton value={count} onChange={setCount} />
            </div>
            <Button label='Add to Card' className={classes.btnAddCart} onClick={handleAddCard} />
        </div>
    </div>

}

export default ProductCard