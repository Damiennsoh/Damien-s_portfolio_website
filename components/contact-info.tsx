import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-20%20at%2015.54.29-s6u0yktiWH3JASQrIbQgF84q5oZ1QU.jpeg"
              alt="Damien Nsoh Ayine"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-sm text-muted-foreground">dnsoh20@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-sm text-muted-foreground">+233540564567</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-sm text-muted-foreground">Kumasi, Ghana</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Social Media</h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/Damiennsoh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-muted-foreground/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/damienayine"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-muted-foreground/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-muted-foreground/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Availability</h3>
          <p className="text-sm text-muted-foreground">
            Currently available for freelance work and full-time opportunities.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

