export default function WhyNibNab() {
  return (
    <section class="py-24 px-6 bg-nibnab-dark text-white relative overflow-hidden">
      {/* Background pattern */}
      <div class="absolute inset-0 opacity-10" aria-hidden="true">
        <div class="absolute top-0 left-0 w-64 h-64 bg-nibnab-peach rounded-full blur-3xl" />
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-nibnab-lavender rounded-full blur-3xl" />
      </div>
      <div class="max-w-5xl mx-auto">
        {/* The Problem */}
        <div class="text-center mb-16">
          <h2 class="font-modak text-6xl md:text-7xl text-white mb-6 animate-wiggle">
            You Copy 50 Things a Day
          </h2>
          <p class="font-space font-bold text-2xl text-nibnab-peach mb-4">
            Where do they go?
          </p>
          <p class="font-quicksand font-semibold text-lg text-white/80 max-w-2xl mx-auto">
            Lost in random docs. Buried in Notes.app. Gone forever.<br/>
            Your ideas deserve better than digital limbo.
          </p>
        </div>

        {/* The Guide */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="neo-shadow neo-border rounded-xl p-6 bg-nibnab-peach/90 transform hover:rotate-1 hover:scale-105 transition-all">
            <div class="text-4xl mb-4">🎯</div>
            <h3 class="font-space font-bold text-xl text-nibnab-dark mb-2">
              Four Colors
            </h3>
            <p class="font-quicksand font-semibold text-sm text-nibnab-dark/70">
              Instant organization without thinking. Your brain already thinks in colors.
            </p>
          </div>

          <div class="neo-shadow neo-border rounded-xl p-6 bg-nibnab-lavender/90 transform hover:-rotate-1 hover:scale-105 transition-all">
            <div class="text-4xl mb-4">💾</div>
            <h3 class="font-space font-bold text-xl text-nibnab-dark mb-2">
              Local Storage
            </h3>
            <p class="font-quicksand font-semibold text-sm text-nibnab-dark/70">
              You own your clips forever. No cloud, no accounts, just markdown files.
            </p>
          </div>

          <div class="neo-shadow neo-border rounded-xl p-6 bg-nibnab-sky/90 transform hover:rotate-1 hover:scale-105 transition-all">
            <div class="text-4xl mb-4">⚡</div>
            <h3 class="font-space font-bold text-xl text-nibnab-dark mb-2">
              Menu Bar Magic
            </h3>
            <p class="font-quicksand font-semibold text-sm text-nibnab-dark/70">
              Always there, never in the way. Copy, pick color, done.
            </p>
          </div>
        </div>

        {/* The Plan */}
        <div class="neo-shadow neo-border rounded-2xl p-12 bg-white text-center">
          <h3 class="font-bebas text-4xl text-nibnab-dark mb-8 tracking-wide">
            The Dead Simple Plan
          </h3>
          <div class="flex flex-col md:flex-row items-center justify-center gap-8">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 bg-nibnab-peach neo-border-thin rounded-xl flex items-center justify-center font-bebas text-2xl">
                1
              </div>
              <div class="text-left">
                <p class="font-space font-bold text-nibnab-dark">Copy Anything</p>
                <p class="font-quicksand font-semibold text-sm text-nibnab-dark/60">Text, links, code</p>
              </div>
            </div>

            <div class="hidden md:block text-3xl">→</div>

            <div class="flex items-center gap-4">
              <div class="w-16 h-16 bg-nibnab-lavender neo-border-thin rounded-xl flex items-center justify-center font-bebas text-2xl">
                2
              </div>
              <div class="text-left">
                <p class="font-space font-bold text-nibnab-dark">Pick a Color</p>
                <p class="font-quicksand font-semibold text-sm text-nibnab-dark/60">Or hit 1-4</p>
              </div>
            </div>

            <div class="hidden md:block text-3xl">→</div>

            <div class="flex items-center gap-4">
              <div class="w-16 h-16 bg-nibnab-sky neo-border-thin rounded-xl flex items-center justify-center font-bebas text-2xl">
                3
              </div>
              <div class="text-left">
                <p class="font-space font-bold text-nibnab-dark">Find it Later</p>
                <p class="font-quicksand font-semibold text-sm text-nibnab-dark/60">In markdown</p>
              </div>
            </div>
          </div>
        </div>

        {/* Success */}
        <div class="mt-16 text-center">
          <p class="font-space font-bold text-2xl text-white mb-4">
            Transform from "where did I put that?" to "it's in lavender"
          </p>
          <p class="font-quicksand font-semibold text-lg text-white/80">
            Your clipboard, finally organized by vibe.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}