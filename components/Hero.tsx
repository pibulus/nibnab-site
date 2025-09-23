export default function Hero() {
  return (
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-nibnab-peach/20 via-white to-nibnab-lavender/20">
      {/* Floating background elements */}
      <div class="absolute inset-0 overflow-hidden">
        <div class="bubble-peach absolute top-20 left-10 w-32 h-32 rounded-full opacity-30 animate-blob" />
        <div class="bubble-lavender absolute top-40 right-20 w-24 h-24 rounded-full opacity-30 animate-blob animation-delay-2000" />
        <div class="bubble-sky absolute bottom-20 left-1/3 w-40 h-40 rounded-full opacity-30 animate-blob animation-delay-4000" />
        <div class="bubble-sage absolute bottom-40 right-1/4 w-28 h-28 rounded-full opacity-30 animate-blob" />
      </div>

      {/* Main content */}
      <div class="relative z-10 text-center px-6">
        <div class="mb-8 animate-float">
          <h1 class="font-bebas text-8xl md:text-9xl text-nibnab-dark mb-2 tracking-wide">
            NibNab
          </h1>
          <div class="flex justify-center gap-2 mt-4">
            <span class="w-4 h-4 bg-nibnab-peach rounded-full" />
            <span class="w-4 h-4 bg-nibnab-lavender rounded-full" />
            <span class="w-4 h-4 bg-nibnab-sky rounded-full" />
            <span class="w-4 h-4 bg-nibnab-sage rounded-full" />
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
          >
            Download NibNab
          </a>
          <a
            href="https://github.com/pibulus/nibnab"
            target="_blank"
            rel="noopener noreferrer"
            class="neo-shadow neo-border bg-white hover:bg-gray-50 px-8 py-4 font-space font-bold text-lg text-nibnab-dark transform hover:-rotate-1 hover:scale-105 transition-all"
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