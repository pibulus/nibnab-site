export default function Hero() {
  return (
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Floating highlighter bubbles - actual NibNab colors */}
      <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div class="bubble-yellow absolute top-20 left-10 w-32 h-32 rounded-full opacity-20 animate-blob" />
        <div class="bubble-orange absolute top-40 right-20 w-24 h-24 rounded-full opacity-20 animate-blob animation-delay-2000" />
        <div class="bubble-pink absolute bottom-20 left-1/3 w-40 h-40 rounded-full opacity-20 animate-blob animation-delay-4000" />
        <div class="bubble-purple absolute bottom-40 right-1/4 w-28 h-28 rounded-full opacity-20 animate-blob" />
      </div>

      {/* Main content */}
      <div class="relative z-10 text-center px-6">
        <div class="mb-8 animate-float">
          <h1 class="font-fredoka font-bold text-8xl md:text-9xl bg-gradient-to-r from-nibnab-yellow via-nibnab-orange to-nibnab-pink bg-clip-text text-transparent mb-2 transform hover:scale-105 transition-transform hover:-rotate-2">
            NibNab
          </h1>
          <div class="flex justify-center gap-3 mt-4" role="presentation" aria-label="Four highlighter colors">
            <span class="w-8 h-8 bg-nibnab-yellow neo-border-thin rounded-lg hover:rotate-12 transition-transform cursor-pointer" aria-label="Yellow highlighter" />
            <span class="w-8 h-8 bg-nibnab-orange neo-border-thin rounded-lg hover:rotate-12 transition-transform cursor-pointer" aria-label="Orange highlighter" />
            <span class="w-8 h-8 bg-nibnab-pink neo-border-thin rounded-lg hover:rotate-12 transition-transform cursor-pointer" aria-label="Pink highlighter" />
            <span class="w-8 h-8 bg-nibnab-purple neo-border-thin rounded-lg hover:rotate-12 transition-transform cursor-pointer" aria-label="Purple highlighter" />
          </div>
        </div>

        <h2 class="font-space font-black text-3xl md:text-4xl text-nibnab-dark mb-6 max-w-2xl mx-auto">
          A highlighter for your digital life 🎨
        </h2>

        <p class="font-quicksand font-bold text-xl text-nibnab-dark/70 mb-12 max-w-xl mx-auto leading-relaxed">
          Your clipboard deserves better than Cmd+V into Notes.app
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#download"
            class="neo-shadow neo-border bg-nibnab-yellow hover:bg-nibnab-yellow/90 px-8 py-4 font-space font-black text-lg text-nibnab-dark transform hover:rotate-1 hover:scale-105 transition-all"
            aria-label="Download NibNab clipboard manager for macOS"
          >
            Download for Mac
          </a>
          <a
            href="https://github.com/pibulus/nibnab"
            target="_blank"
            rel="noopener noreferrer"
            class="neo-shadow neo-border bg-white hover:bg-gray-50 px-8 py-4 font-space font-black text-lg text-nibnab-dark transform hover:-rotate-1 hover:scale-105 transition-all"
            aria-label="View NibNab source code on GitHub"
          >
            View on GitHub
          </a>
        </div>

        <div class="mt-12 text-sm text-nibnab-dark/50 font-quicksand font-bold">
          macOS 13.0+ • Free forever • No cloud BS
        </div>
      </div>
    </section>
  );
}