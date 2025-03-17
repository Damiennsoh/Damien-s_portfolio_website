"use client"

import ResumeContent from "@/components/resume-content"

export default function ResumePrintClientPage() {
  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 1cm;
          }
          body {
            background: white !important;
            color: black !important;
          }
        }
      `}</style>
      <ResumeContent />
    </div>
  )
}

