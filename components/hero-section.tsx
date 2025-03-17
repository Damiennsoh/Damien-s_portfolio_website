import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ResumeDownloadButton from "@/components/ResumeDownloadButton"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-primary">Damien Nsoh Ayine</span>
            <br />
            Computer Science Professional
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Specializing in web development, cybersecurity, IT support, graphic design, and video editing. Creating
            innovative solutions for complex technical challenges.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <ResumeDownloadButton size="lg" variant="outline" />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-20 dark:opacity-10">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1_2)">
            <path d="M600 0H0V600H600V0Z" fill="url(#paint0_linear_1_2)" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_1_2" x1="0" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(var(--primary))" />
              <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_1_2">
              <rect width="600" height="600" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  )
}

