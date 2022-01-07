import Item from './Item';

const ItemList = ({ productos }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-items-center p-2 md:p-6 gap-6">
            {productos.map(p =>
                <Item prod={p} key={p.id} />
            )}
        </div>
    )
}

export default ItemList
