import { useState, useEffect } from 'react';
import { getProductos } from "../assets/datos"
import Item from "./Item"

const ItemList = () => {

    // const [productos, setProductos] = useState([])

    const Spinner = () => {
        return (
            <div className='flex justify-center items-center p-2 md:p-6 gap-2 md:gap-4'>
                <div style={{ borderTopColor: 'transparent' }} className="border-color-1 animate-spin w-6 h-6 md:w-10 md:h-10 border-2 md:border-4 rounded-full" role="status"></div>
                <span className='text-color-1 text-lg md:text-2xl'>Cargando productos...</span>
            </div>
        )
    }
    const [result, setResult] = useState(<Spinner/>)
    // const [displayList, setDisplayList] = useState('none')

    useEffect(() => {
        const obtengoProductos = async () => {
            const productos = await getProductos();
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
    }, [])

    return result
}

export default ItemList