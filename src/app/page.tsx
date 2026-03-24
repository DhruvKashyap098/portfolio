import {
  ArrowRight,
  ArrowUpRight,
  CloudCog,
  Code2,
  ExternalLink,
  FileDown,
  FolderGit2,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  NotebookPen,
  Phone,
  Sparkles,
  Trophy,
} from "lucide-react";
import Image from "next/image";

import { SectionHeading } from "@/components/portfolio/section-heading";
import { SkillMarquee } from "@/components/portfolio/skill-marquee";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SpotlightCard } from "@/components/portfolio/spotlight-card";
import { StaggeredText } from "@/components/portfolio/staggered-text";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-styles";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { portfolioData } from "@/lib/portfolio";

const iconMap = {
  email: Mail,
  phone: Phone,
  location: MapPin,
  github: FolderGit2,
  linkedin: ExternalLink,
} as const;

export default function Home() {
  return (
    <main className="relative flex-1 overflow-x-hidden pb-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] overflow-hidden">
        <div className="absolute left-[8%] top-20 size-72 rounded-full bg-sky-400/18 blur-3xl animate-float-slow" />
        <div className="absolute right-[12%] top-10 size-80 rounded-full bg-emerald-400/16 blur-3xl animate-float-delayed" />
        <div className="absolute left-1/2 top-48 size-64 -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl animate-pulse-glow" />
      </div>

      <SiteHeader name={portfolioData.profile.name} navigation={portfolioData.navigation} />

      <section id="home" className="page-shell pt-10 sm:pt-14">
        <div className="mesh-grid section-frame grid gap-8 overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <div className="space-y-8">
            <div className="space-y-5">
              <Badge className="rounded-full bg-foreground text-background">
                <Sparkles className="size-3.5" />
                {portfolioData.availability}
              </Badge>
              <StaggeredText
                as="p"
                text={portfolioData.profile.role}
                className="font-mono text-xs uppercase tracking-[0.35em] text-primary/80 sm:text-sm"
              />
              <StaggeredText
                as="h1"
                text={portfolioData.hero.headline}
                className="max-w-3xl font-heading text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
              />
              <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                {portfolioData.hero.subheading}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/dhruv-kumar-resume.pdf"
                download
                className={buttonVariants({
                  size: "lg",
                  className: "rounded-full bg-foreground px-5 text-background hover:bg-foreground/85",
                })}
              >
                <FileDown className="mr-1 size-4" />
                Download Resume
              </a>
              <a
                href={portfolioData.profile.github}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "rounded-full border-white/70 bg-white/40 px-5 backdrop-blur hover:bg-white/70",
                })}
              >
                View GitHub
                <ArrowUpRight className="ml-1 size-4" />
              </a>
              <a
                href="#contact"
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                  className: "rounded-full px-5",
                })}
              >
                Let&apos;s Connect
                <ArrowRight className="ml-1 size-4" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {portfolioData.stats.map((stat) => (
                <SpotlightCard key={stat.label} className="min-h-32 rounded-[1.75rem] border-white/60 p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</p>
                  <p className="mt-4 font-heading text-3xl">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.detail}</p>
                </SpotlightCard>
              ))}
            </div>
          </div>

          <SpotlightCard className="rounded-[2rem] border-white/70 p-6 sm:p-8">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/60">
              <Image
                src="/dhruv-portrait.jpeg"
                alt="Portrait of Dhruv Kumar"
                width={768}
                height={1024}
                priority
                className="h-80 w-full object-cover object-[center_20%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/90 via-slate-950/45 to-transparent p-5">
                <Badge className="rounded-full bg-white/15 text-white backdrop-blur">
                  This is me
                </Badge>
                <p className="mt-4 font-heading text-2xl text-white">{portfolioData.profile.name}</p>
                <p className="mt-1 text-sm text-white/80">{portfolioData.profile.role}</p>
              </div>
            </div>

            <div className="mt-6 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Based in</p>
                <p className="mt-2 text-sm font-medium text-foreground/85">{portfolioData.profile.location}</p>
              </div>
              <Badge variant="secondary" className="rounded-full">
                2023 - 2027
              </Badge>
            </div>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {portfolioData.profile.summary}
            </p>

            <Separator className="my-6" />

            <div className="grid gap-4">
              {portfolioData.contactHighlights.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/60 bg-white/55 px-4 py-3 transition-transform hover:-translate-y-0.5 hover:bg-white/75"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-2xl bg-muted text-primary">
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{item.label}</p>
                        <p className="mt-1 text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/60 bg-linear-to-br from-sky-50 to-white p-4">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Languages</p>
                <p className="mt-3 text-sm leading-7 text-foreground/80">{portfolioData.personal.languages.join(" | ")}</p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-linear-to-br from-amber-50 to-white p-4">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Interests</p>
                <p className="mt-3 text-sm leading-7 text-foreground/80">{portfolioData.personal.interests.join(" | ")}</p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      <section className="page-shell mt-8">
        <SkillMarquee items={portfolioData.marqueeSkills} />
      </section>

      <section id="about" className="page-shell mt-20">
        <SectionHeading
          eyebrow="About"
          title="I'm a learner-first builder who cares about strong fundamentals and real progress."
          description="This section is a quick introduction to how I think, what I'm learning, and the direction I'm growing in as a developer."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="section-frame rounded-[2rem] border-white/70 bg-white/70 py-0">
            <CardHeader className="px-6 pt-6 sm:px-8 sm:pt-8">
              <Badge variant="secondary" className="w-fit rounded-full">
                <NotebookPen className="size-3.5" />
                My Story
              </Badge>
              <CardTitle className="pt-3 text-2xl">I&apos;m focused on building practical software, not only studying theory.</CardTitle>
              <CardDescription className="max-w-2xl leading-7">
                {portfolioData.about.longForm}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 px-6 pb-6 sm:px-8 sm:pb-8 md:grid-cols-3">
              {portfolioData.about.highlights.map((highlight) => (
                <div key={highlight.title} className="rounded-[1.5rem] border border-white/70 bg-white/75 p-4">
                  <p className="font-heading text-lg">{highlight.title}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <SpotlightCard className="rounded-[2rem] border-white/70 p-6">
              <div className="flex items-center gap-3">
                <Code2 className="size-5 text-primary" />
                <h3 className="font-heading text-xl">What I&apos;m building with</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Right now, I work most comfortably with a mix of web fundamentals, programming basics, and hands-on experimentation with desktop applications.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {portfolioData.focusAreas.map((area) => (
                  <Badge key={area} variant="outline" className="h-auto rounded-full border-white/70 bg-white/60 px-3 py-1">
                    {area}
                  </Badge>
                ))}
              </div>
            </SpotlightCard>

            <SpotlightCard className="rounded-[2rem] border-white/70 p-6">
              <div className="flex items-center gap-3">
                <CloudCog className="size-5 text-primary" />
                <h3 className="font-heading text-xl">Where I&apos;m heading</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                I&apos;m aiming for internships and early opportunities where I can keep learning, contribute seriously, and grow through work across web development, Python, analytics, and cloud fundamentals.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      <section id="skills" className="page-shell mt-20">
        <SectionHeading
          eyebrow="Skills"
          title="My toolkit is growing across development, problem solving, and analytics."
          description="These are the tools and areas I'm currently learning, practicing, and building with."
        />

        <Tabs defaultValue={portfolioData.skillGroups[0].key} className="mt-8 gap-6">
          <TabsList className="h-auto flex-wrap rounded-full bg-white/60 p-2">
            {portfolioData.skillGroups.map((group) => (
              <TabsTrigger
                key={group.key}
                value={group.key}
                className="rounded-full px-4 py-2 text-sm data-active:bg-foreground data-active:text-background"
              >
                {group.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {portfolioData.skillGroups.map((group) => (
            <TabsContent key={group.key} value={group.key}>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {group.items.map((skill) => (
                  <Card key={skill.name} className="section-frame rounded-[1.75rem] border-white/70 bg-white/60 py-0">
                    <CardContent className="p-5">
                      <p className="font-heading text-xl">{skill.name}</p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{skill.detail}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section id="projects" className="page-shell mt-20">
        <SectionHeading
          eyebrow="Projects"
          title="This is how I turn what I learn into something real and usable."
          description="I'm still early in my journey, but this project shows how I take an idea, build it, and turn it into working software."
        />

        {portfolioData.projects.map((project) => (
          <SpotlightCard key={project.name} className="mt-8 rounded-[2rem] border-white/70 p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge className="rounded-full">{project.badge}</Badge>
                  <Badge variant="secondary" className="rounded-full">
                    Team Size: {project.teamSize}
                  </Badge>
                </div>
                <h3 className="mt-5 font-heading text-3xl sm:text-4xl">{project.name}</h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item} variant="outline" className="h-auto rounded-full border-white/70 bg-white/50 px-3 py-1">
                      {item}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({
                      size: "lg",
                      className: "rounded-full bg-foreground px-5 text-background hover:bg-foreground/85",
                    })}
                  >
                    View Repository
                    <ArrowUpRight className="ml-1 size-4" />
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                <Card className="rounded-[1.75rem] border-white/70 bg-white/65 py-0">
                  <CardHeader className="px-5 pt-5">
                    <CardTitle>What I built into it</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 px-5 pb-5">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="rounded-2xl bg-muted/60 px-4 py-3 text-sm leading-7 text-muted-foreground">
                        {highlight}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="rounded-[1.75rem] border-white/70 bg-linear-to-br from-sky-50/80 to-white py-0">
                  <CardHeader className="px-5 pt-5">
                    <CardTitle>Why I value this project</CardTitle>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 text-sm leading-7 text-muted-foreground">
                    {project.whyItMatters}
                  </CardContent>
                </Card>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </section>

      <section id="education" className="page-shell mt-20">
        <SectionHeading
          eyebrow="Education"
          title="My academic path reflects where I'm coming from and where I'm heading."
          description="Here's the academic foundation I'm building as I grow in information technology and software development."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="section-frame rounded-[2rem] border-white/70 bg-white/65 py-0">
            <CardHeader className="px-6 pt-6 sm:px-8 sm:pt-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="size-5 text-primary" />
                <CardTitle className="text-2xl">My Education Timeline</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 px-6 pb-6 sm:px-8 sm:pb-8">
              {portfolioData.education.map((item, index) => (
                <div key={item.institution} className="relative pl-8">
                  {index !== portfolioData.education.length - 1 ? (
                    <span className="absolute left-[11px] top-8 h-[calc(100%+1.5rem)] w-px bg-border" />
                  ) : null}
                  <span className="absolute left-0 top-1.5 flex size-6 items-center justify-center rounded-full bg-primary/12 ring-1 ring-primary/20">
                    <span className="size-2.5 rounded-full bg-primary" />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-[0.26em] text-muted-foreground">{item.period}</p>
                  <p className="mt-2 font-heading text-xl">{item.degree}</p>
                  <p className="mt-1 text-sm font-medium text-foreground/85">{item.institution}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.score}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="section-frame rounded-[2rem] border-white/70 bg-white/65 py-0">
            <CardHeader className="px-6 pt-6 sm:px-8 sm:pt-8">
              <div className="flex items-center gap-3">
                <Trophy className="size-5 text-primary" />
                <CardTitle className="text-2xl">My Assessments & Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8">
              <Accordion defaultValue={[portfolioData.certifications[0].slug]}>
                {portfolioData.certifications.map((certification) => (
                  <AccordionItem key={certification.slug} value={certification.slug} className="border-b border-border/70">
                    <AccordionTrigger className="py-4 text-left text-base font-heading hover:no-underline">
                      <div>
                        <p>{certification.title}</p>
                        <p className="mt-2 text-sm font-normal leading-6 text-muted-foreground">
                          {certification.label}
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-sm leading-7 text-muted-foreground">
                      <p>{certification.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {certification.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="h-auto rounded-full px-3 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="page-shell mt-20">
        <SpotlightCard className="rounded-[2rem] border-white/70 px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Badge variant="secondary" className="rounded-full">
                <Languages className="size-3.5" />
                I&apos;m open to internships and collaborations
              </Badge>
              <h2 className="mt-5 font-heading text-3xl sm:text-4xl">Let&apos;s connect and build something meaningful.</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                If you have an internship opportunity, a project to collaborate on, or just want to talk about web development, Python, and growth, I&apos;d love to connect.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={`mailto:${portfolioData.profile.email}`}
                className={buttonVariants({
                  size: "lg",
                  className: "rounded-full bg-foreground px-5 text-background hover:bg-foreground/85",
                })}
              >
                <Mail className="mr-1 size-4" />
                Email Me
              </a>
              <a
                href={portfolioData.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "rounded-full border-white/70 bg-white/45 px-5 backdrop-blur hover:bg-white/70",
                })}
              >
                LinkedIn
                <ArrowUpRight className="ml-1 size-4" />
              </a>
            </div>
          </div>
        </SpotlightCard>
      </section>

      <footer className="page-shell mt-10">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border/70 py-8 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <p>I built this portfolio in Next.js with shadcn/ui and custom animated components.</p>
          <p>{portfolioData.profile.name} | {portfolioData.profile.location}</p>
        </div>
      </footer>
    </main>
  );
}
