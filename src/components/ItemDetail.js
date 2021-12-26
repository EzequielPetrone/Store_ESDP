import { getQtyById, setQtyById, getQtyTotal } from "../assets/datos";
import { useState, useEffect } from "react";

const ItemDetail = ({ prod, updateCounter }) => {
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
            <div className="w-64">
                <div className="text-center text-lg pb-2">{descripcion}</div>
                <div className="flex justify-center h-56">
                    <img className="h-full rounded-lg" src={imgUrl} alt={descripcion} />
                </div>
                <div className=" text-lg pt-2">$ {precio}</div>
            </div>
            <div className="w-64">
                <div className="text-sm">
                    En Stock: {stock} <br /> En carrito: {qtyAdded}
                </div>
                <div className="flex justify-between items-center m-2">
                    <button
                        className="disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:hover:text-color-1 disabled:hover:border-color-1 bg-transparent hover:bg-color-1 text-color-1 font-semibold hover:text-white w-9 h-9 border border-color-1 hover:border-transparent rounded-lg"
                        disabled={minusBtnDisabled}
                        onClick={minusBtn}
                    >
                        -
                    </button>
                    <div>{qty}</div>
                    <button
                        className="disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:hover:text-color-1 disabled:hover:border-color-1 bg-transparent hover:bg-color-1 text-color-1 font-semibold hover:text-white w-9 h-9 border border-color-1 hover:border-transparent rounded-lg"
                        disabled={plusBtnDisabled}
                        onClick={plusBtn}
                    >
                        +
                    </button>
                </div>

                <div>
                    <button
                        className="bg-gray-900 text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        disabled={cartBtnDisabled}
                        onClick={addToCart}
                    >
                        Agregar carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
