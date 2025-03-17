import type { Metadata } from "next"
import Image from "next/image"
import SkillsSection from "@/components/skills-section"
import CertificationsSection from "@/components/certifications-section"
import ResumeDownloadButton from "@/components/ResumeDownloadButton"

export const metadata: Metadata = {
  title: "About Me | Damien Nsoh Ayine",
  description: "Learn more about my background, skills, and expertise in technology and design.",
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 space-y-16">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
          <p className="text-muted-foreground mb-6">
            I'm a Computer Science graduate with a passion for solving complex problems through technology. My diverse
            background spans web development, cybersecurity, IT support, graphic design, and video editing and public
            health
          </p>
          <p className="text-muted-foreground mb-6">
            With experience in public health and a strong technical foundation, I bring a unique perspective to projects
            that require both technical expertise and human-centered design.
          </p>
          <ResumeDownloadButton />
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary/20">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-20%20at%2015.54.29-s6u0yktiWH3JASQrIbQgF84q5oZ1QU.jpeg"
              alt="Damien Nsoh Ayine"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">My Skills</h2>
        <SkillsSection />
      </section>

      <section>
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Certifications</h2>
        <CertificationsSection />
      </section>
    </div>
  )
}

