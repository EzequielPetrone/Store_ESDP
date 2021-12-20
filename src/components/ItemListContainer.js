// import { useState, useEffect } from 'react';
import Item from "./Item"
import productos from "../assets/datos"

const ItemListContainer = ({updateCounter}) => {
    return (
        <>
            <div className="flex flex-col xl:flex-row items-center justify-center gap-y-6 p-6 gap-x-8">
                {productos.map(p => 
                    <Item key={p.id} descripcion={p.descripcion} stock={p.stock} updateCounter={updateCounter}/>
                )}
            </div>
        </>
    )
}

export default ItemListContainer