export default function Features() {
  const collections = [
    {
      color: "peach",
      bgClass: "bg-nibnab-peach",
      title: "Peach Collection",
      description: "Inspiration stash",
      examples: ["Quotes that spark ideas", "Design references", "Creative snippets"],
    },
    {
      color: "lavender",
      bgClass: "bg-nibnab-lavender",
      title: "Lavender Collection",
      description: "Research pile",
      examples: ["Article excerpts", "Code samples", "Documentation bits"],
    },
    {
      color: "sky",
      bgClass: "bg-nibnab-sky",
      title: "Sky Collection",
      description: "Quick todos",
      examples: ["Quick reminders", "Task descriptions", "Meeting notes"],
    },
    {
      color: "sage",
      bgClass: "bg-nibnab-sage",
      title: "Sage Collection",
      description: "Everything else",
      examples: ["Random thoughts", "Funny finds", "Everything else"],
    },
  ];

  return (
    <section class="py-24 px-6 bg-pablo-yolk/20">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-bungee text-5xl md:text-6xl text-nibnab-dark mb-4">
            Four Colors, Infinite Possibilities
          </h2>
          <p class="font-quicksand font-semibold text-xl text-nibnab-dark/80 max-w-2xl mx-auto">
            Copy text → Pick a color → Done.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.color}
              class={`neo-shadow neo-border rounded-2xl p-8 bg-white hover:scale-105 transition-transform`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div class="flex items-center gap-4 mb-4">
                <div class={`w-16 h-16 ${collection.bgClass} rounded-xl neo-border`} />
                <div>
                  <h3 class="font-space font-bold text-2xl text-nibnab-dark">
                    {collection.title}
                  </h3>
                  <p class="font-quicksand font-semibold text-nibnab-dark/70">
                    {collection.description}
                  </p>
                </div>
              </div>

              <div class="space-y-2">
                {collection.examples.map((example) => (
                  <div key={example} class="flex items-center gap-2">
                    <span class={`w-2 h-2 ${collection.bgClass} rounded-full`} />
                    <span class="font-quicksand text-sm text-nibnab-dark/70">
                      {example}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div class="mt-16 text-center">
          <div class="inline-block neo-shadow neo-border rounded-2xl p-8 bg-white">
            <h3 class="font-fredoka font-semibold text-2xl text-nibnab-dark mb-4">
              Dead Simple Storage
            </h3>
            <p class="font-quicksand text-nibnab-dark/70 max-w-md">
              Everything lives in <code class="bg-gray-100 px-2 py-1 rounded">~/.nibnab/</code> as
              markdown files. One file per color. No database, no complexity. You own your data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}