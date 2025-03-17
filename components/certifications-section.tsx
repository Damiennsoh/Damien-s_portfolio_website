import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Code, Cloud, Network, BookOpen } from "lucide-react"

const certifications = [
  {
    title: "Certified in Cybersecurity (CC)",
    issuer: "ISC²",
    date: "2023",
    icon: Shield,
    description: "Entry-level cybersecurity certification validating foundational knowledge in information security",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: Cloud,
    description: "Foundational understanding of AWS Cloud services, architecture, security, and compliance",
  },
  {
    title: "Frontend Web Developer Certification",
    issuer: "Trilogy Education/Edx",
    date: "2023",
    icon: Code,
    description: "Comprehensive training in modern frontend web development technologies and practices",
  },
  {
    title: "CompTIA N+",
    issuer: "CompTIA",
    date: "2024",
    icon: Network,
    description:
      "Validates the essential knowledge and skills needed to design, configure, manage and troubleshoot networks",
  },
  {
    title: "Software Engineering",
    issuer: "HyperionDev",
    date: "2023",
    icon: BookOpen,
    description:
      "Comprehensive software engineering program covering programming fundamentals and development practices",
  },
]

export default function CertificationsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certifications.map((cert, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-start gap-4 pb-2">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              <cert.icon className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <CardTitle className="text-lg">{cert.title}</CardTitle>
              <CardDescription>{cert.issuer}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-2">
              <Badge variant="outline">{cert.date}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{cert.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

