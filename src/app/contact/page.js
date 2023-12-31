import HeroSection from "@/components/HeroSection";
import { SideNav } from "@/components/SideNav";
import ContactForm from "./ContactForm";
import ContactLinks from "./ContactLinks";
import styles from './page.module.css'

export const metadata = {
  title: 'Contact | Angelo Hague',
  description: 'Here are all the ways you can get in touch with me, including a nice little form below.',
  keywords: ['web developer linkedin', 'web developer twitter', 'web developer github', 'contact web developer', 'web designer linkedin', 'web designer twitter', 'web designer github', 'contact web designer'].join(', ')
}


export default function ContactPage() {
    return (
      <main>
        <div className="sections">
          <HeroSection
            btn_text='Or use this form'
            btn_link={'#form'}
            low_moon={true}
          >
            <h3 className={styles.findMe}>Find me on</h3>
            <ContactLinks />
          </HeroSection>
          <SideNav slugs={['#form']} />
          <section id='form'>
            <h2>Contact Form</h2>
            <ContactForm />
          </section>
      </div>
      </main>
    );
  }