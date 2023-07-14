import { getSection, getSectionMetadata } from '@/lib/home_sections';
import Markdown from 'markdown-to-jsx';
import React from 'react'
import LineArt from './LineArt';
import responsive from '@/data/animations/responsive.json'
import KeyframeAnimation from './KeyframeAnimation';

export const sectionMetadata = getSectionMetadata();

const animations = {
    lincoln_cathedral: {
        type: 'lineart',
        src: 'src'
    },
    responsive_design: {
        type: 'keyframe',
        src: responsive
    },
}

export default function HomeSections({svg})
{
    const sections = sectionMetadata.map(async(slug) => {
        let section = getSection(slug)
        let html = Object.keys(section.contents).map((key) => {
            let subsec = section.contents[key]
            return Object.keys(subsec).map((k) => {
                if (k=='markdown') return <p><Markdown>{subsec[k]}</Markdown></p>
                else if (k='animation') {
                    if (animations[subsec[k]].type == 'keyframe') {
                        return(<KeyframeAnimation json={animations[subsec[k]].src} />)
                    } else if (animations[subsec[k]].type == 'lineart')  {
                        return(<LineArt json={animations[subsec[k]].src} />)
                    }
                }
            })
        })
        return (
        <section id={slug} className='home_section'>
            <div className="content">
                <h2>{section.title}</h2>
                {html}
            </div>
        </section>
    )});
    return <>{sections}</>;
}
