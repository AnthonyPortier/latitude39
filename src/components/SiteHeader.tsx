"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/business-plan", label: "Business plan" },
  { href: "/etude-marche", label: "Étude de marché" },
  { href: "/telechargements", label: "PDF" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(238,242,239,0.82)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8 md:px-12 lg:px-16">
        <Link href="/" className="group min-w-0" onClick={() => setOpen(false)}>
          <span className="block font-display text-lg font-semibold tracking-tight text-verdon-900 group-hover:text-verdon-700 md:text-xl">
            SCI Latitude 39
          </span>
          <span className="block truncate text-xs tracking-wide text-pierre-600 md:text-sm">
            Domaine Gréoux
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded border border-[var(--line)] px-3 py-2 text-sm text-pierre-800 md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <nav
          id="site-nav"
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-1 border-b border-[var(--line)] bg-[rgba(243,241,236,0.98)] px-4 py-3 md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-verdon-800 text-pierre-50"
                    : "text-pierre-800 hover:bg-verdon-100 hover:text-verdon-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
