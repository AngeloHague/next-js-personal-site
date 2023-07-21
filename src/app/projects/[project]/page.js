import React from 'react'
import { getProjectMetadata, projectMetadata } from "@/lib/projects";
import HeroSection from '@/components/HeroSection';
import styles from '../page.module.css'
import { ProjectMoon } from '../ProjectStars';

export async function generationStaticParams() {
    const projects = await getProjectMetadata();
    return projects.map((project) => ({
        project: project,
    }))
}

export default function page({params}) {
    const project = projectMetadata[params.project];
    return (
        <main>
            <div className='sections'>
                <HeroSection
                    full_space={true}
                >
                    <ProjectMoon project={project} />
                </HeroSection>
            </div>
        </main>
    )
}
