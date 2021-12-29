import { getQtyById, setQtyById, getQtyTotal } from "../assets/datos";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ prod, updateCounter }) => {
    const navigate = useNavigate()

    const { id, descripcion, precio, imgUrl, stock } = prod;
    const [minusBtnDisabled, setMinusBtnDisabled] = useState(null);
    const [plusBtnDisabled, setPlusBtnDisabled] = useState(null);
    const [cartBtnDisabled, setCartBtnDisabled] = useState(null);
    const [qty, setQty] = useState(0);
    const [qtyAdded, setQtyAdded] = useState(getQtyById(id));

    useEffect(() => {
        setMinusBtnDisabled(qty <= 0 ? true : false);
        setPlusBtnDisabled(qty + qtyAdded >= stock ? true : false);
        setCartBtnDisabled(qty + qtyAdded > stock || qty <= 0 ? true : false);
    }, [qty, qtyAdded, stock]);

    const minusBtn = () => {
        if (qty > 0) {
            setQty(qty - 1);
        }
    };

    const plusBtn = () => {
        if (qty < stock) {
            setQty(qty + 1);
        }
    };

    const addToCart = () => {
        setQtyAdded(qty + qtyAdded);
        setQtyById(id, qty + qtyAdded);
        setQty(0);
        updateCounter(getQtyTotal());
    };

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
                <div className="flex justify-between items-center m-2">
                    <button
                        className="disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:hover:text-color-1 disabled:hover:border-color-1 bg-transparent hover:bg-color-1 text-color-1 font-semibold hover:text-white w-9 h-9 border border-color-1 hover:border-transparent rounded-lg"
                        disabled={minusBtnDisabled}
                        onClick={minusBtn}
                    >
                        -
                    </button>
                    <div className="text-lg">{qty}</div>
                    <button
                        className="disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:hover:text-color-1 disabled:hover:border-color-1 bg-transparent hover:bg-color-1 text-color-1 font-semibold hover:text-white w-9 h-9 border border-color-1 hover:border-transparent rounded-lg"
                        disabled={plusBtnDisabled}
                        onClick={plusBtn}
                    >
                        +
                    </button>
                </div>
                <div className=" text-center mt-2">
                    <button isabled={cartBtnDisabled}
                        className='bg-color-1 text-white px-3 py-2 rounded-md text-base font-medium m-2 sm:m-3'
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