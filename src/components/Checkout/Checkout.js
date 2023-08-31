import "./Checkout.css"
import Swal from "sweetalert2";
import { useContext, useState, useEffect } from "react";
import { db } from "../../service/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CartContext from "../../context/CartContext";
import { collection, writeBatch } from "firebase/firestore";
import { Timestamp, getDocs, query, where, documentId, addDoc } from "firebase/firestore";

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: totalPrice(),
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productosRef = collection(db, "porductos")
            const productosAddedFromFirestore = await getDocs(query(productosRef, where(documentId(), "in", ids)))
            const { docs } = productosAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productoAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productoAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error("NO HAY STOCK DEL PRODUCTO SELECCIONADO")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const redirectToInicio = () => {
        window.location.href = "/";
    };

    useEffect(() => {
        if (!loading && orderId) {
            Swal.fire({
                title: "PEDIDO REALIZADO",
                text: `EL ID DE SU PEDIDO ES : ${orderId}`,
                icon: "success",
                confirmButtonText: "IR AL INICIO",
                customClass: {
                    confirmButton: "button has-text-black is-rounded is-danger"
                },
                onClose: () => {
                    redirectToInicio();
                }
            });
        } else if (loading) {
            Swal.fire({
                title: "GENERANDO ID DE SU PEDIDO",
                text: "ESPERE MIENTRAS SE GENERA SU ID...",
                allowOutsideClick: false,
                customClass: {
                    confirmButton: "button has-text-black is-rounded is-danger"
                },
                onBeforeOpen: () => {
                    Swal.showLoading();
                }
            });
        }
    }, [loading, orderId]);

    return (
        <div>
            <p className="title is-3 has-text-centered mt-5">CHECKOUT</p>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout

