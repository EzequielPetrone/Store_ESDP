import { Link } from 'react-router-dom';
import { useDivisaContext } from '../../context/divisaContext';
import { memo } from 'react';

const Item = memo(({ prod }) => {

    const { id, descripcion, precio, imgUrl, stock } = prod;
    const { divisa, customRound } = useDivisaContext()

    return (
        <Link className='h-full' to={'/product/' + id}>
            <div className="h-full w-40 sm:w-52 flex flex-col justify-between shadow-lg shadow-gray-700 p-2 rounded-xl font-medium bg-black text-color-2 hover:scale-105 duration-500">
                <div className="text-center text-sm sm:text-md md:text-lg pb-2">
                    {descripcion}
                </div>
                <div className="flex items-center justify-center h-44 sm:h-48">
                    <img className=" h-fit max-h-44 sm:max-h-48 rounded-lg" src={imgUrl} alt={descripcion} />
                </div>
                <div className=" text-sm sm:text-md md:text-lg pt-2 text-center">
                    {stock <= 0 ? 'SIN STOCK!' : `${divisa.shortcut} ${customRound(precio)}`}
                </div>
            </div>
        </Link>
    )
})

export default Item