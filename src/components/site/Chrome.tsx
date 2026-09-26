import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Instagram, MessageCircle, Mail } from "lucide-react";

export const nexaWhatsapp = "https://wa.me/5511934136539";

export const navLinks = [
  { label: "Soluções", hash: "solucoes" },
  { label: "Projetos", hash: "projetos" },
  { label: "Como funciona", hash: "como-funciona" },
  { label: "Sobre", hash: "sobre" },
  { label: "Contato", hash: "contato" },
];

export function Logo() {
  return (
    <Link to="/" className="flex items-baseline gap-1.5 leading-none" aria-label="DAMASIO NEXA.I.A — início">
      <span className="text-sm font-800 font-extrabold tracking-[0.08em] text-foreground">DAMASIO</span>
      <span className="text-sm font-bold tracking-[0.14em] text-primary">
        NEXA<span className="text-foreground/60">.I.A</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const solid = scrolled || open;
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "border-b border-border bg-background/75 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.hash} to="/" hash={l.hash} className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={nexaWhatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-primary/40 px-5 py-2.5 text-[13px] font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground lg:inline-flex"
        >
          Falar com a NEXA
        </a>
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <div className={`grid overflow-hidden transition-all duration-500 lg:hidden ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-5 pb-6">
            {navLinks.map((l) => (
              <Link key={l.hash} to="/" hash={l.hash} onClick={() => setOpen(false)} className="border-b border-border py-4 text-base font-medium text-foreground">
                {l.label}
              </Link>
            ))}
            <a
              href={nexaWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 flex h-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
            >
              Falar com a NEXA
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const socials = [
    { label: "Instagram", value: "@lucasd_zs", href: "https://www.instagram.com/lucasd_zs/", icon: Instagram },
    { label: "WhatsApp", value: "(11) 93413-6539", href: nexaWhatsapp, icon: MessageCircle },
    { label: "E-mail", value: "lucascdmatias5@gmail.com", href: "mailto:lucascdmatias5@gmail.com", icon: Mail },
  ];
  return (
    <footer id="contato" className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Conexão • Inteligência • Resultados</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Soluções digitais para negócios que querem vender, atender e operar de forma mais inteligente.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/50">Navegação</p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.hash}>
                <Link to="/" hash={l.hash} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/50">Contato</p>
          <ul className="mt-5 space-y-3">
            {socials.map(({ label, value, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} target={href.startsWith("https:") ? "_blank" : undefined} rel={href.startsWith("https:") ? "noopener noreferrer" : undefined} className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary" aria-label={`${label}: ${value}`}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border">
                  <Icon size={15} />
                </span>
                <span className="min-w-0 break-all">{value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-foreground/40 md:px-8">© {new Date().getFullYear()} DAMASIO NEXA.I.A</p>
      </div>
    </footer>
  );
}
