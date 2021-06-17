import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Nav () {
    return (
        <header className='header-container'>
            <nav className='nav-container'>
                <div className='nav-list-L'>
                    <a className='site-icon' href='#'><img src='images/sam-logo.png' alt='page logo' style={{height: 28 + 'px'}}/></a>
                    <a className='nav-item-L' href='#'>Work</a>
                    <a className='nav-item-L' href='#'>About</a>
                    {/* <a className='nav-item-L' href='#'>Contact</a> */}
                </div>
                <div className='nav-list-R'>
                    <a className='nav-item-R' href='https://github.com/sam-thorn'><FontAwesomeIcon icon={['fab', 'github']} /></a>
                    <a className='nav-item-R' href='https://www.linkedin.com/in/sam-thorn-33917a32/'><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                    <a className='nav-item-R' href='https://dribbble.com/sam_thorn'><FontAwesomeIcon icon={['fab', 'dribbble']} /></a>
                    <a className='nav-item-R' href='mailto:spthornnz@gmail.com'><FontAwesomeIcon icon='envelope' /></a>
                </div>
            </nav>
        </header>
    )
}

export default Nav