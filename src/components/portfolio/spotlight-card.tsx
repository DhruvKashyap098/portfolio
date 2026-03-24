"use client";

import type { ComponentProps, CSSProperties, PointerEvent } from "react";

import { cn } from "@/lib/utils";

type SpotlightCardProps = ComponentProps<"div">;

export function SpotlightCard({ children, className, ...props }: SpotlightCardProps) {
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = event;
    const rect = currentTarget.getBoundingClientRect();

    currentTarget.style.setProperty("--spotlight-x", `${clientX - rect.left}px`);
    currentTarget.style.setProperty("--spotlight-y", `${clientY - rect.top}px`);
    currentTarget.style.setProperty("--spotlight-opacity", "1");
  };

  const handlePointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--spotlight-opacity", "0");
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden border bg-white/70 shadow-[0_28px_80px_-36px_rgba(15,23,42,0.32)] backdrop-blur-xl",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[radial-gradient(360px_circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(14,165,233,0.18),transparent_60%)] before:opacity-[var(--spotlight-opacity)] before:transition-opacity before:duration-500",
        "after:pointer-events-none after:absolute after:inset-[1px] after:rounded-[calc(var(--radius)*2.5)] after:border after:border-white/40",
        className
      )}
      style={
        {
          "--spotlight-x": "50%",
          "--spotlight-y": "50%",
          "--spotlight-opacity": 0,
        } as CSSProperties
      }
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/35 via-transparent to-sky-100/35" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
