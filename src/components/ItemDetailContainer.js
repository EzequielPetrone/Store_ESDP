import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react';
import { useParams, Navigate } from "react-router-dom"
import { getProdbyId } from '../assets/datos'

const ItemDetailContainer = ({ updateCounter }) => {

    const { idprod } = useParams()

    const Spinner = () => {
        return (
            <div className='flex justify-center items-center p-2 md:p-6 gap-2 md:gap-4'>
                <div style={{ borderTopColor: 'transparent' }} className="border-color-1 animate-spin w-6 h-6 md:w-10 md:h-10 border-2 md:border-4 rounded-full" role="status"></div>
                <span className='text-color-1 text-lg md:text-2xl'>Buscando producto...</span>
            </div>
        )
    }
    const [result, setResult] = useState(<Spinner/>)

    useEffect(() => {
        const obtengoProd = async () => {
            let prod = await getProdbyId(idprod)
            setResult(prod ? <ItemDetail prod={prod} updateCounter={updateCounter} /> : <Navigate to='/producto' />)
        }
        obtengoProd()
    }, [idprod, updateCounter])

    return result
}

export default ItemDetailContainer