import HeroSection from "@/components/HeroSection";
import { SideNav } from "@/components/SideNav";

export default function AboutPage() {
    return (
      <main>
        <div className="sections">
          <HeroSection
            subtitle='Origin: Earth'
            btn_text='Or use this form'
            btn_link={'#form'}
          />
          <SideNav slugs={[]} />
          </div>
      </main>
    );
  }