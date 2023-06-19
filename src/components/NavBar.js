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
                <a><span /></a>
            </label>
            <nav>
                <ul>
                    {links.map(link => (<a href={link[1]}><li>{link[0]}</li></a>))}
                </ul>
            </nav>
        </header>
    )
}
