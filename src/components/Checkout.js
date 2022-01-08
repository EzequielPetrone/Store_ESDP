import { useNavigate } from "react-router-dom";

const Checkout = () => {

    const navigate = useNavigate()

    return (
        <section className="m-4 flex flex-col self-center items-center mx-auto">
            <div className='text-xl md:text-2xl text-color-1  m-4 sm:m-6'>CHECKOUT!</div>
            <button onClick={() => navigate(-1)}
                className='bg-color-1 text-white block px-3 py-2 rounded-md text-base font-medium m-4 sm:m-6'>
                VOLVER!
            </button>
        </section>
    )
}

export default Checkout
