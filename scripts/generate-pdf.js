// This is a Node.js script to generate a PDF from the resume content
// You can run this script locally to generate the PDF file

const puppeteer = require("puppeteer")
const fs = require("fs")
const path = require("path")

async function generatePDF() {
  console.log("Launching browser...")
  const browser = await puppeteer.launch({ headless: "new" })
  const page = await browser.newPage()

  console.log("Navigating to resume page...")
  // Change this URL to your local development URL
  await page.goto("http://localhost:3000/resume/print", {
    waitUntil: "networkidle2",
  })

  console.log("Generating PDF...")
  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: {
      top: "1cm",
      right: "1cm",
      bottom: "1cm",
      left: "1cm",
    },
  })

  console.log("Saving PDF...")
  const outputPath = path.join(__dirname, "../public/Damien_Nsoh_Ayine_Resume.pdf")
  fs.writeFileSync(outputPath, pdf)

  console.log(`PDF saved to ${outputPath}`)
  await browser.close()
}

generatePDF().catch(console.error)

