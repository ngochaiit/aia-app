import { FC } from "react";
import './QuantityButton.scss'

interface IQuantityButton {
    value: number;
    onChange?: (count: number) => void
}
const QuantityButton:FC<IQuantityButton> = ({value, onChange}) => {

    const incrementItem = () => {
        onChange?.(value + 1)
    }

    const decrementItem = () => {
        if (value === 0) {
            return null;
        }
        onChange?.(value - 1)
    }
    return <div className="btn-quantity-container">
        <button className="btn-quantity" onClick={decrementItem}>-</button>
         <span>{value}</span> 
        <button className="btn-quantity" onClick={incrementItem}>+</button>
    </div>
}

export default QuantityButton;