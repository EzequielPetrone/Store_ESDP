import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCartContext } from "../../context/cartContext";
import { useDivisaContext } from "../../context/divisaContext";
import Modal from "../Utilities/Modal"

const ItemDetail = ({ prod }) => {

    const navigate = useNavigate()

    // Obtengo states y functions útiles de cada context.
    const { addToCart, getQtyById } = useCartContext()
    const { divisa, customRound } = useDivisaContext()

    const { id, descripcion, precio, imgUrl, stock } = prod;

    const [cartBtnDisabled, setCartBtnDisabled] = useState(true);
    const [qty, setQty] = useState(0);
    const [qtyAdded, setQtyAdded] = useState(0);

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const itemToCart = () => {
        addToCart({ ...prod, qty: qty });
        setQty(0);
    };

    // Control de que el botón Agregar a Carrito se habilite sólo si hay alguna qty seleccionada.
    useEffect(() => {
        setCartBtnDisabled(qty === 0 ? true : false);
    }, [qty]);

    // Mantiene siempre actualizado la cantidad de items de ese producto específico ya añadida al carrito
    useEffect(() => {
        setQtyAdded(getQtyById(id));
    }, [getQtyById, id]);

    return (
        <div className="flex portrait:flex-col landscape:flex-row items-center w-fit border-solid border-gray-200 border-2 shadow-lg p-2 rounded-xl">
            <div className="w-64 h-full">
                <div className="text-center font-medium text-xl pb-2">{descripcion}</div>
                <div className="flex justify-center h-56 cursor-pointer" onClick={() => setModalIsOpen(true)}>
                    <img className="h-full rounded-lg" src={imgUrl} alt={descripcion} />
                </div>
                <div className=" text-center font-medium text-xl pt-2">{divisa.shortcut} {customRound(precio)}</div>
            </div>
            <div className="w-64 h-5/6 flex justify-between flex-col">
                <div className="flex justify-around">
                    <div className="text-sm m-4 text-center">
                        En Stock: {stock} <br /> En tu Carrito: {qtyAdded}
                    </div>
                    <button
                        className="m-2 hover:scale-105 text-color-1  font-medium"
                        onClick={() => setModalIsOpen(true)}
                    >
                        VER MÁS!
                    </button>
                </div>
                <ItemCount qty={qty} setQty={setQty} qtyAdded={qtyAdded} stock={stock} />
                <div className=" text-center mt-2">
                    <button
                        disabled={cartBtnDisabled}
                        className='bg-color-1 hover:bg-color-3 text-white px-3 py-2 rounded-md text-base font-medium m-2 sm:m-3 disabled:bg-gray-300'
                        onClick={itemToCart}>
                        AGREGAR A CARRITO
                    </button>
                </div>
                <button className="m-2 text-color-1 font-medium hover:scale-105" onClick={() => navigate(-1)}>VOLVER!</button>
            </div>

            {/* Rendering opcional del Modal de detalle que hace zoom a la imagen del producto */}
            {modalIsOpen &&
                <Modal setModalIsOpen={setModalIsOpen}>
                    <img
                        style={{ maxHeight: '90vh', maxWidth: '90vw' }}
                        className="rounded-lg border-2 border-black"
                        src={imgUrl} alt={descripcion}
                    />
                </Modal>
            }
        </div>
    )
}

export default ItemDetail;