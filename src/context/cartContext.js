import { createContext, useContext, useState } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])

    function addToCart(item) {
        let list = [...cart]
        if (list.some(e => e.id === item.id)) {
            list.find(e => e.id === item.id).qty += item.qty
            setCart(list)
        } else {
            setCart([...cart, item])
        }
    }

    const deleteFromCart = (id) => {
        const arrayAux = cart.filter(prod => prod.id !== id);
        setCart([...arrayAux]);
    };

    const getCartQty = () => {
        let suma = 0
        for (const p of cart) {
            suma += p.qty
        }
        return suma
    }

    const getMonto = () => {
        let suma = 0;
        for (const i of cart) {
            suma += i.qty * i.precio;
        }
        return suma;
    };

    const getQtyById = (id) => {
        let elemento = cart.find(e => e.id === id)
        return elemento ? elemento.qty : 0
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, deleteFromCart, getCartQty, getMonto, getQtyById }}>
            {children}
        </CartContext.Provider>
    )
}