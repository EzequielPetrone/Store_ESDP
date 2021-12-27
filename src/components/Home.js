import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="my-4">
            <div className="branding-row flex flex-col items-center gap-4 p-5 sm:p-7 lg:p-9">
                <h1 className='text-color-1 font-bold text-2xl sm:text-4xl md:text-5xl'>El Síndrome De Peter</h1>
                <h2 className='text-center text-lg sm:text-2xl'>Bienvenido a la tienda e-commerce de tu banda favorita!</h2>
            </div>
            <button><Link to='/shop/all'>Conocé nuestro Store!</Link></button>
        </section>
    )
}

export default Home