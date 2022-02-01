import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useCartContext } from '../context/cartContext'
import { useState, useEffect } from "react";
import { useDivisaContext } from "../context/divisaContext";

const Cart = () => {

    const { cart, cartMonto } = useCartContext()
    const { divisa, customRound } = useDivisaContext()
    const [cartEmpty, setCartEmpty] = useState(false)

    useEffect(() => {
        setCartEmpty(cart.length === 0)
    }, [cart])

    return (
        <section className="m-2 w-full flex flex-col items-center justify-between">
            <div className="w-full flex flex-col items-center m-2">
                <h2 className="text-xl font-medium sm:text-2xl m-3 sm:m-5">
                    {!cartEmpty ?
                        `Monto Total: ${divisa.shortcut} ${customRound(cartMonto)}`
                        : `Tu Carrito está vacío!`
                    }
                </h2>
                <div className="w-full flex flex-col items-center">
                    {cart.map((e) => (
                        <CartItem key={e.id} item={e} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-items-center m-2 sm:m-4">
                <button className='bg-color-1 hover:bg-color-3 text-white block px-3 py-2 rounded-md text-base font-medium m-2 sm:m-4'>
                    <Link to='/shop-all'>AGREGAR PRODUCTOS</Link>
                </button>
                <button disabled={cartEmpty}
                    className='bg-color-1 hover:bg-color-3 text-white block px-3 py-2 rounded-md text-base font-medium m-2 sm:m-4 disabled:bg-gray-300'>
                    <Link to='/cart/checkout' className={cartEmpty ? "pointer-events-none" : ''}>
                        FINALIZAR COMPRA
                    </Link>
                </button>
            </div>
        </section>
    )
}

export default Cart;
