import { ShoppingCartIcon } from '@heroicons/react/outline'

const CartWidget = ({cartCounter}) => {
    return (
        <button type="button"
            className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 
            focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <ShoppingCartIcon className="h-10 sm:h-12 p-1" aria-hidden="true" />
            <span className="absolute right-0 top-0 rounded-full bg-color-1 w-fit h-5 top right px-1 m-0 text-white font-mono text-sm">
                {cartCounter}
            </span>
        </button>
    )
}

export default CartWidget