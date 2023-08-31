import "./ItemDetail.css";
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ id, img, name, price, color, stock }) => {
    const [quantityAdded, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const item = {
            id, name, price, img
        }
        addItem(item, quantity)
    }

    return (

        <article id="detalles">
            <header>
                <p className="title is-6 has-text-dark m-2">
                    {name}
                </p>
            </header>
            <figure>
                <img src={img} alt={name} width={250} height={250} id="imagenes" />
            </figure>
            <section className="title is-6 has-text-dark">
                <p className="m-2">PRECIO : ${price}</p>
                <p className="m-2">COLOR : {color}</p>
                <p className="m-2">STOCK DISPONIBLE : {stock}.u </p>
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to="/cart" className="option button has-text-black is-rounded is-danger is-outlined" >IR AL CARRITO</Link>
                    ) : (
                    < ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>

    )
}

export default ItemDetail;