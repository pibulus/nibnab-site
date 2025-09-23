export default function Hero() {
  return (
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-nibnab-peach/20 via-white to-nibnab-lavender/20">
      {/* Floating background elements */}
      <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div class="bubble-peach absolute top-20 left-10 w-32 h-32 rounded-full opacity-30 animate-blob" />
        <div class="bubble-lavender absolute top-40 right-20 w-24 h-24 rounded-full opacity-30 animate-blob animation-delay-2000" />
        <div class="bubble-sky absolute bottom-20 left-1/3 w-40 h-40 rounded-full opacity-30 animate-blob animation-delay-4000" />
        <div class="bubble-sage absolute bottom-40 right-1/4 w-28 h-28 rounded-full opacity-30 animate-blob" />
      </div>

      {/* Main content */}
      <div class="relative z-10 text-center px-6">
        <div class="mb-8 animate-float">
          <h1 class="font-titan text-7xl md:text-8xl text-nibnab-dark mb-2 transform hover:scale-110 transition-transform">
            NibNab
          </h1>
          <div class="flex justify-center gap-3 mt-4" role="presentation" aria-label="Four color collections">
            <span class="w-6 h-6 bg-nibnab-peach neo-border-thin rounded" aria-label="Peach collection" />
            <span class="w-6 h-6 bg-nibnab-lavender neo-border-thin rounded" aria-label="Lavender collection" />
            <span class="w-6 h-6 bg-nibnab-sky neo-border-thin rounded" aria-label="Sky collection" />
            <span class="w-6 h-6 bg-nibnab-sage neo-border-thin rounded" aria-label="Sage collection" />
          </div>
        </div>

        <h2 class="font-space font-bold text-2xl md:text-3xl text-nibnab-dark/90 mb-6 max-w-2xl mx-auto">
          Copy. Color. Keep.
        </h2>

        <p class="font-quicksand font-semibold text-lg text-nibnab-dark/70 mb-12 max-w-xl mx-auto">
          Your clipboard, sorted by vibe.<br/>
          No cloud. No fuss. Just clips.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#download"
            class="neo-shadow neo-border bg-nibnab-peach hover:bg-nibnab-peach/80 px-8 py-4 font-space font-bold text-lg text-nibnab-dark transform hover:rotate-1 hover:scale-105 transition-all"
            aria-label="Download NibNab clipboard manager for macOS"
          >
            Download NibNab
          </a>
          <a
            href="https://github.com/pibulus/nibnab"
            target="_blank"
            rel="noopener noreferrer"
            class="neo-shadow neo-border bg-white hover:bg-gray-50 px-8 py-4 font-space font-bold text-lg text-nibnab-dark transform hover:-rotate-1 hover:scale-105 transition-all"
            aria-label="View NibNab source code on GitHub"
          >
            View on GitHub
          </a>
        </div>

        <div class="mt-12 text-sm text-nibnab-dark/50 font-quicksand">
          macOS 13.0+ • Swift • Anti-scale • Free forever
        </div>
      </div>
    </section>
  );
}