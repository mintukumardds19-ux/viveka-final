"use client";

import { useState } from "react";

type MainNavbarProps = {
  userEmail: string;
  isAdmin: boolean;
  onLogout: () => void;
};

const navLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Use Cases",
    href: "#usecases",
  },
  {
    label: "MVP-Pro",
    href: "#vision",
  },
  {
    label: "Agentic Solutions",
    href: "/agentic-solutions",
  },
  {
    label: "Dharma Repository",
    href: "/knowledge",
  },
  {
    label: "Vedic Knowledge",
    href: "/vedic-knowledge",
  },
];

export default function MainNavbar({
  userEmail,
  isAdmin,
  onLogout,
}: MainNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[#e6ded0] bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="leading-tight">
            <div className="text-xl font-bold text-[#5f3b18]">
              viveka<span className="text-[#2f5d50]">.cloud</span>
            </div>
            <div className="hidden text-xs tracking-[0.18em] text-[#5b6472] sm:block">
              THE DHARMA PROTOCOL
            </div>
          </a>

          <nav className="hidden items-center gap-5 text-sm text-[#5b6472] xl:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[#5f3b18]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <span className="max-w-[210px] truncate rounded-full bg-[#fffaf2] px-4 py-2 text-xs font-semibold text-[#5b6472]">
              {isAdmin ? "Admin" : "User"}: {userEmail}
            </span>

            <a
              href="#app"
              className="rounded-full bg-[#8a5a2b] px-4 py-2 text-sm font-semibold text-white"
            >
              Try It
            </a>

            <button
              onClick={onLogout}
              className="rounded-full border border-[#e6ded0] bg-white px-4 py-2 text-sm font-semibold text-[#5f3b18]"
            >
              Logout
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl border border-[#e6ded0] bg-white px-4 py-2 text-sm font-semibold text-[#5f3b18] xl:hidden"
            aria-label="Open navigation menu"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-[#e6ded0] py-4 xl:hidden">
            <nav className="flex flex-col gap-3 text-sm text-[#5b6472]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl bg-[#fffaf2] px-4 py-3 font-semibold text-[#5f3b18]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#app"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-[#8a5a2b] px-4 py-3 text-center font-semibold text-white"
              >
                Try The Dharma Protocol
              </a>

              <div className="rounded-xl border border-[#e6ded0] bg-white px-4 py-3 text-xs text-[#5b6472]">
                Logged in as{" "}
                <span className="font-semibold text-[#5f3b18]">
                  {isAdmin ? "Admin" : "User"}
                </span>
                <br />
                {userEmail}
              </div>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  onLogout();
                }}
                className="rounded-xl border border-[#e6ded0] bg-white px-4 py-3 text-left font-semibold text-[#5f3b18]"
              >
                Logout
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}