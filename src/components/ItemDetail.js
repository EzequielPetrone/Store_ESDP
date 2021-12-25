import { useParams } from "react-router-dom"
import {getProdbyId} from '../assets/datos'

const ItemDetail = () => {

    const {idprod} = useParams()

    const {descripcion, precio} = getProdbyId(idprod)

    return (
        <div>
            Hola soy el producto {descripcion} Precio $ {precio}
        </div>
    )
}

export default ItemDetail
