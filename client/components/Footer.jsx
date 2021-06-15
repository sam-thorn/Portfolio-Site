import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer () {
    return (
        <footer className='ftr-list-R'>
            <a className='ftr-item' href='https://github.com/sam-thorn'><FontAwesomeIcon icon={['fab', 'github']} /></a>
            <a className='ftr-item' href='https://www.linkedin.com/in/sam-thorn-33917a32/'><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            <a className='ftr-item' href='https://dribbble.com/sam_thorn'><FontAwesomeIcon icon={['fab', 'dribbble']} /></a>
            <a className='ftr-item' href='mailto:spthornnz@gmail.com'><FontAwesomeIcon icon='envelope' /></a>
        </footer>
    )
}

export default Footer