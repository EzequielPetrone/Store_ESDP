import { useState, useEffect } from 'react';
import getProductos from "../assets/datos"
import Item from "./Item"

const ItemList = ({updateCounter, hideSpinner}) => {

    const [productos, setProductos] = useState([])
    const [displayList, setDisplayList] = useState('none')

    useEffect(() => {
        const obtengoProductos = async () => {
            setProductos(await getProductos());
            hideSpinner()
            setDisplayList('flex')
        }
        obtengoProductos();
    }, [])

    const renderItemList = ()=>{
        if (productos === null || productos.length === 0) {
            return <div className='text-xl md:text-2xl text-color-1'>No hay items para mostrar!</div>
        } else {
            return productos.map(p => 
                <Item key={p.id} descripcion={p.descripcion} stock={p.stock} updateCounter={updateCounter}/>
            ) 
        }
    }

    return (
        <div style={{display: displayList}} 
            className="flex-col xl:flex-row items-center justify-center gap-y-6 p-2 md:p-6 gap-x-8">
            {renderItemList()}
        </div>
    )
}

export default ItemList