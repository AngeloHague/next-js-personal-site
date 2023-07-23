import React from 'react'
import Image from 'next/image'
import moon from '@/assets/Moon.svg'
import stars from '@/assets/Stars.svg'
import { handleScroll } from "@/lib/scrolling";
import ShimmerAnimation from './ShimmerAnimation';

export default function HeroSection({home=false, low_moon=false, full_space=false, btn_text='Dive Deeper', btn_link, subtitle, requireJS=false, back_link, stretchHero=false, children}) {
    const go_back = (back_link) ? <><a className='back_link' href={back_link}><h4> &lt; Go Back</h4></a></> : <></>;
    const title = (home) ? <h1>Angelo Hague</h1> : '';
    const homeClass =  (home) ? "home" : '';
    const moonClass = (low_moon) ? 'moon low' : 'moon';
    const spaceClass = (full_space) ? "logo-container full" : "logo-container";
    const heroContainerClass = (stretchHero) ? 'heroContent full' : 'heroContent';
    const seaBed = (full_space) ? <></> :
    <div className="dive_deeper">
        <a href={btn_link} onClick={handleScroll}>
            <div>
              <ShimmerAnimation />
                <h3>{btn_text}</h3>
            </div>
        </a>
    </div>;
    const noJS = (requireJS) ?
      <noscript>
        <div className='requireJS'>
          <h3><br/>No javascript :( </h3>
        </div>
      </noscript>
      : '';
    const moon_el = (low_moon || home) ? 
    <Image
        className={moonClass}
        priority
        src={moon}
        width={138}
        height={138}
        alt="Angelo Hague Moon Logo"
    /> : '';
    return (
        <section className={homeClass} id="hero">
                <div className={spaceClass}>
                    <Image
                      className='stars'
                      priority
                      src={stars}
                      width={1920}
                      height={1080}
                      alt="Angelo Hague Moon Logo"
                    />
                    <div className={heroContainerClass}>
                        {go_back}
                        {title}
                        <h3>{subtitle}</h3>
                        {moon_el}
                        {children}
                    {noJS}
                    </div>
                </div>
                {seaBed}
            </section>
    )
}
