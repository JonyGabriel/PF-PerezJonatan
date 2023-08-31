import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (

        <div >
            <div id="contador">
                <div >
                    <button className="button has-text-black is-rounded is-danger is-outlined" onClick={decrement}> - </button>
                </div>
                <div>
                    <p className="title is-3 has-text-dark">{quantity}</p>
                </div>
                <div>
                    <button className="button has-text-black is-rounded is-danger is-outlined" onClick={increment}> + </button>
                </div>
            </div>
            <div>
                <div id="agregar">
                    <button className="button has-text-black is-rounded is-danger is-outlined" onClick={() => onAdd(quantity)} disabled={!stock}>AGREGAR AL CARRITO</button>
                </div>
            </div >
        </div>

    )
}

export default ItemCount;