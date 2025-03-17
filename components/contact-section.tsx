import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="bg-muted py-12 md:py-16 lg:py-20">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Let's Work Together</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto mb-8">
          Interested in collaborating or have a project in mind? I'm always open to discussing new opportunities.
        </p>
        <Link href="/contact">
          <Button size="lg" className="group">
            Get In Touch
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  )
}

