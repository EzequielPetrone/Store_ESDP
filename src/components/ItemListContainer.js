import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from './ItemList';
import Spinner from '../assets/Spinner';

const ItemListContainer = () => {

    const { category } = useParams()
    const [productos, setProductos] = useState([])
    const [flagRender, setFlagRender] = useState(false)

    useEffect(() => {
        setFlagRender(false)
        const obtengoProductos = async () => {
            try {
                const prodCol = collection(getFirestore(), "productos")
                const queryDoc = category ? query(prodCol, where("categoria", "==", category)) : prodCol
                const querySnapshot = await getDocs(queryDoc);
                setProductos(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            } catch (e) {
                console.error("Error al querer acceder a la collection productos: ", e);
            }
            setFlagRender(true)
        }
        obtengoProductos()
    }, [category])

    return (
        <section className="my-2 mx-auto w-full sm:w-11/12 lg:w-10/12 2xl:w-9/12 place-self-center flex justify-center">
            {!flagRender ? <Spinner leyenda='Cargando productos' /> :
                (productos && productos.length > 0 ?
                    <ItemList productos={productos} /> :
                    <div className='text-xl md:text-2xl text-color-1'>No hay items para mostrar!</div>)
            }
        </section>
    )
}

export default ItemListContainer