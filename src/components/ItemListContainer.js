// import React from 'react'

const ItemList = ({value}) => {
    return (
    <div className="h-12 center p-5 w-fit flex items-center rounded-lg shadow-lg bg-color-2">
        {value}
    </div>
    )
}

const ItemListContainer = ({arrayProd}) => {
    return (
        <section className="my-6">
            <div className="flex flex-col items-center gap-6 p-6">
                {arrayProd.map(x => {
                    return (
                        <ItemList key={x.id} value={x.greeting}/>
                    )
                })}
            </div>
        </section>
    )
}

export default ItemListContainer
