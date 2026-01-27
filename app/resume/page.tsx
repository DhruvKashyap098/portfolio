import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { Download, Eye } from "lucide-react"
import Link from "next/link"
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function ResumePage() {
const pdfUrl = "https://10.215.59.244:3000/resume.pdf"
// for local dev:
// const pdfUrl = "/resume.pdf"

// const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
// const pdfUrl = `${siteUrl}/resume.pdf`



  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-24">
      <div className="mx-auto max-w-5xl space-y-10">
        
        {/* ===== Header ===== */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">My Resume</h1>
          <p className="text-muted-foreground">
            View or download my resume
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            {/* View Button */}
            <HoverBorderGradient  as="button" clockwise={true} className="w-50">
              <Link href="/resume.pdf" target="_blank" className="flex justify-center items-center">
                <Eye className="mr-2 h-4 w-6" />
                <span>View Resume</span>
              </Link>
            </HoverBorderGradient>

            {/* Download Button */}
            <HoverBorderGradient as="button" clockwise={false} className="w-50">
              <a href="/resume.pdf" className="flex justify-center items-center" target="_blank" rel="noopener noreferrer" download>
                <Download className="mr-2 h-4 w-6" />
                <span>Download Resume</span>
              </a>
            </HoverBorderGradient>
          </div>
        </div>

        {/* Google-style PDF Preview */}
        <div className="h-[85vh] w-full overflow-hidden rounded-xl border">
          <iframe
            src={`https://docs.google.com/gview?url=${encodeURIComponent(
              pdfUrl
            )}&embedded=true`}
            className="h-full w-full"
            title="Resume Preview"
          />
        </div>

      </div>
      <BackgroundBeams />
    </main>
  )
}
