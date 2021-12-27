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
        <section className="my-4">
            <h1> Carrito </h1>
            {cartLista.map((e) => (
                <CartItem key={e.id} item={e} updateCart={updateCart} />
            ))}
            <h2> Monto Total: $ {monto} </h2>
            <button><Link to='/shop/all'>Seguir comprando</Link></button>
        </section>
    )
};

export default Cart;
