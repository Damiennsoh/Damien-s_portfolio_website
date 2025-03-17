import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
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
  {
    title: "IT Support Portal",
    description: "A help desk portal for IT support with ticket management, knowledge base, and user dashboard.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Web Development", "IT Support", "React"],
    link: "/projects/it-support-portal",
    isExternal: false,
  },
  {
    title: "Promotional Video",
    description: "A promotional video for a tech startup showcasing their product and value proposition.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Video Editing", "Motion Graphics", "Marketing"],
    link: "/projects/promotional-video",
    isExternal: false,
  },
  {
    title: "Network Security Assessment",
    description:
      "A comprehensive security assessment of a corporate network with vulnerability identification and remediation recommendations.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Cybersecurity", "Network Security", "Penetration Testing"],
    link: "/projects/network-security",
    isExternal: false,
  },
  {
    title: "Mobile App UI Design",
    description:
      "UI/UX design for a health and fitness mobile application with a focus on user experience and accessibility.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Graphic Design", "UI/UX", "Mobile"],
    link: "/projects/mobile-app-ui",
    isExternal: false,
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex data sets with filtering and export capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Web Development", "Data Analysis", "React"],
    link: "/projects/data-dashboard",
    isExternal: false,
  },
]

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
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

