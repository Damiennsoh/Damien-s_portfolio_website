"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface ResumeDownloadButtonProps {
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export default function ResumeDownloadButton({
  className = "",
  size = "default",
  variant = "default",
}: ResumeDownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = () => {
    try {
      setIsGenerating(true)

      // Open the PDF page in a new window
      const pdfWindow = window.open("/resume/pdf", "_blank")

      if (!pdfWindow) {
        throw new Error("Popup blocked. Please allow popups and try again.")
      }

      // Wait for the page to load, then print to PDF
      pdfWindow.onload = () => {
        setTimeout(() => {
          pdfWindow.print()
          setIsGenerating(false)
        }, 1000) // Give it a second to fully render
      }
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Failed to generate PDF. Please try the print option instead.")
      setIsGenerating(false)
    }
  }

  return (
    <Button
      className={`group ${className}`}
      onClick={handleDownload}
      disabled={isGenerating}
      size={size}
      variant={variant}
    >
      {isGenerating ? (
        <>
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
          Preparing PDF...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </>
      )}
    </Button>
  )
}

