import "./CheckoutForm.css";
import { useState } from "react";
import Check from "./Assets/cart-check.svg"

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }

    return (
        
            <div className="formulario">
                <form onSubmit={handleConfirm} className="datos">
                    <p className="title is-5">
                        <label>
                            NOMBRE Y APELLIDO
                            <input type="text" value={name} onChange={({ target }) => setName(target.value)} required/>
                        </label>
                    </p>
                    <p className="title is-5">
                        <label>
                            TELEFONO
                            <input type="text" value={phone} onChange={({ target }) => setPhone(target.value)} required/>
                        </label>
                    </p>
                    <p className="title is-5">
                        <label>
                            EMAIL
                            <input type="email" value={email} onChange={({ target }) => setEmail(target.value)} required/>
                        </label>
                    </p>
                    <div className="boton">
                        <button type="submit" className="button has-text-black is-rounded is-danger is-outlined">
                            <img src={Check} alt="ok-compra" className="mr-2"/>REALIZAR PEDIDO</button>
                    </div>
                </form>
            </div>
        )
}

export default CheckoutForm