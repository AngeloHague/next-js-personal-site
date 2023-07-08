import React from 'react'
import { getContactMetadata } from '@/lib/contact_links'
import styles from './page.module.css'
import Image from 'next/image';

const contactMetadata = getContactMetadata();

export default function ContactLinks() {
    const links = Object.keys(contactMetadata).map((link) => {
        return (
            <li>
                <a href={contactMetadata[link]}>
                    <Image
                        src={'/feather-icons/'+link+'.svg'}
                        width='24'
                        height='24'
                        alt={link+' button icon'}
                        priority='true'
                    />
                </a>
            </li>
        )
    })
    return (<ul className={styles.links}>{links}</ul>)
}
