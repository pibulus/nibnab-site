export default function Download() {
  return (
    <section id="download" class="py-32 px-6 bg-nibnab-yellow/20 relative">
      {/* Decorative elements */}
      <div class="absolute top-10 left-10 w-20 h-20 bg-nibnab-orange/30 rounded-full blur-2xl" />
      <div class="absolute bottom-10 right-10 w-32 h-32 bg-nibnab-pink/30 rounded-full blur-2xl" />
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="font-fredoka font-bold text-6xl md:text-7xl text-nibnab-dark mb-8 animate-float">
          Get NibNab
        </h2>

        <div class="neo-shadow neo-border rounded-2xl p-12 bg-white mb-12">
          <div class="mb-8">
            <h3 class="font-space font-black text-3xl text-nibnab-dark mb-4">
              Download for Mac
            </h3>
            <p class="font-quicksand font-bold text-lg text-nibnab-dark/70 max-w-2xl mx-auto">
              Free forever. No trial. No freemium. No "pro" version.<br />
              Free means free.
            </p>
          </div>

          <div class="space-y-8">
            {/* Primary: one-click download */}
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/pibulus/nibnab/releases/latest/download/NibNab.dmg"
                rel="noopener noreferrer"
                class="neo-shadow neo-border bg-nibnab-yellow hover:bg-nibnab-yellow/80 px-10 py-5 rounded-xl font-space font-black text-xl text-nibnab-dark transform hover:rotate-1 hover:scale-105 transition-all"
              >
                ↓ Download NibNab.dmg
              </a>
              <a
                href="https://github.com/pibulus/nibnab"
                target="_blank"
                rel="noopener noreferrer"
                class="neo-shadow neo-border bg-white hover:bg-gray-50 px-10 py-5 rounded-xl font-space font-black text-xl text-nibnab-dark transform hover:-rotate-1 hover:scale-105 transition-all"
              >
                View on GitHub
              </a>
            </div>

            {/* Fallback: build from source, for the nerds */}
            <details class="neo-border-thin rounded-xl bg-gray-50 text-left group">
              <summary class="cursor-pointer px-6 py-4 font-space font-bold text-base text-nibnab-dark/80 hover:text-nibnab-dark select-none">
                🛠️ Or build it yourself
              </summary>
              <div class="px-6 pb-6">
                <pre class="bg-nibnab-dark text-white p-4 rounded-lg overflow-x-auto text-sm font-mono">
                <code>{`git clone https://github.com/pibulus/nibnab.git
cd nibnab
./build.sh
open build/NibNab.app`}</code>
                </pre>
                <p class="font-quicksand text-sm text-nibnab-dark/60 mt-3">
                  Requires macOS 13.0+ and Xcode
                </p>
              </div>
            </details>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="neo-shadow neo-border rounded-xl p-6 bg-white">
            <div class="text-3xl mb-2">🎯</div>
            <h4 class="font-space font-bold text-lg text-nibnab-dark mb-2">
              Native & Fast
            </h4>
            <p class="font-quicksand font-semibold text-sm text-nibnab-dark/70">
              Swift & SwiftUI. Buttery smooth.
            </p>
          </div>

          <div class="neo-shadow neo-border rounded-xl p-6 bg-white">
            <div class="text-3xl mb-2">🔒</div>
            <h4 class="font-space font-bold text-lg text-nibnab-dark mb-2">
              100% Private
            </h4>
            <p class="font-quicksand font-semibold text-sm text-nibnab-dark/70">
              No cloud. No tracking. Just clips.
            </p>
          </div>

          <div class="neo-shadow neo-border rounded-xl p-6 bg-white">
            <div class="text-3xl mb-2">✨</div>
            <h4 class="font-space font-bold text-lg text-nibnab-dark mb-2">
              Anti-Scale
            </h4>
            <p class="font-quicksand font-semibold text-sm text-nibnab-dark/70">
              Can't scale = the feature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
