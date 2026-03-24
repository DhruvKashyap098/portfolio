import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dhruv Kumar | Portfolio",
  description:
    "Portfolio of Dhruv Kumar, a B.Tech. Information Technology student focused on web development, Python applications, and practical problem solving.",
  keywords: [
    "Dhruv Kumar",
    "portfolio",
    "Next.js",
    "web developer",
    "B.Tech Information Technology",
    "Haldia Institute of Technology",
  ],
  authors: [{ name: "Dhruv Kumar" }],
  openGraph: {
    title: "Dhruv Kumar | Portfolio",
    description:
      "B.Tech. IT student building practical products with web technologies, Python, and cloud-curious problem solving.",
    siteName: "Dhruv Kumar Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
