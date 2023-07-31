import React from 'react'
import { getProjectContent, getProjectMetadata, projectMetadata } from "@/lib/projects";
import HeroSection from '@/components/HeroSection';
import styles from '../page.module.css'
import { ProjectMoon } from '../ProjectStars';
import chevronDown from '@/assets/chevron-down 1.svg'
import Image from 'next/image';

export async function generationStaticParams() {
    const projects = await getProjectMetadata();
    return projects.map((project) => ({
        project: project,
    }))
}

export default function page({params}) {
    const project = projectMetadata[params.project];
    const markdown = getProjectContent(params.project);
    return (
        <main>
            <div className='sections'>
                <HeroSection
                    // back_link='/projects/'
                    full_space={true}
                    stretchHero
                >
                    <div className={styles.layoutGrid}>
                        <div className={styles.moonContainer}>
                            <a className='back_link' href='/projects'><h4> &lt; Go Back</h4></a>
                            <ProjectMoon project={project} />
                        </div>
                        <div className={styles.infoContainer}>
                            <div>
                                <details>
                                    <summary>Images <Image
                                        class={styles.arrow}
                                        height={24}
                                        width={24}
                                        src={chevronDown}
                                    /> </summary>
                                    {markdown}
                                </details>
                                <details open>
                                    <summary>About <Image
                                        class={styles.arrow}
                                        height={24}
                                        width={24}
                                        src={chevronDown}
                                    /> </summary>
                                    {markdown}
                                </details>
                            </div>
                        </div>
                    </div>
                </HeroSection>
            </div>
        </main>
    )
}
