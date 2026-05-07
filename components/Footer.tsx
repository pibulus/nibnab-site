export default function Footer() {
  return (
    <footer class="py-16 px-6 bg-nibnab-dark text-white">
      <div class="max-w-4xl mx-auto text-center">
        <div class="mb-8">
          <h3 class="font-fredoka font-bold text-4xl mb-2">NibNab</h3>
          <p class="font-quicksand font-bold text-white/60">
            A highlighter for your digital life 🎨
          </p>
        </div>

        <div class="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/pibulus/nibnab"
            target="_blank"
            rel="noopener noreferrer"
            class="font-space font-bold text-white/70 hover:text-nibnab-yellow transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://github.com/pibulus/nibnab/issues"
            target="_blank"
            rel="noopener noreferrer"
            class="font-space font-bold text-white/70 hover:text-nibnab-orange transition-colors"
          >
            Report Issue
          </a>
          <a
            href="https://github.com/pibulus"
            target="_blank"
            rel="noopener noreferrer"
            class="font-space font-bold text-white/70 hover:text-nibnab-pink transition-colors"
          >
            @pibulus
          </a>
        </div>

        <div class="space-y-4 text-sm text-white/50 font-quicksand font-bold">
          <p>
            Hey, I'm{" "}
            <a
              href="https://github.com/pibulus"
              target="_blank"
              rel="noopener noreferrer"
              class="text-nibnab-yellow hover:text-nibnab-yellow/80 transition-colors"
            >
              Pablo
            </a>
            . I build tools with personality.
          </p>

          <p class="text-white/60 max-w-md mx-auto">
            NibNab captures everything you copy and organizes it by color—because your clipboard deserves better than Cmd+V into Notes.app.
          </p>

          <p class="text-white/40">
            Auto-capture, export options, zero cloud BS. It's quick, it's local, it works forever.
          </p>

          <div class="pt-4 border-t border-white/10">
            <p class="text-white/70">
              © 2025 Pablo Alvarado • Built in Bangkok ☕
            </p>
          </div>

          <div class="pt-4 border-t border-white/10">
            <p>
              Support Palestine 🇵🇸{" "}
              <a
                href="https://www.pcrf.net/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-nibnab-pink hover:text-nibnab-pink/80 transition-colors"
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