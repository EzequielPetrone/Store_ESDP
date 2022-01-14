import { Link } from 'react-router-dom';
import { useDivisaContext } from '../context/divisaContext';
import { memo } from 'react';

const Item = memo(({ prod }) => {

    const { id, descripcion, precio, imgUrl } = prod;
    const { divisa, customRound } = useDivisaContext()

    return (
        <Link to={'/producto/' + id}>
            <div className=" w-64 border-solid border-gray-200 border-2 shadow-lg p-2 rounded-xl bg-black text-color-2 hover:scale-105 duration-500">
                <div className="text-center text-lg pb-2">
                    {descripcion}
                </div>
                <div className="flex justify-center h-56">
                    <img className="h-full rounded-lg" src={imgUrl} alt={descripcion} />
                </div>
                <div className=" text-lg pt-2 text-center">
                    {divisa.shortcut} {customRound(precio)}
                </div>
            </div>
        </Link>
    )
})

export default Item