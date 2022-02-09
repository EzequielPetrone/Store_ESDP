import { createContext, useContext, useState, useEffect } from 'react'
import { useLocalStorage } from '../assets/Hooks'

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

// Context creado para el manejo del Carrito a lo largo de toda la app.
// Disponibiliza además del listado Cart en sí: qty total de items, Monto total, 
// funciones para agregar items, eliminar items, buscar datos específicos, etc.

export const CartContextProvider = ({ children }) => {

    // Uso del LocalStorage para mantener el carrito aunque se refresque la página
    const [cart, setCart] = useLocalStorage('ESDP_CART_KEY', [])
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

    const vaciarCart = () => setCart([])

    return (
        <CartContext.Provider value={{ cart, cartContador, cartMonto, addToCart, deleteFromCart, getQtyById, vaciarCart }}>
            {children}
        </CartContext.Provider>
    )
}