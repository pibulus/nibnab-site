export default function WhyNibNab() {
  return (
    <section class="py-24 px-6 bg-nibnab-dark text-white relative overflow-hidden">
      {/* Background pattern */}
      <div class="absolute inset-0 opacity-10" aria-hidden="true">
        <div class="absolute top-0 left-0 w-64 h-64 bg-nibnab-yellow rounded-full blur-3xl" />
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-nibnab-pink rounded-full blur-3xl" />
      </div>
      <div class="max-w-5xl mx-auto relative z-10">
        {/* The Problem */}
        <div class="text-center mb-16">
          <h2 class="font-fredoka font-bold text-5xl md:text-6xl text-white mb-6">
            Why NibNab exists
          </h2>
          <p class="font-space font-black text-2xl text-nibnab-yellow mb-4">
            Every clipboard manager is either too complicated, too simple, or too corporate.
          </p>
          <div class="max-w-2xl mx-auto space-y-3 text-left">
            <p class="font-quicksand font-bold text-lg text-white/90">
              <span class="text-nibnab-orange">Too complicated?</span> We don't need 47 features and a settings panel that scrolls.
            </p>
            <p class="font-quicksand font-bold text-lg text-white/90">
              <span class="text-nibnab-pink">Too simple?</span> A chronological list isn't organization, it's procrastination.
            </p>
            <p class="font-quicksand font-bold text-lg text-white/90">
              <span class="text-nibnab-purple">Too corporate?</span> Why does copying text require an account, a subscription, and "AI-powered insights"?
            </p>
          </div>
          <p class="font-space font-black text-2xl text-white mt-8">
            NibNab is the 80/20 version. Does less. Does it better.
          </p>
        </div>

        {/* Three steps */}
        <div class="neo-shadow neo-border rounded-2xl p-12 bg-white text-center mb-16">
          <h3 class="font-fredoka font-bold text-4xl text-nibnab-dark mb-8">
            Three steps. That's it.
          </h3>
          <div class="flex flex-col md:flex-row items-center justify-center gap-8">
            <div class="flex-1 text-center">
              <div class="w-20 h-20 bg-nibnab-yellow neo-border-thin rounded-xl flex items-center justify-center font-bebas text-3xl mx-auto mb-4">
                🎯
              </div>
              <p class="font-space font-black text-xl text-nibnab-dark mb-2">Copy anything</p>
              <p class="font-quicksand font-bold text-sm text-nibnab-dark/60">Cmd+C or select text—anywhere on your Mac</p>
            </div>

            <div class="hidden md:block text-4xl">→</div>

            <div class="flex-1 text-center">
              <div class="w-20 h-20 bg-nibnab-orange neo-border-thin rounded-xl flex items-center justify-center font-bebas text-3xl mx-auto mb-4">
                🎨
              </div>
              <p class="font-space font-black text-xl text-nibnab-dark mb-2">Auto-captures to your color</p>
              <p class="font-quicksand font-bold text-sm text-nibnab-dark/60">Yellow, Orange, Pink, or Purple—you decide what they mean</p>
            </div>

            <div class="hidden md:block text-4xl">→</div>

            <div class="flex-1 text-center">
              <div class="w-20 h-20 bg-nibnab-pink neo-border-thin rounded-xl flex items-center justify-center font-bebas text-3xl mx-auto mb-4">
                📦
              </div>
              <p class="font-space font-black text-xl text-nibnab-dark mb-2">Export or use anytime</p>
              <p class="font-quicksand font-bold text-sm text-nibnab-dark/60">Search, sort, export as Markdown or Plain Text</p>
            </div>
          </div>
        </div>

        {/* Anti-scale */}
        <div class="text-center">
          <h3 class="font-fredoka font-bold text-4xl text-white mb-8">
            This will never have:
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <div class="font-quicksand font-bold text-white/80">❌ A pricing page</div>
            <div class="font-quicksand font-bold text-white/80">❌ A login screen</div>
            <div class="font-quicksand font-bold text-white/80">❌ A "pro" version</div>
            <div class="font-quicksand font-bold text-white/80">❌ Analytics</div>
            <div class="font-quicksand font-bold text-white/80">❌ Your email address</div>
            <div class="font-quicksand font-bold text-white/80">❌ Cloud sync drama</div>
            <div class="font-quicksand font-bold text-white/80">❌ Feature bloat</div>
            <div class="font-quicksand font-bold text-white/80">❌ Subscriptions</div>
          </div>
          <p class="font-space font-black text-2xl text-nibnab-yellow">
            Just a tool that does one thing well and respects you.
          </p>
        </div>
      </div>
    </section>
  );
}