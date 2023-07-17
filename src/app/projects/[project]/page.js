import React from 'react'
import { getProjectMetadata, projectMetadata } from "@/lib/projects";
import HeroSection from '@/components/HeroSection';

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
            <div className='sections'><HeroSection subtitle={project.title} /></div>
        </main>
    )
}
