
import { getSection, getSectionMetadata } from '@/lib/home_sections';
import Markdown from 'markdown-to-jsx';
import React from 'react'


export default function HomeSections()
{
    const sectionMetadata = getSectionMetadata();
    const sections = sectionMetadata.map(async(slug) => (
        <section id={slug}>
            <Markdown>{getSection(slug)}</Markdown>
        </section>
    ));
    return <>{sections}</>;
}
