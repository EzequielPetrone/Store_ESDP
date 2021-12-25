// import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams , Navigate} from "react-router-dom"
import {getProdbyId} from '../assets/datos'

const ItemDetailContainer = ({updateCounter}) => {
    const {idprod} = useParams()
    const prod = getProdbyId(idprod)
    if (prod) {
        return <ItemDetail prod={prod} updateCounter={updateCounter}/>
    } else {
        return <Navigate to='/producto'/>
    }
}

export default ItemDetailContainer