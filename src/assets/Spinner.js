
const Spinner = () => {
    return (
        <div className='flex items-center p-2 md:p-6 gap-2 md:gap-4'>
            <div style={{ borderTopColor: 'transparent' }} className="border-color-1 animate-spin w-6 h-6 md:w-10 md:h-10 border-2 md:border-4 rounded-full" role="status"></div>
            <span className='text-color-1 text-lg md:text-2xl'>Cargando...</span>
        </div>
    )
}

export default Spinner