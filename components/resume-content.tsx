import { Badge } from "@/components/ui/badge"

export default function ResumeContent() {
  return (
    <div id="resume-content" className="space-y-8 bg-background text-foreground">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-1">Damien Nsoh Ayine</h1>
        <p className="text-muted-foreground">Computer Science Professional</p>
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-2 text-sm">
          <span>dnsoh20@gmail.com</span>
          <span>+233540564567</span>
          <span>Kumasi, Ghana</span>
        </div>
        <div className="flex justify-center gap-3 mt-2">
          <a
            href="https://github.com/Damiennsoh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            GitHub
          </a>
          <span className="text-muted-foreground">•</span>
          <a
            href="https://linkedin.com/in/damienayine"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold border-b pb-1 mb-3">Summary</h2>
        <p className="text-sm">
          Computer Science graduate with expertise in web development, cybersecurity, IT support, graphic design, and
          video editing. Passionate about creating innovative solutions and leveraging technology to solve complex
          problems. Strong background in both technical implementation and creative design.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-bold border-b pb-1 mb-3">Skills</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Technical Skills</h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Bash Scripting</Badge>
                  <Badge variant="outline">R</Badge>
                  <Badge variant="outline">Pandas</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">Linux</Badge>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Web Development</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">HTML/CSS</Badge>
                  <Badge variant="outline">React.js</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Node.js</Badge>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Cybersecurity</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Mandiant</Badge>
                  <Badge variant="outline">Cloudflare</Badge>
                  <Badge variant="outline">Splunk</Badge>
                  <Badge variant="outline">Vulnerability Assessment</Badge>
                  <Badge variant="outline">Risk Management</Badge>
                  <Badge variant="outline">Security Auditing</Badge>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Graphics & Design</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Logo Design</Badge>
                  <Badge variant="outline">Branding</Badge>
                  <Badge variant="outline">Letterhead Designs</Badge>
                  <Badge variant="outline">Wedding Cards</Badge>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Media Editing</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Video Editing</Badge>
                  <Badge variant="outline">Audio Editing</Badge>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Software Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">MS Office</Badge>
                  <Badge variant="outline">Stata</Badge>
                  <Badge variant="outline">VSCode</Badge>
                  <Badge variant="outline">Git/GitHub</Badge>
                  <Badge variant="outline">Adobe Photoshop</Badge>
                  <Badge variant="outline">AWS</Badge>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Public Speaking</Badge>
              <Badge variant="outline">Effective Communication</Badge>
              <Badge variant="outline">Adaptability</Badge>
              <Badge variant="outline">Time Management</Badge>
              <Badge variant="outline">Analytical Thinking</Badge>
              <Badge variant="outline">Empathy</Badge>
              <Badge variant="outline">Problem Solving</Badge>
              <Badge variant="outline">Teamwork</Badge>
              <Badge variant="outline">Leadership</Badge>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold border-b pb-1 mb-3">Experience</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Python Developer</h3>
                <p className="text-sm text-muted-foreground">Achaeobyte</p>
              </div>
              <p className="text-sm">2023 - 2024</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              <li>Led development of responsive web applications using React and Next.js</li>
              <li>Implemented security best practices across multiple projects</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>Collaborated with design team to implement UI/UX improvements</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">IT Support Specialist</h3>
                <p className="text-sm text-muted-foreground">PsycaTech-Solutions</p>
              </div>
              <p className="text-sm">2016 - Present</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              <li>Provided technical support for 200+ employees across multiple departments</li>
              <li>Implemented and maintained network security protocols</li>
              <li>Developed internal tools to streamline IT operations</li>
              <li>Conducted training sessions on cybersecurity best practices</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">Disease Control Officer (Public Health)</h3>
                <p className="text-sm text-muted-foreground">Ghana Health Service</p>
              </div>
              <p className="text-sm">2014 - 2021</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              <li>Coordinated public health initiatives and community outreach programs</li>
              <li>Developed educational materials and digital resources</li>
              <li>Analyzed health data to inform program development</li>
              <li>Collaborated with community partners to implement health initiatives</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold border-b pb-1 mb-3">Education</h2>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">BSc in Computer Applications</h3>
            <p className="text-sm text-muted-foreground">Maharishi Markandeshwar University</p>
          </div>
          <p className="text-sm">2021 - 2024</p>
        </div>
        <p className="text-sm mt-2">
          Graduated with honors. Specialized in cybersecurity and web development. Completed capstone project on secure
          web application architecture.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-bold border-b pb-1 mb-3">Certifications</h2>
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li>
            <span className="font-medium">Certified in Cybersecurity(CC)</span> - ISC², 2023
          </li>
          <li>
            <span className="font-medium">AWS Certified Cloud Practitioner</span> - Amazon Web Services, 2024
          </li>
          <li>
            <span className="font-medium">Frontend Web Developer Certification</span> - Trilogy Education/Edx, 2023
          </li>
          <li>
            <span className="font-medium">CompTIA N+</span> - CompTIA, 2024
          </li>
          <li>
            <span className="font-medium">Software Engineering</span> - HyperionDev, 2023
          </li>
        </ul>
      </div>
    </div>
  )
}

