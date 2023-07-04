import HeroSection from "@/components/HeroSection";
import { SideNav } from "@/components/SideNav";
import ContactForm from "./ContactForm";

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
          <section id='form'>
            <h2>Contact Form</h2>
            <ContactForm />
          </section>
      </div>
      </main>
    );
  }