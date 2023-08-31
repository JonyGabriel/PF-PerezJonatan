import "./Item.css";
import "animate.css"
import { Link } from "react-router-dom";

const Item = ({ id, img, name, price, description }) => {
    
    return (

        <article id="productos" className="animate__animated animate__fadeInLeftBig">
                <header>
                    <p className="title is-6 has-text-dark m-2">
                        {name}
                    </p>
                </header>
                <figure>
                    <img src={img} alt={name} width={150} height={150}/>
                </figure>
                <section className="title is-6 has-text-dark">
                    <p className="m-2">PRECIO : ${price}</p>
                    <p className="m-2">DESCRIPCION : {description}</p>
                </section>
                <footer>
                    <Link to={`/item/${id}`} className="button has-text-black is-rounded is-danger is-outlined" id="detalles">VER DETALLES</Link>
                </footer>
        </article>

    )
}

export default Item;