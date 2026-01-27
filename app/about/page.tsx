"use client"
import { BackgroundBeams } from '@/components/ui/background-beams';
import ChromaGrid from '@/components/ui/ChromaGrid'

export default function AboutPage() {
  const items = [
    {
      image: "/me_about_img.jpeg",
      title: "Rahul Choudhary",
      subtitle: "Frontend & ML Developer",
      handle: "@RahulChy007",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/RahulChy007"
    }
  ];

  return (
    <main className="relative top-[-50px] min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 sm:px-6 text-white">
      
      <div className="
        relative my-20 flex w-full max-w-7xl
        flex-col gap-10 md:mx-auto
        md:flex-row md:gap-14
        px-4 sm:px-6 lg:px-10
      ">

        {/* LEFT: ChromaGrid */}
        <div className="relative flex z-10 w-full max-w-sm">
          <ChromaGrid 
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            className="w-full max-w-sm rounded-lg backdrop-blur-md"
          />
        </div>

        {/* RIGHT: About Content */}
        <div className="
          w-full
          rounded-lg border border-white/20 bg-white/5
          p-6 sm:p-8
          backdrop-blur-md text-center md:text-left
        ">
          <div className="
            text-3xl sm:text-4xl font-bold
            bg-gradient-to-r from-emerald-400 to-teal-300
            bg-clip-text text-transparent
          ">
            About Me
          </div>

          <p className="
            mt-6
            text-sm sm:text-base
            leading-relaxed tracking-wide
            font-mono font-medium
          ">
            I am currently pursuing Bachelor of Technology in Artificial Intelligence & Machine Learning from Haldia Institute of Technology. I am deeply interested in software development, full-stack web technologies, and machine learning systems.
          </p>

          <p className="
            mt-4
            text-sm sm:text-base
            leading-relaxed tracking-wide
            font-mono font-medium
          ">
            Over time, I have developed a strong interest in writing structured, maintainable code and building applications that are not only functional but also visually appealing and user-friendly. I actively work on strengthening my fundamentals in Data Structures & Algorithms, Object-Oriented Programming, and system concepts.
          </p>

          <p className="
            mt-4
            text-sm sm:text-base
            leading-relaxed tracking-wide
            font-mono font-medium
          ">
            I believe in learning by building. Every project I work on helps me refine my technical understanding and practical skills. My long-term goal is to grow into a skilled software engineer, contribute to impactful products, and eventually build intelligent AI-powered solutions that improve everyday life.
          </p>
        </div>
      </div>

      <BackgroundBeams />
    </main>
  )
}
