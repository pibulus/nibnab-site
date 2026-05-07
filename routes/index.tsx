import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import WhyNibNab from "../components/WhyNibNab.tsx";
import Features from "../components/Features.tsx";
import Benefits from "../components/Benefits.tsx";
import Download from "../components/Download.tsx";
import Footer from "../components/Footer.tsx";
import Divider from "../components/Divider.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>NibNab - A highlighter for your digital life 🎨</title>
        <meta
          name="description"
          content="Your clipboard deserves better than Cmd+V into Notes.app. NibNab captures everything you copy and organizes it by color. Four highlighters, infinite possibilities. No cloud, no accounts, no tracking. Free for macOS 13.0+"
        />
        <meta name="keywords" content="clipboard manager mac, macos clipboard, color coded clipboard, clipboard organizer, clipboard history, markdown clipboard, local clipboard manager, swift clipboard app, menubar clipboard, privacy clipboard, free clipboard manager" />
        <meta name="author" content="Pablo Alvarado (@pibulus)" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FFEB3B" />

        {/* Open Graph */}
        <meta property="og:site_name" content="NibNab" />
        <meta property="og:title" content="NibNab - A highlighter for your digital life" />
        <meta property="og:description" content="Your clipboard deserves better than Cmd+V into Notes.app. Color-coded clipboard manager for Mac that respects your privacy. Free forever." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nibnab.app" />
        <meta property="og:image" content="https://nibnab.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="NibNab - Color-coded clipboard manager with four highlighter colors" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pibulus" />
        <meta name="twitter:creator" content="@pibulus" />
        <meta name="twitter:title" content="NibNab - A highlighter for your digital life" />
        <meta name="twitter:description" content="Color-coded clipboard manager for Mac. Copy, pick a color, find it later. No cloud, no tracking, no BS." />
        <meta name="twitter:image" content="https://nibnab.app/twitter-card.png" />
        <meta name="twitter:image:alt" content="NibNab clipboard manager with four highlighter colors" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "NibNab",
            "alternateName": "NibNab Clipboard Manager",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "macOS 13.0+",
            "description": "A highlighter for your digital life. Color-coded clipboard manager for Mac that captures everything you copy and organizes it into four highlighter colors. Privacy-first, local-only storage.",
            "url": "https://nibnab.app",
            "downloadUrl": "https://github.com/pibulus/nibnab/releases",
            "softwareVersion": "1.0",
            "datePublished": "2025-01-01",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "ratingCount": "1"
            },
            "author": {
              "@type": "Person",
              "name": "Pablo Alvarado",
              "url": "https://github.com/pibulus",
              "sameAs": [
                "https://github.com/pibulus",
                "https://twitter.com/pibulus"
              ]
            },
            "featureList": [
              "Smart clipboard capture",
              "Four-color organization system",
              "Powerful search and sorting",
              "Markdown and plain text export",
              "Privacy-first local storage",
              "Native macOS design"
            ],
            "screenshot": "https://nibnab.app/screenshot.png",
            "softwareRequirements": "macOS 13.0 or later",
            "memoryRequirements": "10 MB",
            "storageRequirements": "10 MB"
          }`}
        </script>

        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main class="min-h-screen">
        <Hero />
        <Divider type="wave" color="dark" />
        <WhyNibNab />
        <Divider type="dots" />
        <Features />
        <Divider type="zigzag" />
        <Benefits />
        <Divider type="dots" />
        <Download />
        <Footer />
      </main>
    </>
  );
}