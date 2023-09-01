import { getSection, getSectionMetadata } from '@/lib/home_sections';
import Markdown from 'markdown-to-jsx';
import React from 'react'
import LineArt from './LineArt';
import responsive from '@/data/animations/responsive.json'
import cathedral from '@/data/animations/cathedral.json'
import KeyframeAnimation from './KeyframeAnimation';

export const sectionMetadata = getSectionMetadata();

const animations = {
    lincoln_cathedral: {
        type: 'lineart',
        src: cathedral
    },
    responsive_design: {
        type: 'keyframe',
        src: responsive
    },
}

export default function HomeSections()
{
    const sections = sectionMetadata.map(async(slug) => {
        let section = getSection(slug)
        let html = Object.keys(section.contents).map((key) => {
            let subsec = section.contents[key]
            return Object.keys(subsec).map((k) => {
                if (k=='markdown') return <p><Markdown>{subsec[k]}</Markdown></p>
                else if (k='animation') {
                    if (animations[subsec[k]].type == 'keyframe') {
                        let src = animations[subsec[k]].src;
                        let { width, height } = src;
                        return (
                            <KeyframeAnimation
                                json={animations[subsec[k]].src}
                                fixedWidth={width}
                                fixedHeight={height}
                            />
                        )
                    } else if (animations[subsec[k]].type == 'lineart')  {
                        let src = animations[subsec[k]].src;
                        let { width, height } = src;
                        return (
                            <LineArt
                                json={animations[subsec[k]].src}
                                fixedWidth={width}
                                fixedHeight={height}
                            />
                        )
                    }
                }
            })
        })
        return (
        <section id={slug} className='home_section'>
            <div className="content">
                <h1>{section.title}</h1>
                {html}
            </div>
        </section>
    )});
    return <>{sections}</>;
}
