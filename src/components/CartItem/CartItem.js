import "./CartItem.css";
import "animate.css";
import { useContext } from "react"
import Basura from "../CartItem/Assets/trash.svg";
import CartContext from "../../context/CartContext";

const CartItem = ({ img, name, price, quantity, id }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <div className="cartItem animate__animated animate__slideInRight">
            <div className="informacion">
                <img src={img} alt={name} width={60} height={60} />
                <p className="title is-6 has-text-dark mt-4">{name}</p>
                <p className="title is-6 has-text-dark mt-4">PRECIO: ${price}</p>
                <p className="title is-6 has-text-dark mt-4">CANTIDAD: {quantity}u.</p>
                <button onClick={() => removeItem(id)} className="button has-text-black is-rounded is-danger">
                    <img src={Basura} alt="eliminar-producto" />
                </button>
            </div>
        </div>
    );
};

export default CartItem;