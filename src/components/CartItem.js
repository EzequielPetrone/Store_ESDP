import { useNavigate } from 'react-router-dom';
import { deleteItembyId } from '../assets/datos';

const CartItem = ({ updateCart, item }) => {
    const navigate = useNavigate();
    const { id, descripcion, precio, imgUrl, qty } = item

    const deleteItem = () => {
        deleteItembyId(id)
        updateCart()
    }

    return (
        <div className="flex gap-4 border-solid border-gray-200 border-2 shadow-lg p-2 rounded-xl">
            <div className="text-center text-lg pb-2">
                {descripcion}
            </div>
            <div className="flex justify-center h-20">
                <img className="h-full rounded-lg" src={imgUrl} alt={descripcion}
                    onClick={() => navigate('/producto/' + id)}
                />
            </div>
            <div className=" text-lg pt-2">
                UNI $ {precio}
            </div>
            <div className=" text-lg pt-2">
                QTY {qty}
            </div>
            <div className=" text-lg pt-2">
                TOT $ {precio * qty}
            </div>
            <button onClick={deleteItem}>ELIMINAR</button>
        </div>
    )
}

export default CartItem
