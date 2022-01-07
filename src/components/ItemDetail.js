import { getQtyById, setQtyById, getQtyTotal } from "../assets/datos";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ prod, updateCounter }) => {
    const navigate = useNavigate()

    const { id, descripcion, precio, imgUrl, stock } = prod;
    const [cartBtnDisabled, setCartBtnDisabled] = useState(null);
    const [qty, setQty] = useState(0);
    const [qtyAdded, setQtyAdded] = useState(getQtyById(id));

    const addToCart = () => {
        setQtyAdded(qty + qtyAdded);
        setQtyById(id, qty + qtyAdded);
        setQty(0);
        updateCounter(getQtyTotal());
    };

    useEffect(() => {
        setCartBtnDisabled( qty === 0 ? true : false);
    }, [qty]);

    return (
        <div className="flex flex-col sm:flex-row items-center w-fit border-solid border-gray-200 border-2 shadow-lg p-2 rounded-xl">
            <div className="w-64 h-full">
                <div className="text-center text-lg pb-2">{descripcion}</div>
                <div className="flex justify-center h-56">
                    <img className="h-full rounded-lg" src={imgUrl} alt={descripcion} />
                </div>
                <div className=" text-center text-lg pt-2">$ {precio}</div>
            </div>
            <div className="w-64 h-5/6 flex justify-between flex-col">
                <div className="text-sm m-4">
                    En Stock: {stock} <br /> En tu Carrito: {qtyAdded}
                </div>

                <ItemCount qty={qty} setQty={setQty} qtyAdded={qtyAdded} stock={stock} />

                <div className=" text-center mt-2">
                    <button disabled={cartBtnDisabled}
                        className='bg-color-1 text-white px-3 py-2 rounded-md text-base font-medium m-2 sm:m-3 disabled:bg-gray-300'
                        onClick={addToCart}>
                        AGREGAR A CARRITO
                    </button>
                </div>
                <button className="m-2 hover:scale-105" onClick={() => navigate(-1)}>VOLVER!</button>
            </div>
        </div>
    );
};

export default ItemDetail;