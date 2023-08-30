import React from 'react'
import styles from './page.module.scss'
import { handleScroll } from "@/lib/scrolling";
import Image from 'next/image';
import moon from '@/assets/Moon.svg'

const paths = {
    github: <><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></>,
    paper: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></>,
    external_link: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></>,
}

function Link({text, className='out', svg, href}) {
    const path = paths[svg];
    return (
        <a href={href} className={className}>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">{path}</svg>
                <p>{text}</p>
            </li>
        </a>
    )
}

export function ProjectMoon({project}) {
    return (
        <div className={styles.projectMoon}>
            <Image
                className={styles.moon}
                width='100%'
                height='100%'
                src={moon}
            />
            <div className={styles.content}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <ul className={styles.links}>
                    {Object.keys(project.links).map((link) => 
                        <Link text={project.links[link].text} svg={link} href={project.links[link].href} />
                    )}
                </ul>
            </div>
        </div>
    )
}


export default function ProjectStars({projects}) {
    const stars = Object.keys(projects).map((project) => (
        <a
            className={[styles.star,'anchorTag'].join(' ')}
            href={'#'+project}
            onClick={handleScroll}
        >
            <span />
        </a>
    ));
    return (
        <div className={styles.projectStars}>
            {stars}
        </div>
    )
}
