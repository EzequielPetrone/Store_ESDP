import Item from './Item';

const ItemList = ({ productos }) => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-self-center justify-items-center items-center justify-center p-4 md:p-6 gap-4 md:gap-6">
            {productos.map(p =>
                <Item prod={p} key={p.id} />
            )}
        </div>
    )
}

export default ItemList
