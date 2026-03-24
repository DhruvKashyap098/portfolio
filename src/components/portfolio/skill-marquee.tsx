import { Badge } from "@/components/ui/badge";

type SkillMarqueeProps = {
  items: readonly string[];
};

export function SkillMarquee({ items }: SkillMarqueeProps) {
  const loopedItems = [...items, ...items];
  const durationInSeconds = Math.max(items.length * 2.5, 22);

  return (
    <div className="section-frame relative overflow-hidden rounded-full px-0 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background via-background/95 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background via-background/95 to-transparent" />
      <div
        className="flex min-w-max gap-3 animate-marquee px-4"
        style={{ ["--marquee-duration" as string]: `${durationInSeconds}s` }}
      >
        {loopedItems.map((item, index) => (
          <Badge
            key={`${item}-${index}`}
            variant="outline"
            className="h-auto rounded-full border-white/70 bg-white/70 px-4 py-2 text-sm text-foreground/80 shadow-sm"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}
