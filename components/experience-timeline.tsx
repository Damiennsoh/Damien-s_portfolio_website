import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      <div className="relative pl-6 border-l-2 border-muted-foreground/20 space-y-6">
        {/* Work Experience */}
        <div className="relative">
          <span className="absolute -left-[9px] h-4 w-4 rounded-full bg-primary"></span>
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle>IT Support Specialist</CardTitle>
                  <CardDescription>PsycaTech-Solutions</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge>2016 - Present</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Provided technical support for 200+ employees across multiple departments</li>
                <li>Implemented and maintained network security protocols</li>
                <li>Developed internal tools to streamline IT operations</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="relative">
          <span className="absolute -left-[9px] h-4 w-4 rounded-full bg-primary"></span>
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle>Python Developer</CardTitle>
                  <CardDescription>Achaeobyte</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge>2023 - 2024</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Led development of responsive web applications using React and Next.js</li>
                <li>Implemented security best practices across multiple projects</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="relative">
          <span className="absolute -left-[9px] h-4 w-4 rounded-full bg-primary"></span>
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle>Disease Control Officer</CardTitle>
                  <CardDescription>Ghana Health Service</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge>2014 - 2021</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Coordinated public health initiatives and community outreach programs</li>
                <li>Developed educational materials and digital resources</li>
                <li>Analyzed health data to inform program development</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Education */}
        <div className="relative">
          <span className="absolute -left-[9px] h-4 w-4 rounded-full bg-primary"></span>
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle>BSc in Computer Applications</CardTitle>
                  <CardDescription>Maharishi Markandeshwar University</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge>2021 - 2024</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Graduated with honors. Specialized in cybersecurity and web development. Completed capstone project on
                secure web application architecture.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

