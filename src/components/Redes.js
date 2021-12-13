// import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Redes = () => {
    return (
        <div className="div-redes bg-black w-full flex justify-center p-2 sm:p-3">
            <a href="https://open.spotify.com/artist/6JKZLnwyVPZAWV2EEf4ymg" target="_blank" rel="noopener noreferrer"
                aria-label="Spotify">
                <FontAwesomeIcon icon={['fab', 'spotify']} />
            </a>
            <a href="https://www.youtube.com/channel/UCYToX-tnm_-r5Yba__qP9Tg" target="_blank" rel="noopener noreferrer"
                aria-label="YouTube">
                <FontAwesomeIcon icon={['fab', 'youtube']} />
            </a>
            <a href="https://www.facebook.com/elsindome.depeter" target="_blank" rel="noopener noreferrer" 
                aria-label="Facebook">
                <FontAwesomeIcon icon={['fab', 'facebook']} />
            </a>
            <a href="https://www.instagram.com/elsindromedepeter" target="_blank" rel="noopener noreferrer" 
                aria-label="Instagram">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
            <a href="https://twitter.com/elsindromepeter" target="_blank" rel="noopener noreferrer" 
                aria-label="Twitter">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
        </div>
    )
}

export default Redes
