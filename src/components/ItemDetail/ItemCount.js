const ItemCount = ({ qty, setQty, qtyAdded, stock }) => {

    return (
        <div className="flex justify-around items-center my-2 mx-4">
            <button
                className="disabled:bg-gray-300 disabled:hover:bg-gray-300 bg-color-1 hover:bg-color-3 text-white font-semibold w-9 h-9 rounded-lg"
                disabled={qty <= 0 ? true : false}
                onClick={() => setQty(qty - 1)}
            >
                -
            </button>
            <div className="text-lg font-medium text-center w-8">{qty}</div>
            <button
                className="disabled:bg-gray-300 disabled:hover:bg-gray-300 bg-color-1 hover:bg-color-3 text-white font-semibold w-9 h-9 rounded-lg"
                disabled={qty + qtyAdded >= stock ? true : false}
                onClick={() => setQty(qty + 1)}
            >
                +
            </button>
        </div>
    )
}

export default ItemCount
