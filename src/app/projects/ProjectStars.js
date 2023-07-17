import React from 'react'
import styles from './page.module.css'
import { handleScroll } from "@/lib/scrolling";

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
