import Modal from '../Utilities/Modal'
import { useCartContext } from '../../context/cartContext'
import OrderDetailItem from './OrderDetailItem'

const OrderDetailModal = ({ setModalIsOpen }) => {

    const { cart } = useCartContext()

    // Modal que se abre al presionar VER DETALLES de la orden. Muestra el carrito en tiempo real.

    return (
        <Modal setModalIsOpen={setModalIsOpen}>
            <div className=" bg-white  flex flex-col gap-2 items-center rounded-md p-4 overflow-y-auto">
                {cart.map((e) => (
                    <OrderDetailItem key={e.id} data={e} />
                ))}
            </div >
        </Modal >
    )
}

export default OrderDetailModal
