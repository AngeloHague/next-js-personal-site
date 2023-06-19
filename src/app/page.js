import Image from 'next/image'
// import styles from './page.module.css'
import moon from '@/assets/Moon.svg'
import shimmer1 from '@/assets/Shimmer1.svg'
import shimmer2 from '@/assets/Shimmer2.svg'
import HomeSections from '@/components/HomeSections'

export default function Index() {
  return (
    <main>
      <div className="sections">
            <section id="hero">
                <div className="logo-container">
                    <h1>Angelo Hague</h1>
                    <h3>Web Developer</h3>
                    
                    <Image
                      priority
                      src={moon}
                      width={138}
                      height={138}
                      alt="Angelo Hague Moon Logo"
                    />
                </div>
                <div className="dive_deeper">
                    <a href="#who-i-am">
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
            {/* <section id="who-i-am">
                <div className="container">
                    <h2>Who I am</h2>
                    <p>
                        I am an aspiring <strong>web developer</strong> and a University of Lincoln <strong>Computer Science Graduate</strong>.
                    </p>
                    <p>
                        I have experience with a variety of different programming languages, but am primarily interested in working with Javascript. 
                    </p>
                    <p>
                        I am currently <strong>finishing my Masters</strong> in Computer Science and am <strong>open to work</strong>.
                    </p>
                    <button>Find out more</button>
                </div>
            </section>
            <section id="what-i-have-done">
                <div className="container">
                    <h2>What I have done</h2>
                    <p>
                        I have worked with a number of clients to produce professional responsive websites for their businesses.
                    </p>
                    <p>
                        Most recently, I redesigned and developed a custom Shopify Theme for premiere designer clothes store, Zebra Menswear.
                    </p>
                    <button>View my work</button>
                </div>
            </section>
            <section id="how-i-can-help">
                <div className="container">
                    <h2>How I can help</h2>
                    <p>
                        Together, we can design and develop an amazing website.
                    </p>
                    <p>
                        Get in touch, and we can discuss and assess your needs.
                    </p>
                    <p>
                        From there, I can work on designing your website and, once you’re happy with the results, I can begin building.
                    </p>
                    <button>Get in touch</button>
                </div>
            </section> */}
            <div className="page_nav">
                <div>
                    <label for=""></label>
                    <input type="radio" />
                </div>
            </div>
        </div>
    </main>
  )
}