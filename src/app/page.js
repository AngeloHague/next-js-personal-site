import HomeSections, { sectionMetadata } from '@/components/HomeSections'
import HeroSection from '@/components/HeroSection'
import { SideNav } from '@/components/SideNav'

export const metadata = {
  title: 'Angelo Hague Web Development',
  description: 'Derbyshire and South Yorkshire based Freelance Web Developer. Get affordable responsive website design and development in Shopify, WordPress, React and more!',
  keywords: ['responsive web design', 'wordpress web design', 'junior web developer', 'web programming', 'junior front end developer', 'ecommerce website development', 'web developer', 'web design near me', 'front end developer', 'front end web developer', 'shopify wesite design'].join(', '),
}

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