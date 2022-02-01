import { useState } from 'react';
import isEmail from 'validator/es/lib/isEmail';
import isMobilePhone from "validator/es/lib/isMobilePhone";
import { Navigate, useNavigate } from "react-router-dom"
import { useCartContext } from '../context/cartContext';
import { useDivisaContext } from '../context/divisaContext';
import { serverTimestamp, collection, addDoc, getFirestore } from 'firebase/firestore';
import Spinner from '../assets/Spinner';
import OrderDetailModal from './OrderDetailModal';
import FinalModal from './FinalModal';

export default function CheckoutForm() {

    const { cart, cartMonto } = useCartContext()
    const { divisa, customRound } = useDivisaContext()
    const navigate = useNavigate()
    const [validName, setValidName] = useState(null)
    const [validEmail, setValidEmail] = useState(null)
    const [validPhone, setValidPhone] = useState(null)
    const [orderId, setOrderId] = useState(null)
    const [order, setOrder] = useState(null)
    const [modalIsOpen, setModalIsOpen] = useState(false)


    const checkoutOrder = async (e) => {
        e.preventDefault();
        setOrderId(false)

        const orden = {
            buyer: {
                buyerName: e.target.firstName.value,
                email: e.target.emailAddress.value,
                phone: e.target.phoneNumber.value
            },
            orderDetail: cart.map(i => {
                return {
                    itemId: i.id,
                    itemQty: i.qty,
                    itemDivisa: divisa.shortcut,
                    precioUnitario: customRound(i.precio)
                }
            }),
            orderMonto: {
                divisa: divisa.shortcut,
                montoTotal: customRound(cartMonto)
            }
        }

        try {
            const docRef = await addDoc(collection(getFirestore(), "orders"), {
                ...orden,
                orderTimeStamp: serverTimestamp()
            });
            console.log('New Order added: ' + docRef.id);
            setOrder(orden)
            setOrderId(docRef.id)
        } catch (e) {
            console.error("Error al querer hacer upload de una nueva orden: ", e);
            setOrderId(-1)
        }
    }

    const validateInput = (e) => {

        switch (e.target.type) {
            case 'text':
                const regexName = /[A-ZÑ][a-zñ]+(\s[A-ZÑ][a-zñ]+)+/
                setValidName(regexName.test(e.target.value))
                break;

            case 'email':
                setValidEmail(isEmail(e.target.value))
                break;

            case 'tel':
                setValidPhone(isMobilePhone(e.target.value))
                break;

            default:
                console.log('No se reconoce input type');
                break;
        }
    }

    return (
        cartMonto <= 0
            ?
            <Navigate to='/cart' />
            :
            <section className="m-4 w-full place-self-center flex justify-center">
                {orderId !== null
                    ?
                    <div className='bg-white rounded-md p-4'>
                        <Spinner leyenda='Procesando orden' />
                    </div>
                    :
                    <div>
                        <div className='flex justify-around items-center p-2'>
                            <span className="text-xl font-medium leading-6 text-gray-900 text-center">
                                Checkout <br /> {divisa.shortcut} {customRound(cartMonto)}
                            </span>
                            <button
                                className="m-2 hover:scale-105 text-color-1  font-medium"
                                onClick={() => setModalIsOpen(true)}
                            >
                                VER DETALLES!
                            </button>
                        </div>
                        {modalIsOpen && <OrderDetailModal setModalIsOpen={setModalIsOpen} />}
                        <div className="mt-4">
                            <form onSubmit={checkoutOrder}>
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="p-2 bg-gray-50 sm:p-4">
                                        <div className="grid grid-cols-6 gap-4">
                                            <div className="col-span-6">
                                                <label htmlFor="first-name" className=" text-sm font-medium text-gray-700">
                                                    Nombre y Apellido
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="firstName"
                                                    onChange={validateInput}
                                                    className={`mt-1 p-1 w-full shadow-sm text-sm rounded-md border 
                                            ${validName === false ? 'border-red-600' : (validName === true && 'border-green-600')}`}
                                                />
                                            </div>

                                            <div className="col-span-6">
                                                <label htmlFor="email-address" className=" text-sm font-medium text-gray-700">
                                                    Email
                                                </label>
                                                <input
                                                    required
                                                    type="email"
                                                    inputMode="email"
                                                    name="emailAddress"
                                                    onChange={validateInput}
                                                    className={`mt-1 p-1 w-full shadow-sm text-sm rounded-md border 
                                            ${validEmail === false ? 'border-red-600' : (validEmail === true && 'border-green-600')}`}
                                                />
                                            </div>

                                            <div className="col-span-6">
                                                <label htmlFor="phone-number" className=" text-sm font-medium text-gray-700">
                                                    Teléfono
                                                </label>
                                                <input
                                                    required
                                                    type="tel"
                                                    inputMode="tel"
                                                    name="phoneNumber"
                                                    onChange={validateInput}
                                                    className={`mt-1 p-1 w-full shadow-sm text-sm rounded-md border 
                                            ${validPhone === false ? 'border-red-600' : (validPhone === true && 'border-green-600')}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-2 bg-gray-50 sm:px-6 flex justify-between">
                                        <button className="m-2 text-color-1 font-medium hover:scale-105" onClick={() => navigate(-1)}>VOLVER!</button>
                                        <button
                                            type="submit"
                                            disabled={!(validName & validEmail & validPhone)}
                                            className="bg-color-1 hover:bg-color-3 text-white  px-3 py-2 rounded-md text-base font-medium m-2 sm:m-4 disabled:bg-gray-300"
                                        >
                                            Confirmar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                }
                {orderId && <FinalModal orderId={orderId} order={order} />}
            </section>
    )
}
