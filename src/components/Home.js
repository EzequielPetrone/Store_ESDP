import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import portada from '../images/portada-1_.jpg'

const Home = () => {

    const navigate = useNavigate()
    const [auxHeight, setAuxHeight] = useState(0);

    useEffect(() => {
        function handleResize() {
            setAuxHeight(window.innerHeight - (document.querySelector('header').offsetHeight + document.querySelector('footer').offsetHeight))
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <section className="w-full relative flex flex-col items-center justify-between overflow-x-hidden bg-black">
            <img
                src={portada}
                alt="Portada Síndrome de Peter"
                style={{ height: auxHeight }}
                className=" max-w-none"
            />
            <div className="text-white font-bold absolute left-0 p-4 sm:p-6 lg:p-8 flex flex-col text-2xl sm:text-4xl lg:text-6xl">
                <span className='px-2 pb-1 mix-blend-difference backdrop-brightness-75'>
                    El<br />Síndrome<br />De<br />Peter
                </span>
                <span
                    className="px-2 pb-1 text-white bg-color-1 cursor-pointer"
                    onClick={() => navigate('/shop-all')}
                >
                    SHOP!
                </span>
            </div>
        </section >
    )
}

export default Home