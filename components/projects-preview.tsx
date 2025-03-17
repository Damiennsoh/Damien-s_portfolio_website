import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment processing.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Da%27a_Connect-3Zs1d47uCKQOhN9RX8N4b1GUJvrGsl.png",
    tags: ["Web Development", "React", "Node.js"],
    link: "https://v0-local-online-marketplace.vercel.app/",
    isExternal: true,
  },
  {
    title: "Security Audit Tool",
    description:
      "An automated security audit tool that identifies vulnerabilities in web applications and provides remediation steps.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Cybersecurity", "Python", "Automation"],
    link: "/projects/security-audit",
    isExternal: false,
  },
  {
    title: "Brand Identity Design",
    description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Graphic Design", "Branding", "UI/UX"],
    link: "/projects/brand-identity",
    isExternal: false,
  },
]

export default function ProjectsPreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredProjects.map((project, index) => (
        <Link
          href={project.link}
          key={index}
          className="group"
          target={project.isExternal ? "_blank" : undefined}
          rel={project.isExternal ? "noopener noreferrer" : undefined}
        >
          <Card className="overflow-hidden h-full transition-all hover:shadow-md">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardContent className="pt-6">
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

