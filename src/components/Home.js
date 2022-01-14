import { Link } from "react-router-dom";

const Home = () => {

    return (
        <section className=" bg-top bg-cover w-full flex flex-col items-center justify-between">
            <div className="branding-row flex flex-col items-center gap-4 p-5 sm:p-7 lg:p-9">
                <h1 className='text-color-1 font-bold text-2xl sm:text-4xl md:text-5xl'>El Síndrome De Peter</h1>
                <h2 className='text-center text-lg sm:text-2xl'>Bienvenido a la tienda e-commerce de tu banda favorita!</h2>
            </div>
            <button className='bg-color-1 text-white block px-3 py-2 rounded-md text-base font-medium m-5 sm:m-7 lg:m-9'>
                <Link to='/shop-all'>COMPRAR!</Link>
            </button>
        </section >
    )
}

export default Home