import React from 'react'
import styles from './preview.module.scss'

export function ProjectPreview({ id, project, preview='', markdown }) {
    const links = (project.links) ? Object.keys(project.links).map((key) => {
        const link = project.links[key];
        return <a key='key' href={link.href} target='_blank'>{link.text}</a>
    }) : null;
    const buttons = (preview) ? <>
        {preview=='star' ? <a key='back'>{'< Go Back'}</a> : null}
        <a key='explore' href={'/projects/'+id}>{'Explore >'}</a>
    </> : [<a key='back' href='/projects'>{'< Go Back'}</a>,links];
    console.log(markdown)
    return (
        <div id={id}>
            <div className={styles.previews}>
                <div className={styles.desktop}>
                    <p>hi</p>
                </div>
                <div className={styles.mobile}>
                    <p>hi</p>
                </div>
            </div>
            <div className={styles.details}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <ul className={styles.links}>
                    {buttons}
                </ul>
                {markdown}
            </div>
        </div>
    )
}

export function PreviewList({ projectMetadata }) {
    return (
        <div className={styles.projectList}>
            {Object.keys(projectMetadata).map((key) => {
                return (<ProjectPreview
                    id={key}
                    project={projectMetadata[key]}
                    preview='list'
                />);
            })}
        </div>
    )
}

