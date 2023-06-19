
import { getSection, getSectionMetadata } from '@/lib/home_sections';
import Markdown from 'markdown-to-jsx';
import React from 'react'

export const sectionMetadata = getSectionMetadata();

export function HomeSectionSideNav() {
    const nav = sectionMetadata.map((slug) => (
        <>
            <a href={"#"+slug} tabIndex='-1'><span /></a>
        </>
    ));
    return (
        <div className="page_nav">
            <div>
                <a href="#hero" tabIndex='-1'><span /></a>
                {nav}
            </div>
        </div>
    )
}

export default function HomeSections()
{
    // const sectionMetadata = getSectionMetadata();
    const sections = sectionMetadata.map(async(slug) => (
        <section id={slug}>
            <Markdown>{getSection(slug)}</Markdown>
        </section>
    ));
    return <>{sections}</>;
}
