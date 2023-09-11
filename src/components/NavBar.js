'use client'
import React from 'react'

function NavBar({ pathname }) {

    var links = [
        ['Home','/'],
        ['About Me','/about'],
        ['Projects','/projects'],
        ['Contact','/contact']
    ]

    function toggleOpen(e) {
        const cb = document.getElementById('hamburger');
        cb.click();
    }

    return (
        <header id="nav">
            <div class="nav_bar"></div>
            <input type="checkbox" id="side_menu_checkbox" />
            <label id="hamburger" for="side_menu_checkbox" tabIndex='1' onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                        toggleOpen();
                    }
                }}
            >
                <span />
            </label>
            <nav>
                <div className="logo"><span>Angelo Hague</span> / {pathname}</div>
                <ul>
                    {links.map((link, idx) => (<li key={idx}><a href={link[1]} tabIndex='1'>{link[0]}</a></li>))}
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;