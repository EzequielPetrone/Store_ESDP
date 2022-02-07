import { useNavigate } from "react-router-dom";

const PageNotFound = () => {

    const navigate = useNavigate()

    return (
        <section className="m-4 flex flex-col self-center items-center mx-auto">
            <div className='text-xl md:text-2xl text-color-1  m-4 sm:m-6'>PÁGINA NO ENCONTRADA!</div>
            <button onClick={() => navigate(-1)}
                className='bg-color-1 hover:bg-color-3 text-white font-medium block px-3 py-2 rounded-md text-base m-4 sm:m-6'>
                VOLVER
            </button>
        </section>
    )
}

export default PageNotFound
