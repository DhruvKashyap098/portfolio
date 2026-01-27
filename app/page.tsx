"use client";
import { BackgroundBeams } from "@/components/ui/background-beams"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { ArrowRight, Laptop } from "lucide-react"
import { GlowingImage } from "@/components/ui/glowing-image"
import SplitText from "@/components/ui/SplitText"
import { LayoutTextFlip } from "@/components/ui/layout-text-flip"
import { greatVibes } from "@/app/_fonts";
import Link from "next/link";


import {
  Github, Linkedin, Mail,
  Code,
  Rocket,
  Palette,
  Database,
} from "lucide-react"

import MagicBento from "@/components/ui/MagicBento"


export default function Home() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };



  return (
    <>
      <main className="relative top-[-50px] flex min-h-screen w-full items-center overflow-hidden px-4 text-foreground sm:px-6">

        {/* Content Wrapper */}
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 py-20 md:grid-cols-2">

          {/* Left Section */}
          <div className="space-y-6 text-center md:text-left">

            {/* Badge */}
            <div className="flex justify-center md:justify-start">
              <HoverBorderGradient className="flex justify-center items-center gap-4 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 blur-4xl scale-150" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                </span>
                Crafting Experiences at Dimension 🚀
              </HoverBorderGradient>
            </div>
            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Rahul
              </span>
            </h1>


            <SplitText
              text="I design and develop websites that combine creativity and speed to deliver powerful, high-performing digital experiences."
              className="text-2xl text-white/70"
              delay={35}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              responsiveAlign={{
                base: "center",
                md: "left"
              }}
              onLetterAnimationComplete={handleAnimationComplete}
            />

            {/* Buttons */}
            <div className="flex flex-row items-center gap-4 justify-center md:justify-start">
              <HoverBorderGradient 
                className="flex justify-center items-center rounded-full bg-emerald-500 px-4 py-4 text-black hover:bg-emerald-400 cursor-pointer"
                as={Link}
                href="/projects"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </HoverBorderGradient>

              <HoverBorderGradient
                className="flex justify-center items-center rounded-full border-white/20 px-4 py-4 text-white hover:bg-white/10 cursor-pointer"
                as={Link}
                href="/about"
              >
                More about me
              </HoverBorderGradient>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 pt-6 text-white/60 md:justify-start">

              <HoverBorderGradient
                as="a"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                containerClassName="rounded-full w-12 h-12"
                className="border-none p-2 bg-transparent"
              >
                <Github className="cursor-pointer hover:text-white/90" />
              </HoverBorderGradient>

              <HoverBorderGradient
                as="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                containerClassName="rounded-full w-12 h-12"
                className="border-none p-2 bg-transparent"
              >
                <Linkedin className="cursor-pointer hover:text-white/90" />
              </HoverBorderGradient>

              <HoverBorderGradient
                as="a"
                href="mailto:test@mail.com"
                containerClassName="rounded-full w-12 h-12"
                className="border-none p-2 bg-transparent"
              >
                <Mail className="cursor-pointer hover:text-white/90" />
              </HoverBorderGradient>

            </div>

          </div>

          {/* Right Section */}
          <div className="relative hidden flex-1 items-center justify-center md:flex">
            <GlowingImage />
          </div>
        </div>


        <BackgroundBeams />
      </main>

      <section>
        <div className="flex justify-center items-center pt-10">
          <LayoutTextFlip text="Complex Things Made" words={["Quick", "Simple", "Elegant", "Beautiful"]} duration={3000} />
        </div>
        <div className={`flex justify-center items-center py-8 text-4xl bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent ${greatVibes.className}`} >Some  Of  My  Project  Glimpse</div>

        <div className="relative flex justify-center items-center h-full w-full overflow-hidden">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
            cardBlurImage="/bento-bg1.png"
          />
        </div>

      </section>
    </>
  )
}
