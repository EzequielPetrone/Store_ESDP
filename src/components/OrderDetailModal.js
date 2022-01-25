import Modal from '../assets/Modal'
import { useCartContext } from '../context/cartContext'
import { useDivisaContext } from '../context/divisaContext'

const OrderDetailModal = ({ setModalIsOpen }) => {

    const { cart } = useCartContext()
    const { divisa, customRound } = useDivisaContext()

    return (
        <Modal setModalIsOpen={setModalIsOpen}>
            <div className=" bg-white max-w-full flex flex-col gap-2 items-center rounded-md p-4 overflow-y-auto">
                {cart.map((e) => (
                    <div key={e.id} className="max-w-full flex items-center shadow-lg rounded-xl ">
                        <div className='w-40 p-2 text-sm text-center'>
                            {e.descripcion}
                        </div>
                        <div className=" w-20 p-2 h-16 flex justify-center">
                            <img className="h-full rounded-lg" src={e.imgUrl} alt={e.descripcion} />
                        </div>
                        <div className='w-40 p-2 text-center'>
                            <div className=" text-xs p-2">
                                UNI {divisa.shortcut} {customRound(e.precio)}
                            </div>
                            <div className=" text-xs p-2">
                                QTY {e.qty}
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </Modal >
    )
}

export default OrderDetailModal
