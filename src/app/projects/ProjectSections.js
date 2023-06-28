import React from 'react'
import Image from 'next/image';
import ScreenPreview from '@/assets/ScreenPreview.svg'
import { getProjectMetadata, PreviewDirectory } from '@/lib/projects'
import styles from './page.module.css'
import path from 'path'
import fs from 'fs'

function ProjectPreview({id}) {
    var desktopPreview = <p>I can't seem to find an image for this one...</p>;
    var mobilePreview = <p>:(</p>;
    if (id == 'this-website') {
        desktopPreview = (<p>I don't think you need a preview for this one...</p>)
        mobilePreview = (<p>:)</p>)
    } else {
        const desktop_preview = path.join(PreviewDirectory, id+'-desktop-preview.png')
        const mobile_preview = path.join(PreviewDirectory, id+'-mobile-preview.png')
        if (fs.existsSync(desktop_preview) && fs.existsSync(mobile_preview)) {
            desktopPreview = (<Image
                src={'/previews/'+id+'-desktop-preview.png'}
                width='332'
                height='208' />)
            mobilePreview = (<Image
                src={'/previews/'+id+'-mobile-preview.png'}
                width='85'
                height='130' />)
        } 
    }

    return (
        <div className={styles.preview}>
            <div className={styles.desktop}>{desktopPreview}</div>
            <Image
                className={styles.overlay}
                src={ScreenPreview}
                width='333'
                height='236'
            />
            <div className={styles.mobile}>{mobilePreview}</div>
        </div>
    )
}

export default function ProjectSections({projectMetadata}) {
    const sections = Object.keys(projectMetadata).map((section) => {
        return (
        <section className='project' id={section}>
            <h2>{projectMetadata[section].title}</h2>
            <p>{projectMetadata[section].description}</p>
            <ProjectPreview id={section} />
            <h3><a>Explore this project</a></h3>
        </section>)
    })
    return sections;
}
