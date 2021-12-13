// import React from 'react'

const productos = [
    { greeting: 'Hola, soy el producto 1' },
    { greeting: 'Hola, soy el producto 2' },
    { greeting: 'Hola, soy el producto 3' }
  ]

const ItemListContainer = () => {
    return (
        <section className="my-6">
            <div className="flex flex-col items-center gap-6 p-6">
                {productos.map(x => {
                    return (
                        <div className="h-12 center p-5 w-fit flex items-center rounded-lg shadow-lg bg-color-2">
                            {x.greeting}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ItemListContainer
