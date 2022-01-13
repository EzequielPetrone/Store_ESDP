import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react';
import { useParams, Navigate } from "react-router-dom"
import { getProdbyId } from '../assets/datos'
import Spinner from './Spinner';

const ItemDetailContainer = () => {

    const { idprod } = useParams()
    const [result, setResult] = useState(<Spinner />)

    useEffect(() => {
        const obtengoProd = async () => {
            const prod = await getProdbyId(idprod)
            setResult(prod ? <ItemDetail prod={prod} /> : <Navigate to='/shop/all' />)
        }
        obtengoProd()
    }, [idprod])

    return (
        <section className="m-2 w-full place-self-center flex justify-center">
            {result}
        </section>
    )
}

export default ItemDetailContainer