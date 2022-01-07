import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { getProductos } from "../assets/datos"
import ItemList from './ItemList';
import Spinner from './Spinner';

const ItemListContainer = () => {

    const { category } = useParams()
    const [result, setResult] = useState()

    useEffect(() => {
        setResult(<Spinner />)
        const obtengoProductos = async () => {
            const productos = await getProductos(category);
            setResult(!productos || productos.length === 0 ?
                <div className='text-xl md:text-2xl text-color-1'>No hay items para mostrar!</div>
                : <ItemList productos={productos} />)
        }
        obtengoProductos();
    }, [category])

    return (
        <section className="my-2 w-full place-self-center flex justify-center">
            {result}
        </section>
    )
}

export default ItemListContainer