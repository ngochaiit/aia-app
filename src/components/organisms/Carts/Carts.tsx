import { useContext } from "react";
import CartContext from "../../../context/cart/CartContext";
import { ICartItem } from "../../../context/cart/CartReducer";
import QuantityButton from "../../atoms/QuantityButton/QuantityButton";
import Table from "../../atoms/Table/Table";
import classes from './Carts.module.scss'

const Carts = () => {
    const context = useContext(CartContext);
    const data = context.cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.quantity * item.price
    }))
    const columns = [
        {
            id: 'name',
            title: 'Product Name',
        },
        {
            id: 'quantity',
            title: 'Quantity',
            customRender: (item: ICartItem) => <div className={classes.quantityContainer}><QuantityButton value={item.quantity} /></div>
        },
        {
            id: 'price',
            title: 'Price',
        },
    ]

    const total = data.reduce((a, b) => a + b.price, 0)
    const renderFooter = () => {
        return <tr>
            <td></td>
            <td></td>
            <td>
                <div className={classes.totalContainer}>
                    <span>Total</span><p>${total.toFixed(2)}</p>
                </div>
            </td>
        </tr>
    }
    return <div>
        <Table data={data} columns={columns} renderFooter={renderFooter} />
    </div>
}

export default Carts