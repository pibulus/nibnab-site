export default function Footer() {
  return (
    <footer class="py-16 px-6 bg-nibnab-dark text-white">
      <div class="max-w-4xl mx-auto text-center">
        <div class="mb-8">
          <h3 class="font-bebas text-4xl mb-2 tracking-wide">NibNab</h3>
          <p class="font-quicksand font-semibold text-white/60">
            Better than CMD+V into Notes.app
          </p>
        </div>

        <div class="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/pibulus/nibnab"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white/70 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/pibulus"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white/70 hover:text-white transition-colors"
          >
            Twitter
          </a>
        </div>

        <div class="space-y-4 text-sm text-white/50 font-quicksand">
          <p>
            Made by{" "}
            <a
              href="https://github.com/pibulus"
              target="_blank"
              rel="noopener noreferrer"
              class="text-nibnab-peach hover:text-nibnab-peach/80"
            >
              Pablo
            </a>{" "}
            in Bangkok, where it's always monsoon season and the coffee is strong
          </p>

          <p class="font-bold text-white/70">
            Built for humans, not metrics
          </p>

          <div class="pt-4 border-t border-white/10">
            <p>
              Support Palestine 🇵🇸{" "}
              <a
                href="https://www.pcrf.net/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-nibnab-sage hover:text-nibnab-sage/80"
              >
                Donate to PCRF
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}