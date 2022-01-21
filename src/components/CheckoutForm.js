import { useState } from 'react';
import isEmail from 'validator/es/lib/isEmail';
import isMobilePhone from "validator/es/lib/isMobilePhone";
export default function CheckoutForm() {

    const [validName, setValidName] = useState(null)
    const [validEmail, setValidEmail] = useState(null)
    const [validPhone, setValidPhone] = useState(null)

    const checkoutOrder = (e) => {
        e.preventDefault();
        const buyer = {
            buyerName: e.target.firstName.value,
            email: e.target.emailAddress.value,
            phone: e.target.phoneNumber.value
        }
        console.log(buyer);
    }

    const validateInput = (e) => {

        // console.log(e);
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
        <>
            <div className="m-6">
                <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Checkout!</h3>
                    <p className="mt-1 text-sm text-gray-600">Completa tus datos para finalizar:</p>
                </div>
                <div className="mt-4">
                    <form onSubmit={checkoutOrder}>
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-gray-50 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
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
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-end">
                                <button
                                    type="submit"
                                    disabled={!(validName & validEmail & validPhone)}
                                    className="bg-color-1 text-white  px-3 py-2 rounded-md text-base font-medium m-2 sm:m-4 disabled:bg-gray-300"
                                >
                                    Siguiente
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
