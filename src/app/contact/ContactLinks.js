import React from 'react'
import { getContactMetadata } from '@/lib/contact_links'
import styles from './page.module.css'

const contactMetadata = getContactMetadata();

export default function ContactLinks() {
    const links = Object.keys(contactMetadata).map((link) => {
        return (
            <li>
                <a href={contactMetadata[link]}><img src={'/feather-icons/'+link+'.svg'} /></a>
            </li>
        )
    })
    return (<ul className={styles.links}>{links}</ul>)
}
