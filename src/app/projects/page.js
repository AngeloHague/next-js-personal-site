import HeroSection from '@/components/HeroSection'
import { projectMetadata } from '@/lib/projects'
import React from 'react'
import ProjectStars from './ProjectStars'
import styles from './page.module.scss'
import { PreviewList } from './Preview'

console.log(projectMetadata)

export default function page() {
    return (
        <main>
          <HeroSection
            btn_link={'#' + Object.keys(projectMetadata)[0]}
            full_space
            containerClasses={styles.heroContent}
          >
            <div className={styles.viewSelector}>
                <input type="radio" id={styles.starSelector} class={styles.radio} name='viewSelector' />
                <label for={styles.starSelector}>
                    <span />
                    Star View
                </label>
                <input type="radio" id={styles.listSelector} class={styles.radio} name='viewSelector' checked />
                <label for={styles.listSelector}>
                    <span />
                    List View
                </label>
                <div className={styles.container}>
                    <div id={styles.starView}>
                        <h3>Under development</h3>
                    </div>
                    <div id={styles.listView}>
                        <PreviewList projectMetadata={projectMetadata} />
                    </div>
                </div>
            </div>
          </HeroSection>
      </main>
    )
}
