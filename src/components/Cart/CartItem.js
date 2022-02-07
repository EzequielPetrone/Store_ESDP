import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/outline'
import { useCartContext } from '../../context/cartContext';
import { useDivisaContext } from '../../context/divisaContext';
import { memo } from 'react';

const CartItem = memo(({ item }) => {

    const { id, descripcion, precio, imgUrl, qty } = item
    const { deleteFromCart } = useCartContext()
    const { divisa, customRound } = useDivisaContext()

    return (
        <div className="flex border-solid border-gray-200 border-2 shadow-lg rounded-xl m-2 w-full sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
            <div className="text-center w-9/12 sm:w-10/12">
                <Link to={'/product/' + id}>
                    <div className='grid grid-cols-2 sm:grid-cols-11 justify-center items-center'>
                        <div className='font-medium col-span-full sm:col-span-4 p-1'>
                            {descripcion}
                        </div>
                        <div className="flex justify-center col-span-1 sm:col-span-3 m-1 h-16 sm:h-20 xl:h-24">
                            <img className="h-full rounded-lg" src={imgUrl} alt={descripcion} />
                        </div>
                        <div className='col-span-1 sm:col-span-4'>
                            <div className="p-1">
                                {divisa.shortcut} {customRound(precio)}  x  {qty}
                            </div>
                            <div className="font-medium p-1">
                                {divisa.shortcut} {customRound(precio * qty)}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='w-3/12 sm:w-2/12 border-l-2 flex justify-center'>
                <button onClick={() => deleteFromCart(id)}>
                    <TrashIcon className="h-10 sm:h-12 p-1 text-color-1 hover:scale-105" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
})

export default CartItem
