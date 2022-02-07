import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { SearchIcon } from '@heroicons/react/outline'
import ItemList from './ItemList';
import Spinner from '../Utilities/Spinner';

const ItemListContainer = () => {

    const { category } = useParams()
    const [productos, setProductos] = useState([])
    const [productosF, setProductosF] = useState([])
    const [flagRender, setFlagRender] = useState(false)

    useEffect(() => {
        setFlagRender(false)
        const obtengoProductos = async () => {
            try {
                const prodCol = collection(getFirestore(), "productos")
                const queryDoc = category ? query(prodCol, where("categoria", "==", category)) : prodCol
                const querySnapshot = await getDocs(queryDoc);
                const arrayProd = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setProductos(arrayProd)
                setProductosF(arrayProd)
            } catch (e) {
                console.error("Error al querer acceder a la collection productos: ", e);
            }
            setFlagRender(true)
        }
        obtengoProductos()
    }, [category])

    const filtraProductos = (e) => {
        if (e.target.value.length > 0) {
            setProductosF(productos.filter(p => p.descripcion.toLowerCase().includes(e.target.value.toLowerCase())))
        } else {
            setProductosF(productos)
        }
    }

    return (
        <section className="my-2 w-full sm:w-11/12 lg:w-10/12 2xl:w-9/12 flex justify-center">
            {!flagRender ?
                <Spinner leyenda='Cargando productos' />
                :
                <div className='flex flex-col text-center w-full'>
                    {productos.length > 0 &&
                        <div className='flex justify-center'>
                            <input
                                className='w-2/3 2xl:w-1/2 border-b-2 mt-8 mb-6 p-2 focus:border-transparent outline-gray-500 placeholder-gray-500 border-gray-500 relative left-5'
                                placeholder='FILTRAR'
                                onChange={filtraProductos}
                            />
                            <SearchIcon className='w-8 text-gray-500 relative right-5 top-1' />
                        </div>
                    }
                    {productosF.length > 0 ?
                        <ItemList productos={productosF} /> :
                        <div className='text-xl md:text-2xl text-color-1 m-8'>No hay items para mostrar!</div>}
                </div>
            }
        </section>
    )
}

export default ItemListContainer