import React from 'react'

function Nav () {
    return (
        <header className='header-container'>
            <nav className='nav-container'>
                <ul className='nav-list-L'>
                    <li><a href='#'>Work</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <ul className='nav-list-R'>
                    <li><a href='#'>GH</a></li>
                    <li><a href='#'>Li</a></li>
                    <li><a href='#'>Mail</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav