import type { Metadata } from "next"
import ResumePdfContent from "./pdf-content"

export const metadata: Metadata = {
  title: "Resume PDF | Damien Nsoh Ayine",
  description: "PDF version of Damien Nsoh Ayine's resume",
}

export default function ResumePdfPage() {
  return <ResumePdfContent />
}

