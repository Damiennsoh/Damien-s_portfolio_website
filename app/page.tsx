import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import ProjectsPreview from "@/components/projects-preview"
import ExperienceTimeline from "@/components/experience-timeline"
import ContactSection from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">My Expertise</h2>
            <p className="text-muted-foreground max-w-[700px]">
              With a background in Computer Science and experience across multiple domains, I bring a unique perspective
              to technical challenges.
            </p>
          </div>

          <SkillsSection />

          <div className="flex justify-center mt-10">
            <Link href="/about">
              <Button variant="outline" className="group">
                Learn more about me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-[700px]">
                A selection of my work across web development, cybersecurity, and design.
              </p>
            </div>

            <ProjectsPreview />

            <div className="flex justify-center mt-10">
              <Link href="/projects">
                <Button variant="default" className="group">
                  View all projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Experience & Education</h2>
            <p className="text-muted-foreground max-w-[700px]">My professional journey and academic credentials.</p>
          </div>

          <ExperienceTimeline />

          <div className="flex justify-center mt-10">
            <Link href="/resume">
              <Button className="group">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </Link>
          </div>
        </section>

        <ContactSection />
      </main>
    </div>
  )
}

