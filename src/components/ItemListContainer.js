import { useState, useEffect } from 'react';

const ItemList = ({descripcion, stock, sumCounter, resCounter}) => {

    const [stockItem, setStockItem] = useState(stock)
    const [minusBtnDisabled, setMinusBtnDisabled] = useState(null)
    const [plusBtnDisabled, setPlusBtnDisabled] = useState(null)

    useEffect(() => {
        setMinusBtnDisabled(stockItem >= stock ? true : false)
        setPlusBtnDisabled(stockItem <= 0 ? true : false)
    }, [stockItem])

    const minusBtn = () => {
        
        if (stockItem<stock) {
            resCounter()
            setStockItem(stockItem + 1)
        }
    }
    
    const plusBtn = () => {
        
        if (stockItem>0) {
            sumCounter()
            setStockItem(stockItem - 1)
        }
    }

    return (
        <div className="shadow-lg p-2 rounded-xl">
            <div className="h-12 center p-5 w-fit flex items-center rounded-lg shadow-lg bg-color-2 text-xl sm:text-2xl">
                {descripcion}
            </div>
            <div className="flex justify-between items-center mt-2">
                <button className="disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:hover:text-color-1 disabled:hover:border-color-1 bg-transparent hover:bg-color-1 text-color-1 font-semibold hover:text-white w-9 h-9 border border-color-1 hover:border-transparent rounded-lg"
                    disabled={minusBtnDisabled} onClick={minusBtn}>
                    - 
                </button>
                <div>Stock inicial: {stock} <br/> Stock actual: {stockItem}</div>
                <button className="disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:hover:text-color-1 disabled:hover:border-color-1 bg-transparent hover:bg-color-1 text-color-1 font-semibold hover:text-white w-9 h-9 border border-color-1 hover:border-transparent rounded-lg"
                    disabled={plusBtnDisabled} onClick={plusBtn}>
                    + 
                </button>
            </div>
        </div>
    )
}

const ItemListContainer = ({arrayProd, sumCounter , resCounter}) => {
    return (
        <>
            <div className="flex flex-col xl:flex-row items-center justify-center gap-y-6 p-6 gap-x-8">
                {arrayProd.map(p => {
                    return (
                        <ItemList key={p.id} descripcion={p.descripcion}
                            stock={p.stock} sumCounter={sumCounter} resCounter={resCounter}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default ItemListContainer
