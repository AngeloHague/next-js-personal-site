import HeroSection from "@/components/HeroSection";
import ProjectSections from "./ProjectSections";
import { projectMetadata } from "@/lib/projects";
import { SideNav } from "@/components/SideNav";
import ProjectStars from "./ProjectStars";

export const metadata = {
  title: 'Projects | Angelo Hague',
  description: 'An interactive map of my recent projects. Scroll down to view them in a grid instead.',
}

export default function ProjectsPage() {
    return (
      <main>
        <div className="sections projects">
          <HeroSection
            subtitle='Select a star'
            btn_text='Or read below'
            btn_link={'#' + Object.keys(projectMetadata)[0]}
            low_moon={true}
          >
            <ProjectStars projects={projectMetadata} />
          </HeroSection>
          <ProjectSections projectMetadata={projectMetadata} />
          <SideNav slugs={Object.keys(projectMetadata)} columns={2} />
      </div>
      </main>
    );
  }