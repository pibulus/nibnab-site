export default function Benefits() {
  const benefits = [
    {
      feature: "Instant Capture",
      payoff: "Never lose that perfect quote",
      icon: "✨",
      color: "bg-nibnab-peach",
    },
    {
      feature: "Color Sorting",
      payoff: "Your brain already thinks in colors",
      icon: "🎨",
      color: "bg-nibnab-lavender",
    },
    {
      feature: "Markdown Files",
      payoff: "Works with Obsidian, Notion, everything",
      icon: "📝",
      color: "bg-nibnab-sky",
    },
    {
      feature: "No Cloud",
      payoff: "Your private thoughts stay private",
      icon: "🔒",
      color: "bg-nibnab-sage",
    },
    {
      feature: "Keyboard First",
      payoff: "Copy, press 1-4, done",
      icon: "⌨️",
      color: "bg-nibnab-peach",
    },
    {
      feature: "Menu Bar Home",
      payoff: "Always there when inspiration strikes",
      icon: "🏠",
      color: "bg-nibnab-lavender",
    },
  ];

  return (
    <section class="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-titan text-5xl md:text-6xl text-nibnab-dark mb-4">
            Built for Creative Flow
          </h2>
          <p class="font-space font-bold text-xl text-nibnab-dark/80 max-w-2xl mx-auto">
            Every feature designed to reduce friction and spark joy
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.feature}
              class="group neo-shadow neo-border rounded-xl p-6 bg-white hover:scale-105 transition-all"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div class="flex items-start gap-4">
                <div class={`${benefit.color} w-12 h-12 neo-border-thin rounded-lg flex items-center justify-center text-2xl flex-shrink-0 group-hover:animate-bounce`}>
                  {benefit.icon}
                </div>
                <div>
                  <h3 class="font-space font-bold text-lg text-nibnab-dark mb-1">
                    {benefit.feature}
                  </h3>
                  <p class="font-quicksand font-semibold text-sm text-nibnab-dark/70">
                    → {benefit.payoff}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
                < 5MB Download
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}