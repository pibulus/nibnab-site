export default function Benefits() {
  return (
    <section class="py-24 px-6 bg-nibnab-lavender/10">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-modak text-6xl md:text-7xl text-nibnab-dark mb-4 transform hover:scale-105 transition-transform">
            Built for Creative Flow
          </h2>
          <p class="font-space font-bold text-xl text-nibnab-dark/80 max-w-2xl mx-auto">
            Every feature designed to reduce friction and spark joy
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BenefitCard
            feature="Instant Capture"
            payoff="Never lose that perfect quote"
            icon="✨"
            color="bg-nibnab-peach"
          />
          <BenefitCard
            feature="Color Sorting"
            payoff="Your brain already thinks in colors"
            icon="🎨"
            color="bg-nibnab-lavender"
          />
          <BenefitCard
            feature="Markdown Files"
            payoff="Works with Obsidian, Notion, everything"
            icon="📝"
            color="bg-nibnab-sky"
          />
          <BenefitCard
            feature="No Cloud"
            payoff="Your private thoughts stay private"
            icon="🔒"
            color="bg-nibnab-sage"
          />
          <BenefitCard
            feature="Keyboard First"
            payoff="Copy, press 1-4, done"
            icon="⌨️"
            color="bg-nibnab-peach"
          />
          <BenefitCard
            feature="Menu Bar Home"
            payoff="Always there when inspiration strikes"
            icon="🏠"
            color="bg-nibnab-lavender"
          />
        </div>

        <div class="mt-16 neo-shadow neo-border rounded-2xl p-8 bg-gradient-to-br from-nibnab-peach/20 to-nibnab-lavender/20">
          <div class="text-center">
            <h3 class="font-bebas text-3xl text-nibnab-dark mb-4 tracking-wide">
              The Clipboard Manager That Doesn't Try Too Hard
            </h3>
            <p class="font-quicksand font-semibold text-lg text-nibnab-dark/80 max-w-2xl mx-auto mb-6">
              No AI. No sync conflicts. No subscription popups.<br/>
              Just a simple tool that respects your workflow.
            </p>
            <div class="flex flex-wrap justify-center gap-4 text-sm">
              <span class="neo-border-thin bg-white px-4 py-2 rounded-lg font-space font-bold text-nibnab-dark">
                100% Native Swift
              </span>
              <span class="neo-border-thin bg-white px-4 py-2 rounded-lg font-space font-bold text-nibnab-dark">
                Zero Dependencies
              </span>
              <span class="neo-border-thin bg-white px-4 py-2 rounded-lg font-space font-bold text-nibnab-dark">
                &lt; 5MB Download
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ feature, payoff, icon, color }: {
  feature: string;
  payoff: string;
  icon: string;
  color: string;
}) {
  return (
    <div class="group neo-shadow neo-border rounded-xl p-6 bg-white hover:scale-105 transition-all">
      <div class="flex items-start gap-4">
        <div class={`${color} w-12 h-12 neo-border-thin rounded-lg flex items-center justify-center text-2xl flex-shrink-0 group-hover:animate-bounce`}>
          {icon}
        </div>
        <div>
          <h3 class="font-space font-bold text-lg text-nibnab-dark mb-1">
            {feature}
          </h3>
          <p class="font-quicksand font-semibold text-sm text-nibnab-dark/70">
            → {payoff}
          </p>
        </div>
      </div>
    </div>
  );
}