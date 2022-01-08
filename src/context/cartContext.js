import { createContext, useContext, useState, useEffect } from 'react'
import { useLocalStorage } from '../assets/Hooks'

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

export function CartContextProvider({ children }) {

    const [cart, setCart] = useLocalStorage('ESDP_CART_KEY', [])
    // const [cart, setCart] = useState([])
    const [cartMonto, setCartMonto] = useState(0)
    const [cartContador, setContador] = useState(0)

    useEffect(() => {
        let sumaContador = 0
        let sumaMonto = 0
        for (const item of cart) {
            sumaContador += item.qty
            sumaMonto += item.qty * item.precio
        }
        setContador(sumaContador)
        setCartMonto(sumaMonto)
    }, [cart])

    function addToCart(item) {
        let arrayAux = [...cart]
        if (arrayAux.some(e => e.id === item.id)) {
            arrayAux.find(e => e.id === item.id).qty += item.qty
            setCart(arrayAux)
        } else {
            setCart([...cart, item])
        }
    }

    const deleteFromCart = (id) => {
        const arrayAux = cart.filter(prod => prod.id !== id);
        setCart([...arrayAux]);
    }

    const getQtyById = (id) => {
        let elemento = cart.find(e => e.id === id)
        return elemento ? elemento.qty : 0
    }

    return (
        <CartContext.Provider value={{ cart, cartContador, cartMonto, addToCart, deleteFromCart, getQtyById }}>
            {children}
        </CartContext.Provider>
    )
}