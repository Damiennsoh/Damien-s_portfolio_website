import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch with me for job opportunities, collaborations, or questions.",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Me</h1>
        <p className="text-muted-foreground max-w-[700px] mb-8">
          Interested in working together? Fill out the form below or reach out through any of my contact channels.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}

