import React from 'react'
import Link from 'next/link'

export default function NavBar() {

    var links = [
        ['Home','/'],
        ['About Me','/about'],
        ['Projects','/projects'],
        ['Contact','/contact']
    ]

    return (
        <header id="nav">
            <div class="nav_bar"></div>
            <input type="checkbox" id="side_menu_checkbox" />
            <label id="hamburger" for="side_menu_checkbox">
                <a tabIndex='1'><span /></a>
            </label>
            <nav>
                <div className="logo">Angelo Hague</div>
                <ul>
                    {links.map(link => (<li><a href={link[1]} tabIndex='1'>{link[0]}</a></li>))}
                </ul>
            </nav>
        </header>
    )
}
