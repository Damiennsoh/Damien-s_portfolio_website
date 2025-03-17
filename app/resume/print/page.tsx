import type { Metadata } from "next"
import ResumePrintClientPage from "./page.client"

export const metadata: Metadata = {
  title: "Print Resume | Damien Nsoh Ayine",
  description: "Print-friendly version of Damien Nsoh Ayine's resume",
}

export default function ResumePrintPage() {
  return <ResumePrintClientPage />
}

