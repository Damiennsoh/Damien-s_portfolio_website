import { Code, Shield, Palette, Video, Database, Cloud, MessageSquare, Clock, Brain, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const technicalSkills = [
  {
    title: "Web Development",
    description:
      "Building responsive, accessible, and performant web applications using modern frameworks and technologies.",
    icon: Code,
    items: ["JavaScript", "React.js", "Next.js", "TypeScript", "HTML/CSS", "Node.js"],
  },
  {
    title: "Cybersecurity",
    description: "Implementing security best practices and protecting systems from vulnerabilities and threats.",
    icon: Shield,
    items: ["Mandiant", "Cloudflare", "Splunk", "Vulnerability Assessment", "Risk Management", "Security Auditing"],
  },
  {
    title: "Programming",
    description: "Developing applications and scripts using various programming languages and frameworks.",
    icon: Database,
    items: ["Python", "Bash Scripting", "R", "Pandas", "MySQL", "Linux"],
  },
  {
    title: "Graphic Design",
    description: "Creating visual content that communicates messages effectively and aesthetically.",
    icon: Palette,
    items: ["Logo Design", "Branding", "Letterhead Designs", "Wedding Cards", "UI/UX Design"],
  },
  {
    title: "Media Editing",
    description: "Producing engaging video and audio content with professional editing techniques and effects.",
    icon: Video,
    items: ["Video Editing", "Audio Editing", "Motion Graphics", "Color Grading", "Visual Effects"],
  },
  {
    title: "Software Tools",
    description: "Proficient in using various software tools for development, design, and productivity.",
    icon: Cloud,
    items: ["MS Office", "VSCode", "Git/GitHub", "Adobe Photoshop", "Stata", "AWS"],
  },
]

const softSkills = [
  {
    title: "Communication",
    description: "Effectively conveying ideas and information to diverse audiences.",
    icon: MessageSquare,
    items: [
      "Public Speaking",
      "Effective Communication",
      "Presentation Skills",
      "Technical Writing",
      "Active Listening",
    ],
  },
  {
    title: "Adaptability",
    description: "Quickly adjusting to new conditions and environments.",
    icon: Clock,
    items: ["Time Management", "Flexibility", "Learning Agility", "Stress Management", "Change Management"],
  },
  {
    title: "Critical Thinking",
    description: "Analyzing information objectively to make reasoned judgments.",
    icon: Brain,
    items: ["Analytical Thinking", "Problem Solving", "Decision Making", "Strategic Planning", "Research Skills"],
  },
  {
    title: "Interpersonal Skills",
    description: "Building and maintaining positive relationships with others.",
    icon: Heart,
    items: ["Empathy", "Teamwork", "Leadership", "Conflict Resolution", "Cultural Sensitivity"],
  },
]

export default function SkillsSection() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((skill, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <skill.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{skill.description}</CardDescription>
                <ul className="text-sm space-y-1">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {softSkills.map((skill, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    <skill.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{skill.description}</CardDescription>
                <ul className="text-sm space-y-1">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

