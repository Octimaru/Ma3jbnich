import Link from "next/link";
import { links, site, whatsappUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand">
              Ma<span>3</span>jbnich
            </Link>
            <p>Streetwear mkhedem f Lmghrib, l nas li ma kay3jbhom ghir l-mzyan.</p>
          </div>

          <nav className="footer-links" aria-label="Rawabit l-footer">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a
              href={`https://instagram.com/${site.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </nav>
        </div>

        <p className="footer-note">
          © {new Date().getFullYear()} {site.name}. Kol l-7o9ouq mahfouda.
        </p>
      </div>
    </footer>
  );
}
