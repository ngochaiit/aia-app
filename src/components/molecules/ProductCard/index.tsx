import { FC } from 'react'
import Card from '../../atoms/Cards'
import Button from '../../atoms/Button'
import classes from './ProductCard.module.scss'

export interface IProductInfo { 
    id:  number;
    source: string;
    name: string;
    price: number;
}

interface ProductCardProps {
    product: IProductInfo;
    onView?: (id: number) => void;
    onAdd?: (product: IProductInfo) => void;
}
const ProductCard: FC<ProductCardProps> = ({ product, onView, onAdd }) => {
    return <Card className={classes.productCardContainer}>
        <div className={classes.productCartInfo}>
            <img src={product.source} alt="product-img" />
            <p>{product.name}</p>
            <p>{product.price ? `$${product.price}`: '--'}</p>
        </div>
        <div className={classes.productCardActions}>
            <Button label="More Info" onClick={() => onView?.(product.id)} />
            <Button label="Add to Card" onClick={() => onAdd?.(product)} />
        </div>
    </Card>

}

export default ProductCard