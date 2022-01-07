import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from '../context/cartContext'

const Cart = () => {

    const { cart, getMonto } = useCartContext()
    const [checkoutBtnDisabled, setCheckoutBtnDisabled] = useState();
    const [monto, setMonto] = useState()

    useEffect(() => {
        setCheckoutBtnDisabled(cart.length === 0 ? true : false);
        setMonto(getMonto())
    }, [cart, getMonto]);

    return (
        <section className="m-2 w-full flex flex-col items-center justify-between">
            <div className="w-full flex flex-col items-center m-2">
                <h1 className="text-lg"> Tu Carrito </h1>
                {cart.map((e) => (
                    <CartItem key={e.id} item={e} />
                ))}
                <h2 className=" text-xl m-3"> Monto Total: $ {monto} </h2>
            </div>
            <div className="flex flex-col sm:flex-row justify-items-center">
                <button className='bg-color-1 text-white block px-3 py-2 rounded-md text-base font-medium m-2 sm:m-4'>
                    <Link to='/shop/all'>SEGUIR COMPRANDO</Link>
                </button>
                <button disabled={checkoutBtnDisabled}
                    className='bg-color-1 text-white block px-3 py-2 rounded-md text-base font-medium m-2 sm:m-4 disabled:bg-gray-300'>
                    <Link to='/cart/checkout' className={checkoutBtnDisabled ? "pointer-events-none" : ''}>
                        FINALIZAR COMPRA
                    </Link>
                </button>
            </div>
        </section>
    )
};

export default Cart;
