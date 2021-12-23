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
            setDisplayList('block')
        }
        obtengoProductos();
    }, [])

    const renderItemList = ()=>{
        if (productos === null || productos.length === 0) {
            return <div className='text-xl md:text-2xl text-color-1'>No hay items para mostrar!</div>
        } else {
            return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center p-2 md:p-6 gap-6">
                {productos.map(p => 
                    <Item key={p.id} descripcion={p.descripcion} precio={p.precio} 
                        imgUrl={p.imgUrl} stock={p.stock} updateCounter={updateCounter}/>
                )}
            </div> 
            )
        }
    }

    return (
        <div style={{display: displayList}}>
            {renderItemList()}
        </div>
    )
}

export default ItemList