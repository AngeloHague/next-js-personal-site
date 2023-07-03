import HeroSection from "@/components/HeroSection";
import { SideNav } from "@/components/SideNav";
import styles from './page.module.css'
import { quicksand } from "@/lib/fonts";

export const metadata = {
  title: 'Contact | Angelo Hague',
  description: 'Here are all the ways you can get in touch with me, including a nice little form below.',
}


export default function ContactPage() {
    return (
      <main>
        <div className="sections">
          <HeroSection
            subtitle='Find me on'
            btn_text='Or use this form'
            btn_link={'#form'}
          />
          <SideNav slugs={['#form']} />
          <section>
            <h2>Contact Form</h2>
            <form className={styles.contact} name="contact" id='form' method="POST" data-netlify="true">
                <label>Your Name: <input className={quicksand.className} type="text" name="name" /></label>
                <label>Your Email: <input className={quicksand.className} type="email" name="email" /></label>
                <label>Your Role: <select className={quicksand.className} name="role[]">
                  <option value="Customer">Customer</option>
                  <option value="Employer">Employer</option>
                </select></label>
                <label>Message: <textarea className={quicksand.className} name="message"></textarea></label>
                <button type="submit">Send</button>
            </form>
          </section>
      </div>
      </main>
    );
  }