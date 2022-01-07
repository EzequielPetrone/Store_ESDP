import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/outline'
import { useCartContext } from '../context/cartContext';

const CartItem = ({ item }) => {

    const { id, descripcion, precio, imgUrl, qty } = item
    const { deleteFromCart } = useCartContext()

    return (
        <div className="flex border-solid border-gray-200 border-2 shadow-lg rounded-xl m-3 w-full md:w-10/12 lg:w-8/12">
            <div className="text-center text-md p-2 w-9/12">
                <Link to={'/producto/' + id}>
                    <div className='flex flex-col sm:flex-row justify-center items-center'>
                        <div className='flex justify-center gap-4 w-full sm:w-4/12'>
                            {descripcion}
                        </div>
                        <div className='flex gap-4 items-center w-full sm:w-8/12 justify-evenly'>
                            <div className="flex justify-center h-20">
                                <img className="h-full rounded-lg" src={imgUrl} alt={descripcion} />
                            </div>
                            <div>
                                <div className=" text-xs p-2">
                                    UNI $ {precio}
                                </div>
                                <div className=" text-xs p-2">
                                    QTY {qty}
                                </div>
                                <div className=" text-xs p-2">
                                    TOT $ {precio * qty}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='w-3/12 flex justify-center'>
                <button onClick={() => deleteFromCart(id)}>
                    <TrashIcon className="h-10 sm:h-12 p-1" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}

export default CartItem
