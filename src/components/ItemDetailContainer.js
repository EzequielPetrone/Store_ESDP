import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react';
import { useParams, Navigate } from "react-router-dom"
import { getProdbyId } from '../assets/datos'
import Spinner from './Spinner';

const ItemDetailContainer = ({ updateCounter }) => {

    const { idprod } = useParams()

    const [result, setResult] = useState(<Spinner/>)

    useEffect(() => {
        const obtengoProd = async () => {
            let prod = await getProdbyId(idprod)
            setResult(prod ? <ItemDetail prod={prod} updateCounter={updateCounter} /> : <Navigate to='/shop/all' />)
        }
        obtengoProd()
    }, [idprod, updateCounter])

    return (
        <section className="m-2 w-full place-self-center flex justify-center">
            {result}
        </section>
    )
}

export default ItemDetailContainer