import HeroSection from '@/components/HeroSection'
import { projectMetadata } from '@/lib/projects'
import React from 'react'
import styles from './page.module.scss'
import { PreviewList } from './Preview'
import { SideNav } from '@/components/SideNav'


export const metadata = {
    title: 'Projects | Angelo Hague',
    description: 'Here you can find some of my projects. I have worked with a number of web technologies; notably Shopify Liquid, Wordpress, Next.js and React.',
    keywords: ['web design portfolio', 'web development portfolio', 'web designer portfolio',  'web developer portfolio'].join(', ')
}

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
                        <SideNav slugs={Object.keys(projectMetadata)} includeHero={false} />
                    </div>
                </div>
            </div>
          </HeroSection>
      </main>
    )
}
