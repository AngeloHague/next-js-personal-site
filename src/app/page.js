import Image from 'next/image'
// import styles from './page.module.css'
import moon from '@/assets/Moon.svg'
import stars from '@/assets/Stars.svg'
import shimmer1 from '@/assets/Shimmer1.svg'
import shimmer2 from '@/assets/Shimmer2.svg'
import HomeSections, { HomeSectionSideNav, sectionMetadata } from '@/components/HomeSections'

export default function Index() {
  return (
    <main>
      <div className="sections">
            <section id="hero">
                <div className="logo-container">
                    <Image
                      className='stars'
                      priority
                      src={stars}
                      width={138}
                      height={138}
                      alt="Angelo Hague Moon Logo"
                    />
                    <h1>Angelo Hague</h1>
                    <h3>Web Developer</h3>
                    
                    <Image
                      className='moon'
                      priority
                      src={moon}
                      width={138}
                      height={138}
                      alt="Angelo Hague Moon Logo"
                    />
                </div>
                <div className="dive_deeper">
                    <a href={'#'+sectionMetadata[0]}>
                        <div>
                          <Image
                            priority
                            src={shimmer1}
                            width={193}
                            height={54}
                            alt="Angelo Hague shimmer image"
                          />
                            <h3>Dive Deeper</h3>
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
            <HomeSections />
            <HomeSectionSideNav />
        </div>
    </main>
  )
}