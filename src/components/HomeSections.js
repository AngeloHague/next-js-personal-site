
import { getSection, getSectionMetadata } from '@/lib/home_sections';
import Markdown from 'markdown-to-jsx';
import React from 'react'
import LineArt from './LineArt';

export const sectionMetadata = getSectionMetadata();

export default function HomeSections({svg})
{
    // const sectionMetadata = getSectionMetadata();
    const sections = sectionMetadata.map(async(slug) => (
        <section id={slug} className='home_section'>
            <div className="content"><Markdown>{getSection(slug)}</Markdown></div>
            {/* <Image src={CathedralSVG} width='800' height='800' /> */}
            <LineArt svg={svg} />
        </section>
    ));
    return <>{sections}</>;
}
