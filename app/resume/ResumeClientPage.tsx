"use client"

import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"
import ResumeContent from "@/components/resume-content"
import ResumeDownloadButton from "@/components/ResumeDownloadButton"

export default function ResumeClientPage() {
  const handlePrint = () => {
    // Open the print-friendly page in a new window
    const printWindow = window.open("/resume/pdf", "_blank")

    if (printWindow) {
      // Wait for the page to load, then print
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print()
        }, 1000) // Give it a second to fully render
      }
    } else {
      // If popup is blocked, just navigate to the print page
      window.location.href = "/resume/pdf"
    }
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 print:hidden">
        <h1 className="text-4xl font-bold tracking-tight">Resume</h1>
        <div className="flex gap-4">
          <Button variant="outline" className="group" onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <ResumeDownloadButton />
        </div>
      </div>

      <div className="bg-card border rounded-lg shadow-sm p-8 max-w-4xl mx-auto print:shadow-none print:border-none">
        <ResumeContent />
      </div>
    </div>
  )
}

