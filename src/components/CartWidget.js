import { ShoppingCartIcon } from '@heroicons/react/outline'
import { useCartContext } from '../context/cartContext'

const CartWidget = () => {

    const { cartContador } = useCartContext()

    return (
        <button type="button"
            className="bg-black text-gray-300 hover:bg-gray-700 hover:text-white p-1 rounded-full  focus:outline-none focus:ring-2 
            focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <ShoppingCartIcon className="h-10 sm:h-12 p-1" aria-hidden="true" />
            {cartContador > 0 &&
                <span className="absolute right-0 top-0 rounded-full bg-color-1 w-fit h-5 top right px-1 m-0 text-white font-mono text-sm">
                    {cartContador}
                </span>
            }
        </button>
    )
}

export default CartWidget