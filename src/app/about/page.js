import HeroSection from "@/components/HeroSection";
import Moon from '@/assets/Moon.svg'
import Earth from '@/assets/Earth.svg'
import { SideNav } from "@/components/SideNav";
import Image from "next/image";
import styles from './page.module.scss'
import previewStyles from '../projects/preview.module.scss'
import ContactLinks from "../contact/ContactLinks";

function ReadMore({text='Find out more', href, center=false}) {
  const linkStyle = (center) ? styles.readMore : [styles.readMore, styles.center].join(' ');
  return (<a className={linkStyle} href={href}>{text}</a>)
}

export default function AboutPage() {
    return (
      <main>
        <div className="sections">
          <HeroSection
            full_space
          >
            <div className={styles.infoContainer}>
              <div className={styles.container}>
                <h3>Origin:</h3>
                <h3>UK, Earth</h3>
                <Image className={styles.planet} src={Earth} width={138} height={138} />
                <div className={previewStyles.details}>
                  <h2>University</h2>
                  <p>In 2022, I graduated the University of Lincoln with a first class degree in Computer Science.</p>
                  <p>Throughout my studies, I worked with a variety of programming languages such as C++, Python, MATLAB, HTML, CSS and Javascript.</p>
                  <p>In my first year, I was introduced to Web Design and Development, which piqued my interest due to its mix of creativity and programming. In the later years of my studies, I was able to revisit web technologies and develop a full-stack React Native Poker application, further igniting my interest in web development.</p>
                  <h2>Freelancing</h2>
                  <p>Eager to expand upon my aforementioned projects in web development, I reached out to an old employer, Zebra Menswear, to ask to update their website. They used Shopify to sell their clothing online using a stock theme. The theme was old and lacked any optimisation, so I asked to update it to improve functionality and brand imagery. <ReadMore href='projects/zebra-menswear' /></p>
                  <p>I recently created a website for Archival Vintage Designer Fashion store, OOTO London. I worked closely with them to design and develop a minimalistic company website for advertisement purposes. <ReadMore href='projects/zebra-menswear' /></p>
                </div>
              </div>
              <div className={styles.container}>
                <h3>Aim:</h3>
                <h3>Crafting stars</h3>
                <Image className={styles.planet} src={Moon} width={138} height={138} />
                <div className={previewStyles.details}>
                  <h2>Independent Learning</h2>
                  <p>While my degree equipped me with a variety of skills - such as programming, researching, problem-solving and working to schedule - I wanted to focus my career on web development.</p>
                  <p>Therefore, I taught myself widely used web technologies such as Wordpress, Shopify Liquid, and most recently Next.js. Using these self-taught technologies, I was able to work with the aforementioned businesses to create the websites they needed.</p>
                  <h2>Available for work</h2>
                  <p>With my studies and experience, I am now looking to put my skills to use, both freelance and full-time.</p>
                  <p>If you're looking for help building a new website, or someone to join your team, please get in touch.</p>
                  <h2>Get in touch</h2>
                  <div className={styles.linkContainer}>
                    <ContactLinks />
                  </div>
                  <p className={styles.center}><ReadMore text='Or use this form' href='contact#form' /></p>
                </div>
              </div>
            </div>
          </HeroSection>
          {/* <SideNav slugs={[]} /> */}
          </div>
      </main>
    );
  }