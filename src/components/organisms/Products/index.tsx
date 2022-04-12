import {FC} from 'react'
import { useNavigate } from "react-router-dom";
import  { useContext } from "react";

import CartContext from "../../../context/cart/CartContext";
import ProductCard, {IProductInfo} from '../../molecules/ProductCard'
import './Products.scss'

interface ProductsProps {}

const Products:FC<ProductsProps> = () => {
    const navigate = useNavigate()

  const context = useContext(CartContext);

    const handleMoreInfo = (prId: number) => {
        navigate(`/product/${prId}`);
    }
     
    const handleAddCard = (product: IProductInfo) => {
        context.addProductToCart(product)
    }
    const list = context.products
    if (!list.length) {
        return <p>No Data</p>
    }
    return <div className='products-container'>
        {list.map(item => <ProductCard key={item.id} product={item} onView={handleMoreInfo} onAdd={handleAddCard} />)}
    </div>
}

export default Products;