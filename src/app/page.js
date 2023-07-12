import HomeSections, { sectionMetadata } from '@/components/HomeSections'
import HeroSection from '@/components/HeroSection'
import { SideNav } from '@/components/SideNav'

export async function getInititalProps() {
  const svgFilePath = join(process.cwd(), 'assets', 'lincoln_cathedral.svg');
  const svg = readFileSync(svgFilePath, 'utf-8');
  return {
    props: {
      svg,
    }
  };
}

export default function Index({svg}) {
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