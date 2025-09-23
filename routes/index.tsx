import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import Features from "../components/Features.tsx";
import Download from "../components/Download.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>NibNab - A menu bar friend that collects the good bits</title>
        <meta
          name="description"
          content="NibNab catches everything you copy and sorts it into four color-coded collections. No cloud, no accounts, just your clips. macOS clipboard manager."
        />
        <meta property="og:title" content="NibNab - Color-coded clipboard manager for Mac" />
        <meta
          property="og:description"
          content="A menu bar friend that collects the good bits. Four colors, infinite possibilities."
        />
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <main class="min-h-screen">
        <Hero />
        <Features />
        <Download />
        <Footer />
      </main>
    </>
  );
}