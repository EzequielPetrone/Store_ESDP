import { useDivisaContext } from '../../context/divisaContext'

const OrderDetailItem = ({ data }) => {

    const { divisa, customRound } = useDivisaContext()

    return (
        <div className='grid grid-cols-11 justify-center items-center border-solid border-gray-200 border-2 shadow-lg rounded-xl text-center w-full'>
            <div className='font-medium col-span-4 p-2'>
                {data.descripcion}
            </div>
            <div className="flex justify-center col-span-3 m-1 h-16 sm:h-20 xl:h-24">
                <img className="h-full rounded-lg" src={data.imgUrl} alt={data.descripcion} />
            </div>
            <div className='col-span-4'>
                <div className="p-1">
                    {divisa.shortcut} {customRound(data.precio)}  x  {data.qty}
                </div>
                <div className="font-medium p-1">
                    {divisa.shortcut} {customRound(data.precio * data.qty)}
                </div>
            </div>
        </div>
    )
}

export default OrderDetailItem;
