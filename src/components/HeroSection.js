import React from 'react'
import Image from 'next/image'
import moon from '@/assets/Moon.svg'
import stars from '@/assets/Stars.svg'
import { handleScroll } from "@/lib/scrolling";
import ShimmerAnimation from './ShimmerAnimation';
import styles from './styles/hero.module.scss'
import starSass from './styles/stars.module.sass'

export default function HeroSection({home=false, low_moon=false, full_space=false, btn_text='Dive Deeper', btn_link, subtitle, requireJS=false, back_link, containerClasses, children}) {
    const go_back = (back_link) ? <><a className='back_link' href={back_link}><h4> &lt; Go Back</h4></a></> : <></>;
    const moonClass = (low_moon) ? [styles.moon, styles.low].join(' ') : styles.moon;
    const title = (home) ? <h1>Angelo Hague</h1> : '';
    const seaBed = (full_space) ? <></> :
    <div className={styles.dive_deeper}>
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
        <section className={(home) ? [styles.hero,styles.home].join(' ') : styles.hero} id='hero'>
          <div className={(full_space) ? [styles.space,styles.full].join(' ') : styles.space }>
              <div className={styles.stars}>
                <div className={styles.container}>
                  <div id={starSass.stars} />
                  <div id={starSass.stars2} />
                  <div id={starSass.stars3} />
                </div>
              </div>
              <div className={[styles.heroContent,containerClasses].join(' ')}>
                  {go_back}
                  {title}
                  {subtitle ? <h3>{subtitle}</h3> : null}
                  {moon_el}
                  {children}
              {noJS}
              </div>
          </div>
          {seaBed}
      </section>
    )
}
