"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--deep-green)]/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Alunga home">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/30 bg-white/10">
            <Image
              src="/alunga-logo.jpeg"
              alt="Alunga Golf Clinic logo"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-lg font-extrabold tracking-tight text-white">Alunga Golf Clinic</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/70">
              Coaching Every Swing, Every Age
            </p>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-white text-[color:var(--deep-green)]"
                    : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {isOpen ? (
        <nav className="border-t border-white/10 px-5 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-white text-[color:var(--deep-green)]"
                      : "bg-white/5 text-white/85 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
