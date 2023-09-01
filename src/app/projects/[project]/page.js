import HeroSection from '@/components/HeroSection';
import React from 'react'
import { ProjectPreview } from '../Preview';
import { getProjectContent, getProjectMetadata, projectMetadata } from '@/lib/projects';
import styles from '../page.module.scss'

export async function generationStaticParams() {
    const projects = await getProjectMetadata();
    return projects.map((project) => {
        return ({
            project: project
        })
    })
}

export default function page({params}) {
    const md = getProjectContent(params.project);
    return (
        <HeroSection
            full_space
            containerClasses={styles.heroContent}
          >
            <ProjectPreview
                id={params.project}
                project={projectMetadata[params.project]}
                markdown={md}
            />
        </HeroSection>
    )
}
