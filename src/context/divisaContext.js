import axios from 'axios'
import { createContext, useContext, useState, useEffect } from 'react'

const DivisaContext = createContext()
export const useDivisaContext = () => useContext(DivisaContext)

export function DivisaContextProvider({ children }) {

    const [divisaList, setDivisaList] = useState([{ moneda: 'PESO ARG', shortcut: '$', valor: 1, ultAct: new Date() }])
    const [divisa, setDivisa] = useState(divisaList[0])

    const seleccionaMoneda = (moneda) => {
        console.log(moneda);
        if (divisaList.some(e => e.moneda === moneda)) {
            setDivisa(divisaList.find(e => e.moneda === moneda))
        }
    }

    const actualizaDolar = () => {
        console.log('entra a actualizadolar');
        let valorDolar
        // let dif = ultAct ? (new Date().getTime() - ultAct.getTime()) / (1000 * 60 * 60) : 0
        axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
            .then(rta => {
                valorDolar = parseFloat(rta.data[7].casa.venta.replace(/,/g, '.'))
            })
            .catch(err => {
                console.log('No se pudo actualizar API Cot Dolar')
                valorDolar = 110
                console.log(err);
            })
            .finally(() => {
                const nuevaDivisa = { moneda: 'DOLAR', shortcut: 'USD', valor: valorDolar, ultAct: new Date() }
                let lista = [...divisaList]
                if (lista.some(e => e.moneda === nuevaDivisa.moneda)) {
                    lista.find(e => e.moneda === nuevaDivisa.moneda).valor = nuevaDivisa.valor
                    lista.find(e => e.moneda === nuevaDivisa.moneda).ultAct = nuevaDivisa.ultAct
                    setDivisaList(lista)
                } else {
                    setDivisaList([...divisaList, nuevaDivisa])
                }
            })
    }

    const customRound = (n) => Math.round((n / divisa.valor) * 100) / 100;

    useEffect(() => {
        actualizaDolar()
    }, [])

    return (
        <DivisaContext.Provider value={{ divisaList, divisa, seleccionaMoneda, customRound }}>
            {children}
        </DivisaContext.Provider>
    )
}