"use client";

import type { ReactNode } from "react";
import { useEffect, useEffectEvent, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type SupportedTag = "h1" | "h2" | "h3" | "p" | "span";

type StaggeredTextProps = {
  as?: SupportedTag;
  className?: string;
  text: string;
  segmentBy?: "words" | "chars";
  delay?: number;
  duration?: number;
};

function splitText(text: string, segmentBy: "words" | "chars") {
  if (segmentBy === "chars") {
    return Array.from(text);
  }

  return text.split(" ");
}

export function StaggeredText({
  as = "p",
  className,
  text,
  segmentBy = "words",
  delay = 55,
  duration = 650,
}: StaggeredTextProps) {
  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useEffectEvent((entries: IntersectionObserverEntry[]) => {
    if (entries[0]?.isIntersecting) {
      setIsVisible(true);
    }
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (prefersReducedMotion.matches) {
      const frameId = window.requestAnimationFrame(() => {
        setIsVisible(true);
      });

      return () => window.cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
      rootMargin: "0px 0px -12% 0px",
    });

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Tag = as;
  const segments = splitText(text, segmentBy);

  return (
    <Tag className={cn("block", className)} aria-label={text}>
      <span className="sr-only">{text}</span>
      <span
        ref={wrapperRef}
        aria-hidden="true"
        className={cn(
          "flex flex-wrap gap-y-[0.18em]",
          segmentBy === "words" ? "gap-x-[0.32em]" : "gap-x-0"
        )}
      >
        {segments.map((segment, index) => {
          const renderedSegment: ReactNode = segment === " " ? "\u00A0" : segment;

          return (
            <span
              key={`${segment}-${index}`}
              className={cn(
                "inline-block will-change-transform transition-[transform,opacity,filter] ease-[cubic-bezier(0.22,1,0.36,1)]",
                isVisible ? "translate-y-0 opacity-100 blur-none" : "translate-y-5 opacity-0 blur-sm"
              )}
              style={{
                transitionDelay: `${index * delay}ms`,
                transitionDuration: `${duration}ms`,
              }}
            >
              {renderedSegment}
            </span>
          );
        })}
      </span>
    </Tag>
  );
}
