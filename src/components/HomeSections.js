
import { getSection, getSectionMetadata } from '@/lib/home_sections';
import Markdown from 'markdown-to-jsx';
import React from 'react'
import LineArt from './LineArt';
import responsive from '@/data/animations/responsive.json'
import KeyframeAnimation from './KeyframeAnimation';

export const sectionMetadata = getSectionMetadata();

const animations = {
    lincoln_cathedral: (<LineArt />),
    responsive_design: (<KeyframeAnimation json={responsive} />)
}

export default function HomeSections({svg})
{
    // const sectionMetadata = getSectionMetadata();
    const sections = sectionMetadata.map(async(slug) => {
        let section = getSection(slug)
        let html = Object.keys(section.contents).map((key) => {
            let subsec = section.contents[key]
            return Object.keys(subsec).map((k) => {
                if (k=='markdown') return <p><Markdown>{subsec[k]}</Markdown></p>
                else if (k='animation') return animations[subsec[k]]
            })
        })
        return (
        <section id={slug} className='home_section'>
            <div className="content">
                <h2>{section.title}</h2>
                {html}
            </div>
            {/* <Image src={CathedralSVG} width='800' height='800' /> */}
            {/* <LineArt svg={svg} /> */}
            {/* <KeyframeAnimation json={responsive} /> */}
        </section>
    )});
    return <>{sections}</>;
}
