import HeroSection from "@/components/HeroSection";
import ProjectSections from "./ProjectSections";
import { getProjectMetadata } from "@/lib/projects";
import { SideNav } from "@/components/SideNav";

export const metadata = {
  title: 'Projects | Angelo Hague',
  description: 'An interactive map of my recent projects. Scroll down to view them in a grid instead.',
}

export default function ProjectsPage() {
  const projectMetadata = getProjectMetadata();
    return (
      <main>
        <div className="sections">
          <HeroSection
            subtitle='Select a star'
            btn_text='Or read below'
            btn_link={'#' + Object.keys(projectMetadata)[0]}
          />
          <ProjectSections projectMetadata={projectMetadata} />
          <SideNav slugs={Object.keys(projectMetadata)} />
      </div>
      </main>
    );
  }