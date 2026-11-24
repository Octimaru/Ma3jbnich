"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { links } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Ma3jbnich, rje3 l Dar">
          Ma<span>3</span>jbnich
        </Link>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Sedd" : "Menu"}
        </button>

        <nav id="main-nav" className="nav" data-open={open} aria-label="L-menu">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
