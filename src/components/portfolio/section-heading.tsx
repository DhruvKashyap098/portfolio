type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs uppercase tracking-[0.36em] text-primary/80">{eyebrow}</p>
      <h2 className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-muted-foreground">{description}</p>
    </div>
  );
}
