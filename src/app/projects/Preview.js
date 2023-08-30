import React from 'react'
import styles from './preview.module.scss'

export function ProjectPreview({ id, project }) {
    const links = (project.links) ? Object.keys(project.links).map((key) => {
        const link = project.links[key];
        return <a key='key' href={link.href}>{link.text}</a>
    }) : null;
    return (
        <div id={id}>
            <div className={styles.desktop}>hi</div>
            <div className={styles.mobile}>hi</div>
            <div className={styles.details}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
            <ul className={styles.links}>
                <a key='back'>{'< Go Back'}</a>
                {links}
            </ul>
        </div>
    )
}

export function PreviewList({ projectMetadata }) {
    return (
        <div>
            {Object.keys(projectMetadata).map((key) => {
                return (<ProjectPreview id={key} project={projectMetadata[key]} />);
            })}
        </div>
    )
}

