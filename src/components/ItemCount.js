const ItemCount = ({ qty, setQty, qtyAdded, stock }) => {

    return (
        <div className="flex justify-between items-center my-2 mx-4">
            <button
                className="disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:hover:text-color-1 disabled:hover:border-color-1 bg-transparent hover:bg-color-1 text-color-1 font-semibold hover:text-white w-9 h-9 border border-color-1 hover:border-transparent rounded-lg"
                disabled={qty <= 0 ? true : false}
                onClick={() => setQty(qty - 1)}
            >
                -
            </button>
            <div className="text-lg">{qty}</div>
            <button
                className="disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:hover:text-color-1 disabled:hover:border-color-1 bg-transparent hover:bg-color-1 text-color-1 font-semibold hover:text-white w-9 h-9 border border-color-1 hover:border-transparent rounded-lg"
                disabled={qty + qtyAdded >= stock ? true : false}
                onClick={() => setQty(qty + 1)}
            >
                +
            </button>
        </div>
    )
}

export default ItemCount
