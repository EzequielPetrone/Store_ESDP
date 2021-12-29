import { getCartArray, getQtyTotal } from "../assets/datos";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = ({ updateCounter }) => {

    const [cartLista, setCartLista] = useState([]);
    const [monto, setMonto] = useState(0);

    useEffect(() => {
        const getMonto = () => {
            let suma = 0;
            for (const i of cartLista) {
                suma += i.qty * i.precio;
            }
            return suma;
        };
        setMonto(getMonto());
    }, [cartLista]);

    const updateCart = () => {
        setCartLista(getCartArray());
        updateCounter(getQtyTotal());
    };

    useEffect(() => {
        setCartLista(getCartArray());
        updateCounter(getQtyTotal());
    }, [updateCounter]);

    return (
        <section className="m-2 w-full flex flex-col items-center justify-between">
            <div className="w-full flex flex-col items-center m-2">
                <h1 className="text-lg"> Tu Carrito </h1>
                {cartLista.map((e) => (
                    <CartItem key={e.id} item={e} updateCart={updateCart} />
                ))}
                <h2 className=" text-xl m-3"> Monto Total: $ {monto} </h2>
            </div>
            <div className="flex flex-col sm:flex-row justify-items-center">
                <button className='bg-color-1 text-white block px-3 py-2 rounded-md text-base font-medium m-2 sm:m-4'>
                    <Link to='/shop/all'>SEGUIR COMPRANDO</Link>
                </button>
                <button className='bg-color-1 text-white block px-3 py-2 rounded-md text-base font-medium m-2 sm:m-4'>
                    <Link to='/cart/checkout'>FINALIZAR COMPRA</Link>
                </button>
            </div>
        </section>
    )
};

export default Cart;
