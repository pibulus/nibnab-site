export default function Divider({ type = "wave", color = "white" }: {
  type?: "wave" | "zigzag" | "dots";
  color?: string;
}) {
  if (type === "dots") {
    return (
      <div class="flex justify-center gap-4 py-8">
        <span class="w-4 h-4 bg-nibnab-peach rounded-full animate-bounce" style="animation-delay: 0ms" />
        <span class="w-4 h-4 bg-nibnab-lavender rounded-full animate-bounce" style="animation-delay: 100ms" />
        <span class="w-4 h-4 bg-nibnab-sky rounded-full animate-bounce" style="animation-delay: 200ms" />
        <span class="w-4 h-4 bg-nibnab-sage rounded-full animate-bounce" style="animation-delay: 300ms" />
      </div>
    );
  }

  if (type === "zigzag") {
    return (
      <div class="w-full h-8 relative overflow-hidden">
        <div class="absolute inset-0 flex items-center">
          <svg class="w-full h-4" viewBox="0 0 100 10" preserveAspectRatio="none">
            <polyline
              points="0,10 5,0 10,10 15,0 20,10 25,0 30,10 35,0 40,10 45,0 50,10 55,0 60,10 65,0 70,10 75,0 80,10 85,0 90,10 95,0 100,10"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              class="text-nibnab-dark"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div class="relative h-16">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" class="w-full h-full">
        <path
          d="M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z"
          fill={color === "dark" ? "#2D2D2D" : "white"}
          class="animate-pulse"
        />
      </svg>
    </div>
  );
}