import type { Metadata } from "next"
import ProjectGrid from "@/components/project-grid"
import ProjectFilter from "@/components/project-filter"

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Explore my projects across web development, cybersecurity, graphic design, and video editing.",
}

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-16 space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
        <p className="text-muted-foreground max-w-[700px]">
          Browse through my portfolio of work across different domains including web development, cybersecurity, graphic
          design, and video editing.
        </p>
      </div>

      <ProjectFilter />
      <ProjectGrid />
    </div>
  )
}

