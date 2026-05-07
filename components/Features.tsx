export default function Features() {
  const features = [
    {
      icon: "🎯",
      title: "Smart Capture",
      description: "Monitors clipboard changes and text selections. Saves automatically to your active color. No interruptions, no decisions.",
    },
    {
      icon: "🎨",
      title: "Color Organization",
      description: "Four highlighter colors for categorizing clips. Organize by project, type, or whatever makes sense to you.",
    },
    {
      icon: "🔍",
      title: "Powerful Search",
      description: "Find any clip instantly. Search across text and source apps. Sort by date, app, or length.",
    },
    {
      icon: "📤",
      title: "Two Export Formats",
      description: "Markdown with metadata, perfect for sharing. Plain Text clean and simple, ready to paste.",
    },
    {
      icon: "🔒",
      title: "Privacy First",
      description: "Everything stored locally in ~/.nibnab/. No cloud. No sync. No tracking. You own your data.",
    },
    {
      icon: "⚡",
      title: "Mac Native",
      description: "Built with Swift/SwiftUI. Feels like it belongs. Right-click settings menu. Keyboard shortcuts. Done right.",
    },
  ];

  return (
    <section class="py-24 px-6 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-fredoka font-bold text-5xl md:text-6xl text-nibnab-dark mb-4">
            Everything you need. Nothing you don't.
          </h2>
          <p class="font-space font-black text-xl text-nibnab-dark/60 max-w-2xl mx-auto">
            Built for speed. Designed for humans.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              class="neo-shadow neo-border rounded-2xl p-8 bg-white hover:scale-105 hover:rotate-1 transition-all"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div class="text-5xl mb-4">{feature.icon}</div>
              <h3 class="font-space font-black text-xl text-nibnab-dark mb-3">
                {feature.title}
              </h3>
              <p class="font-quicksand font-bold text-sm text-nibnab-dark/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div class="mt-16 text-center">
          <div class="inline-block neo-shadow neo-border rounded-2xl p-8 bg-nibnab-dark text-white">
            <h3 class="font-fredoka font-bold text-2xl mb-4">
              Your colors, your rules
            </h3>
            <p class="font-quicksand font-bold text-white/80 max-w-md mb-4">
              The four colors mean whatever you want:
            </p>
            <div class="grid grid-cols-2 gap-4 text-sm font-quicksand font-bold">
              <div class="text-nibnab-yellow">🟡 Yellow: Work stuff</div>
              <div class="text-nibnab-orange">🟠 Orange: Side projects</div>
              <div class="text-nibnab-pink">🩷 Pink: Personal</div>
              <div class="text-nibnab-purple">🟣 Purple: Learning</div>
            </div>
            <p class="font-quicksand font-bold text-white/60 mt-4 text-sm">
              Or organize however you want. They're just highlighters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}