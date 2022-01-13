import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { getProductos } from "../assets/datos"
import ItemList from './ItemList';
import Spinner from './Spinner';

const ItemListContainer = () => {

    const { category } = useParams()
    const [productos, setProductos] = useState([])
    const [flagRender, setFlagRender] = useState(false)

    useEffect(() => {
        setFlagRender(false)
        const obtengoProductos = async () => {
            setProductos(await getProductos(category))
            setFlagRender(true)
        }
        obtengoProductos();
    }, [category])

    return (
        <section className="my-2 w-full place-self-center flex justify-center">
            {!flagRender ? <Spinner /> :
                (productos && productos.length > 0 ?
                    <ItemList productos={productos} /> :
                    <div className='text-xl md:text-2xl text-color-1'>No hay items para mostrar!</div>)
            }
        </section>
    )
}

export default ItemListContainer