import HomeSections, { sectionMetadata } from '@/components/HomeSections'
import HeroSection from '@/components/HeroSection'
import { SideNav } from '@/components/SideNav'

export default function Index() {
  return (
    <main>
      <div className="sections">
          <HeroSection
            home={true}
            btn_link={'#'+sectionMetadata[0]}
            subtitle='Web Developer' />
          <HomeSections />
          <SideNav slugs={sectionMetadata} />
      </div>
    </main>
  )
}