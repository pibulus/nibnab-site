export default function Benefits() {
  return (
    <section class="py-24 px-6 bg-nibnab-yellow/10">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-fredoka font-bold text-5xl md:text-6xl text-nibnab-dark mb-4 transform hover:scale-105 transition-transform">
            Made for humans who copy stuff
          </h2>
          <p class="font-space font-black text-xl text-nibnab-dark/70 max-w-2xl mx-auto">
            Writers. Developers. Designers. Students. Everyone else.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BenefitCard
            feature="Writers"
            payoff="Collect research, gather quotes, organize references"
            icon="📝"
            color="bg-nibnab-yellow"
          />
          <BenefitCard
            feature="Developers"
            payoff="Save code snippets, commands, Stack Overflow gems"
            icon="💻"
            color="bg-nibnab-orange"
          />
          <BenefitCard
            feature="Designers"
            payoff="Capture inspiration, color codes, URLs"
            icon="🎨"
            color="bg-nibnab-pink"
          />
          <BenefitCard
            feature="Students"
            payoff="Clip lecture notes, research papers, important passages"
            icon="📚"
            color="bg-nibnab-purple"
          />
          <BenefitCard
            feature="Everyone else"
            payoff="If you copy things and want to find them later"
            icon="🌟"
            color="bg-nibnab-yellow"
          />
          <BenefitCard
            feature="Keyboard wizards"
            payoff="Global shortcuts, quick export, zero mouse needed"
            icon="⌨️"
            color="bg-nibnab-orange"
          />
        </div>

        <div class="mt-16 neo-shadow neo-border rounded-2xl p-8 bg-white">
          <div class="text-center">
            <h3 class="font-fredoka font-bold text-3xl text-nibnab-dark mb-4">
              Built right. Stays fast.
            </h3>
            <p class="font-quicksand font-bold text-lg text-nibnab-dark/70 max-w-2xl mx-auto mb-6">
              Native Swift/SwiftUI. No dependencies. Single file. ~1200 lines of readable code.
            </p>
            <div class="flex flex-wrap justify-center gap-4 text-sm">
              <span class="neo-border-thin bg-nibnab-yellow px-4 py-2 rounded-lg font-space font-black text-nibnab-dark">
                100% Native Swift
              </span>
              <span class="neo-border-thin bg-nibnab-orange px-4 py-2 rounded-lg font-space font-black text-nibnab-dark">
                Zero Dependencies
              </span>
              <span class="neo-border-thin bg-nibnab-pink px-4 py-2 rounded-lg font-space font-black text-nibnab-dark">
                Apple Silicon Optimized
              </span>
              <span class="neo-border-thin bg-nibnab-purple px-4 py-2 rounded-lg font-space font-black text-nibnab-dark">
                10 MB Disk Space
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