// import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'

const CartWidget = () => {
    return (
        <button type="button"
            className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
            <ShoppingCartIcon className="h-10 sm:h-12 p-1" aria-hidden="true" />
        </button>
    )
}

export default CartWidget
