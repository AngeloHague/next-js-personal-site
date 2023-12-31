import React from 'react'
import styles from './preview.module.scss'
import Image from 'next/image';

import path from 'path'
import fs from 'fs'

import desktop1 from '@/assets/desktop_overlay_1.svg'
import mobile1 from '@/assets/mobile_overlay_1.svg'
import Link from 'next/link';

const blur = '/projectBlur.png'

export function ProjectPreview({ id, project, preview='', markdown }) {
    const desktop_preview = path.join(process.cwd(), 'public', 'previews', id+'-desktop-preview.png');
    const mobile_preview = path.join(process.cwd(), 'public', 'previews', id+'-mobile-preview.png');
    const links = (project.links) ? Object.keys(project.links).map((key) => {
        const link = project.links[key];
        return <li key='key'><a tabIndex={0} href={link.href} target='_blank'>{link.text}</a></li>
    }) : null;
    const buttons = (preview) ? <>
        {preview=='star' ? <Link tabIndex={0} key='back'>{'< Projects'}</Link> : null}
        <Link tabIndex={0} key='explore' href={'/projects/'+id}>{'Explore >'}</Link>
    </> : [<Link tabIndex={0} key='back' href='/projects'>{'< Projects'}</Link>,links];
    return (
        <div id={id} className={styles.container}>
            <div className={styles.previews} tabIndex={0}>
                <div className={styles.desktop}>
                    <div className={styles.imageContainer}>
                        {fs.existsSync(desktop_preview) ?
                        <Image
                            src={'/previews/'+id+'-desktop-preview.png'} fill
                            sizes='(max-width: 480px) 80vw, (max-width: 1200px) 80vw, 50vw'
                            placeholder='blur' blurDataURL={blur}
                        /> : <p className={styles.missingImage}>{'No desktop \npreview :('}</p>}
                    </div>
                    <Image
                        className={styles.overlay} src={desktop1}
                        width={'100%'} height={'100%'}
                    />
                </div>
                <div className={styles.mobile}>
                    <div className={styles.imageContainer}>
                        {fs.existsSync(mobile_preview) ?
                        <Image
                            src={'/previews/'+id+'-mobile-preview.png'} fill
                            sizes='(max-width: 480px) 80vw, (max-width: 1200px) 80vw, 50vw'
                            placeholder='blur' blurDataURL={blur}
                        /> : <p className={styles.missingImage}>{'No mobile \npreview :('}</p>}
                    </div>
                    <Image
                        className={styles.overlay} src={mobile1}
                        width={'100%'} height={'100%'}
                    />
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

