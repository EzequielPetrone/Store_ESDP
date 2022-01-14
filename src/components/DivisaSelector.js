import { useDivisaContext } from "../context/divisaContext"

const DivisaSelector = () => {

    const { divisaList, seleccionaMoneda } = useDivisaContext()

    return (
        <div>
            {/* <label htmlFor='moneda'>Moneda</label> */}
            <select
                // name="moneda" 
                className=" bg-black text-color-2 text-center rounded "
                onChange={e => seleccionaMoneda(e.target.value)}
            >
                {divisaList.map(d =>
                    <option key={d.moneda} value={d.moneda}>
                        {d.shortcut}
                    </option>
                )}
            </select>
        </div>
    )
}

export default DivisaSelector