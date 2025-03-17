import type { Metadata } from "next"
import Link from "next/link"
import ResumeClientPage from "./ResumeClientPage"

export const metadata: Metadata = {
  title: "Resume | Damien Nsoh Ayine",
  description: "View and download my professional resume highlighting my skills, experience, and education.",
}

export default function ResumePage() {
  return (
    <>
      <ResumeClientPage />
      {/* Fallback link for direct access to PDF page */}
      <div className="text-center mt-4 text-sm text-muted-foreground">
        <p>
          Having trouble with the download button?{" "}
          <Link href="/resume/pdf" className="text-primary hover:underline" target="_blank">
            Open printable version
          </Link>
        </p>
      </div>
    </>
  )
}

