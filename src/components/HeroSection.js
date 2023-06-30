'use client'
import React from 'react'
import Image from 'next/image'
import moon from '@/assets/Moon.svg'
import stars from '@/assets/Stars.svg'
import shimmer1 from '@/assets/Shimmer1.svg'
import shimmer2 from '@/assets/Shimmer2.svg'
import { handleScroll } from "@/lib/scrolling";

export default function HeroSection({home=false, show_moon=false, btn_text='Dive Deeper', btn_link, subtitle}) {
    const title = (home) ? <h1>Angelo Hague</h1> : '';
    const homeClass =  (home) ? "home" : '';
    const moon_el = (show_moon || home) ? 
    <Image
        className='moon'
        priority
        src={moon}
        width={138}
        height={138}
        alt="Angelo Hague Moon Logo"
    /> : '';
    return (
        <section className={homeClass} id="hero">
                <div className="logo-container">
                    <Image
                      className='stars'
                      priority
                      src={stars}
                      width={138}
                      height={138}
                      alt="Angelo Hague Moon Logo"
                    />
                    <div>
                        {title}
                        <h3>{subtitle}</h3>
                        {moon_el}
                    </div>
                </div>
                <div className="dive_deeper">
                    <a href={btn_link} onClick={handleScroll}>
                        <div>
                          <Image
                            priority
                            src={shimmer1}
                            width={193}
                            height={54}
                            alt="Angelo Hague shimmer image"
                          />
                            <h3>{btn_text}</h3>
                          <Image
                            priority
                            src={shimmer2}
                            width={61}
                            height={17}
                            alt="Angelo Hague shimmer image"
                          />
                        </div>
                    </a>
                </div>
            </section>
    )
}
