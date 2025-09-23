import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import WhyNibNab from "../components/WhyNibNab.tsx";
import Features from "../components/Features.tsx";
import Benefits from "../components/Benefits.tsx";
import Download from "../components/Download.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>NibNab - Color-Coded Clipboard Manager for Mac | Organize by Vibe</title>
        <meta
          name="description"
          content="NibNab is a macOS clipboard manager that automatically organizes everything you copy into four color-coded collections. No cloud, no accounts, just local markdown files. Transform clipboard chaos into color-coded calm."
        />
        <meta name="keywords" content="clipboard manager mac, macos clipboard app, clipboard organizer, clipboard history, markdown clipboard, local clipboard manager, swift clipboard app" />
        <meta name="author" content="Pablo (@pibulus)" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:title" content="NibNab - Color-Coded Clipboard Manager for Mac" />
        <meta property="og:description" content="Transform clipboard chaos into color-coded calm. Copy, pick a color, find it later. No cloud, no accounts, just markdown files." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nibnab.app" />
        <meta property="og:image" content="https://nibnab.app/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@pibulus" />
        <meta name="twitter:title" content="NibNab - Color-Coded Clipboard Manager for Mac" />
        <meta name="twitter:description" content="Transform clipboard chaos into color-coded calm. Copy, pick a color, find it later." />
        <meta name="twitter:image" content="https://nibnab.app/twitter-card.png" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "NibNab",
            "applicationCategory": "UtilitiesApplication",
            "operatingSystem": "macOS 13.0+",
            "description": "Color-coded clipboard manager for Mac that organizes everything you copy into markdown files",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Person",
              "name": "Pablo",
              "url": "https://github.com/pibulus"
            }
          }`}
        </script>

        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main class="min-h-screen">
        <Hero />
        <WhyNibNab />
        <Features />
        <Benefits />
        <Download />
        <Footer />
      </main>
    </>
  );
}