import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Path to the static PDF file
    const filePath = path.join(process.cwd(), "public", "Damien_Nsoh_Ayine_Resume.pdf")

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Resume PDF not found" }, { status: 404 })
    }

    // Read the file
    const fileBuffer = fs.readFileSync(filePath)

    // Return the file as a response
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Damien_Nsoh_Ayine_Resume.pdf"',
      },
    })
  } catch (error) {
    console.error("Error serving PDF:", error)
    return NextResponse.json({ error: "Failed to serve PDF" }, { status: 500 })
  }
}

