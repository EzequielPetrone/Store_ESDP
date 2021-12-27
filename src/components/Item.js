import { Link } from 'react-router-dom';

const Item = ({ prod }) => {

    const { id, descripcion, precio, imgUrl } = prod;

    return (
        <Link to={'/producto/' + id}>
            <div className=" w-64 border-solid border-gray-200 border-2 shadow-lg p-2 rounded-xl">
                <div className="text-center text-lg pb-2">
                    {descripcion}
                </div>
                <div className="flex justify-center h-56">
                    <img className="h-full rounded-lg" src={imgUrl} alt={descripcion} />
                </div>
                <div className=" text-lg pt-2">
                    $ {precio}
                </div>
            </div>
        </Link>
    )
}

export default Item