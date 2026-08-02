import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ToastProvider } from "@/components/ui/Toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pathfinder.com"),
  title: "PathFinder | AI-Powered Career Discovery",
  description: "Career path discovery tool for students and early-career professionals. Map your skills to realistic paths with curated playlists from India's best educators.",
  keywords: ["career", "discovery", "students", "learning", "tech", "jobs"],
  authors: [{ name: "PathFinder Team" }],
  openGraph: {
    title: "PathFinder | AI-Powered Career Discovery",
    description: "Map your skills to realistic career paths in minutes. Get personalized learning roadmaps with curated content.",
    url: "https://pathfinder.com", // Replace with your actual domain
    siteName: "PathFinder",
    images: [
      {
        url: "/logo.png", // Ideally, use a full-width 1200x630 OG image
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PathFinder | Career Discovery",
    description: "Map your skills to realistic paths with curated playlists.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-background text-foreground min-h-screen selection:bg-accent selection:text-accent-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <NoiseOverlay />
            <div className="flex flex-col min-h-screen relative z-10">
              <Navbar />
              <main className="flex-1 flex flex-col">
                {children}
              </main>
              <Footer />
            </div>
            <ScrollToTop />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
