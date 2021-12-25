import { getCartArray,getQtyTotal } from '../assets/datos';
import CartItem from './CartItem'
import { useState , useEffect} from 'react'

const Cart = ({updateCounter}) => {
    const [cartLista, setCartLista] = useState([])
    const [monto, setMonto] = useState(0)

    const updateCart = () => {
        setCartLista(getCartArray())
        updateCounter(getQtyTotal())
    }

    const getMonto = () => {
        let suma = 0
        for (const i of cartLista) {
            suma += (i.qty * i.precio)
        }
        return suma
    }

    useEffect(() => {
        setMonto(getMonto())
    }, [cartLista])

    useEffect(() => {
        updateCart()
    }, [])

    return (
        <div>
           <h1>Carrito</h1> 
           {cartLista.map(e => <CartItem key={e.id} item={e} updateCart={updateCart}/>)}
           <h2>Monto Total: $ {monto}</h2>
        </div>
    )
}

export default Cart
