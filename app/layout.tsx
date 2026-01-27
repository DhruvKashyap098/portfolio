import "./globals.css"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { navItems } from "@/lib/constants"
import { Providers } from "./providers"
import { greatVibes } from "./_fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className={greatVibes.className} hidden />
          <FloatingNav className="relative top-4" navItems={navItems} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
