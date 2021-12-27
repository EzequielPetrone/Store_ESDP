import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { getProductos, mapCategory } from "../assets/datos"
import Item from "./Item"
import Spinner from './Spinner';

const ItemList = () => {

    const { category } = useParams()
    const [result, setResult] = useState(null)
    // const [result, setResult] = useState(<Spinner />)
    
    useEffect(() => {
        console.log('test1');
        setResult(<Spinner />)
        const obtengoProductos = async () => {
            console.log('test2');
            const productos = await getProductos(mapCategory(category));
            console.log('test3');
            const renderItemList = () => {
                console.log('test4');
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
            console.log('test5');
        }
        obtengoProductos();
        console.log('test6');
    }, [category])

    return (
        <section className="my-4">
            {result}
        </section>
    )
}

export default ItemList