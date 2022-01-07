import { useState, useEffect } from "react";
const ItemCount = ({ qty, setQty, qtyAdded, stock }) => {

    const [minusBtnDisabled, setMinusBtnDisabled] = useState(null);
    const [plusBtnDisabled, setPlusBtnDisabled] = useState(null);

    useEffect(() => {
        setMinusBtnDisabled(qty <= 0 ? true : false);
        setPlusBtnDisabled(qty + qtyAdded >= stock ? true : false);
    }, [qty, qtyAdded, stock]);

    return (
        <div className="flex justify-between items-center m-2">
            <button
                className="disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:hover:text-color-1 disabled:hover:border-color-1 bg-transparent hover:bg-color-1 text-color-1 font-semibold hover:text-white w-9 h-9 border border-color-1 hover:border-transparent rounded-lg"
                disabled={minusBtnDisabled}
                onClick={() => setQty(qty - 1)}
            >
                -
            </button>
            <div className="text-lg">{qty}</div>
            <button
                className="disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:hover:text-color-1 disabled:hover:border-color-1 bg-transparent hover:bg-color-1 text-color-1 font-semibold hover:text-white w-9 h-9 border border-color-1 hover:border-transparent rounded-lg"
                disabled={plusBtnDisabled}
                onClick={() => setQty(qty + 1)}
            >
                +
            </button>
        </div>
    )
}

export default ItemCount
