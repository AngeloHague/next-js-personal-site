import HomeSections, { HomeSectionSideNav, sectionMetadata } from '@/components/HomeSections'
import HeroSection from '@/components/HeroSection'

export default function Index() {
  return (
    <main>
      <div className="sections">
          <HeroSection
            home={true}
            btn_link={'#'+sectionMetadata[0]}
            subtitle='Web Developer' />
          <HomeSections />
          <HomeSectionSideNav />
      </div>
    </main>
  )
}