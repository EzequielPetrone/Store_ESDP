import { useState, useEffect } from 'react';

const Item = ({descripcion, stock, precio, imgUrl, updateCounter}) => {

    const [stockItem, setStockItem] = useState(stock)
    const [minusBtnDisabled, setMinusBtnDisabled] = useState(null)
    const [plusBtnDisabled, setPlusBtnDisabled] = useState(null)

    useEffect(() => {
        setMinusBtnDisabled(stockItem >= stock ? true : false)
        setPlusBtnDisabled(stockItem <= 0 ? true : false)
    }, [stockItem, stock])

    const minusBtn = () => {
        if (stockItem<stock) {
            updateCounter(-1)
            setStockItem(stockItem + 1)
        }
    }
    
    const plusBtn = () => {
        if (stockItem>0) {
            updateCounter(1)
            setStockItem(stockItem - 1)
        }
    }

    return (
        <div className=" w-64 border-solid border-gray-200 border-2 shadow-lg p-2 rounded-xl">
            <div className="text-center text-lg pb-2">
                {descripcion}
            </div>
            <div className="flex justify-center h-56">
                <img  className="h-full rounded-lg" src={imgUrl}/>
            </div>
            <div className=" text-lg pt-2">
                $ {precio}
            </div>
            <div className="flex justify-between items-center mt-2">
                <button className="disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:hover:text-color-1 disabled:hover:border-color-1 bg-transparent hover:bg-color-1 text-color-1 font-semibold hover:text-white w-9 h-9 border border-color-1 hover:border-transparent rounded-lg"
                    disabled={minusBtnDisabled} onClick={minusBtn}>
                    - 
                </button>
                <div className='text-sm'>
                    Stock inicial: {stock} <br/> Stock actual: {stockItem}
                </div>
                <button className="disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:hover:text-color-1 disabled:hover:border-color-1 bg-transparent hover:bg-color-1 text-color-1 font-semibold hover:text-white w-9 h-9 border border-color-1 hover:border-transparent rounded-lg"
                    disabled={plusBtnDisabled} onClick={plusBtn}>
                    + 
                </button>
            </div>
        </div>
    )
}

export default Item
