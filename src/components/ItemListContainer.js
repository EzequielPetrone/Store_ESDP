import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { getProductos, mapCategory } from "../assets/datos"
import Item from "./Item"
import Spinner from './Spinner';

const ItemListContainer = () => {

    const { category } = useParams()
    const [result, setResult] = useState(null)
    
    useEffect(() => {
        setResult(<Spinner />)
        const obtengoProductos = async () => {
            const productos = await getProductos(mapCategory(category));
            const renderItemList = () => {
                if (!productos || productos.length === 0) {
                    return <div className='text-xl md:text-2xl text-color-1'>No hay items para mostrar!</div>
                } else {
                    return (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center p-2 md:p-6 gap-6">
                            {productos.map(p =>
                                <Item prod={p} key={p.id} />
                            )}
                        </div>
                    )
                }
            }
            setResult(renderItemList())
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