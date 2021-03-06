import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react';
import { useParams, Navigate } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Spinner from '../Utilities/Spinner';

const ItemDetailContainer = () => {

    const { idprod } = useParams()
    const [result, setResult] = useState(<Spinner leyenda='Cargando producto' />)

    // El siguiente useEffect se ejecuta cada vez que el hook useParams obtiene una nuevo ID de producto.
    // Es la porción de código donde se obtiene los detalles del producto requerido de la BD de Firebase.
    useEffect(() => {
        const obtengoProd = async () => {
            try {
                const docRef = doc(getFirestore(), "productos", idprod);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setResult(<ItemDetail prod={{ id: docSnap.id, ...docSnap.data() }} />)
                } else {
                    setResult(<Navigate to='/shop-all' />)
                }
            } catch (e) {
                console.error("Error al querer acceder a un producto de la collection: ", e);
                setResult(<Navigate to='/shop-all' />)
            }
        }
        obtengoProd()
    }, [idprod])

    return (
        <section className="m-2 w-full place-self-center flex justify-center">
            {result}
        </section>
    )
}

export default ItemDetailContainer