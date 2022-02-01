import { useDivisaContext } from "../context/divisaContext"

const DivisaSelector = () => {

    const { divisaList, seleccionaMoneda } = useDivisaContext()

    return (
        <div>
            <select
                className="bg-black text-gray-300 hover:bg-gray-700 hover:text-white text-center text-lg font-medium rounded cursor-pointer"
                onChange={e => seleccionaMoneda(e.target.value)}
            >
                {divisaList.map(d =>
                    <option key={d.moneda} value={d.moneda}                    >
                        {d.shortcut}
                    </option>
                )}
            </select>
        </div>
    )
}

export default DivisaSelector
