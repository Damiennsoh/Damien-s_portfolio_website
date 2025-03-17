"use client"

import { useEffect } from "react"
import ResumeContent from "@/components/resume-content"

export default function ResumePdfContent() {
  // Add a class to the body for PDF-specific styling
  useEffect(() => {
    document.body.classList.add("pdf-mode")

    return () => {
      document.body.classList.remove("pdf-mode")
    }
  }, [])

  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <style jsx global>{`
        body.pdf-mode {
          background: white !important;
          color: black !important;
        }
        body.pdf-mode * {
          color: black !important;
        }
        @media print {
          @page {
            size: A4;
            margin: 1cm;
          }
        }
      `}</style>
      <ResumeContent />
    </div>
  )
}

