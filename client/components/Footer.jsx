import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer () {
    return (
        <footer className='ftr-list-R'>
            <a className='ftr-item' href='#'><FontAwesomeIcon icon={['fab', 'github']} /></a>
            <a className='ftr-item' href='#'><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            <a className='ftr-item' href='#'><FontAwesomeIcon icon='envelope' /></a>
        </footer>
    )
}

export default Footer