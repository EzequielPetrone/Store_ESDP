import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const ItemRedes = ({ href, value }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={value}>
            <FontAwesomeIcon icon={['fab', value]} />
        </a>
    )
}

const arrayRedes = [
    { id: 1, url: "https://open.spotify.com/artist/6JKZLnwyVPZAWV2EEf4ymg", red: 'spotify' },
    { id: 2, url: "https://www.youtube.com/channel/UCYToX-tnm_-r5Yba__qP9Tg", red: 'youtube' },
    { id: 3, url: "https://www.facebook.com/elsindome.depeter", red: 'facebook' },
    { id: 4, url: "https://www.instagram.com/elsindromedepeter", red: 'instagram' },
    { id: 5, url: "https://twitter.com/elsindromepeter", red: 'twitter' },
]

const Redes = () => {
    return (
        <div className="div-redes bg-black w-full flex justify-center p-1 md:p-2">
            {arrayRedes.map(r =>
                <ItemRedes key={r.id} href={r.url} value={r.red} />
            )}
        </div>
    )
}

export default Redes