"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";

import { buttonVariants } from "@/components/ui/button-styles";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  name: string;
  navigation: readonly NavItem[];
};

export function SiteHeader({ name, navigation }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleEscape = useEffectEvent(() => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleEscape();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="page-shell sticky top-0 z-40 pt-4">
      <div
        className={cn(
          "section-frame overflow-hidden px-4 py-3 transition-[border-radius] duration-300",
          isOpen ? "rounded-[2rem]" : "rounded-full"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-foreground/80 uppercase"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              DK
            </span>
            {name}
          </a>

          <nav className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-controls="mobile-nav"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((open) => !open)}
            className={buttonVariants({
              variant: "outline",
              size: "icon-sm",
              className:
                "rounded-full border-white/70 bg-white/60 backdrop-blur hover:bg-white/80 md:hidden",
            })}
          >
            {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

        <div
          id="mobile-nav"
          className={cn(
            "grid transition-[grid-template-rows,opacity,margin-top] duration-300 md:hidden",
            isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div className="rounded-[1.5rem] border border-white/70 bg-white/75 p-2">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-[1rem] px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted/70 hover:text-foreground"
                >
                  {item.label}
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Go
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
