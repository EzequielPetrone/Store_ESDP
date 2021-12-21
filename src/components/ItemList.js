import { useState, useEffect } from 'react';
import getProductos from "../assets/datos"
import Item from "./Item"

const ItemList = ({updateCounter}) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const obtengoProductos = async () => setProductos(await getProductos());
        obtengoProductos();
    }, [])

    return (
        <div className="flex flex-col xl:flex-row items-center justify-center gap-y-6 p-6 gap-x-8">
            {productos.map(p => 
                <Item key={p.id} descripcion={p.descripcion} stock={p.stock} updateCounter={updateCounter}/>
            )}
        </div>
    )
}

export default ItemList