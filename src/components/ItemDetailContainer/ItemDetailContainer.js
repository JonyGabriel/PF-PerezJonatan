import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

export const ItemDetailContainer = () => {
    const [producto, setProductos] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productosAdapted = { id: response.id, ...data }
                setProductos(productosAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (

        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer;