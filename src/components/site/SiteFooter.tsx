import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

import { Logo } from "./Logo";
import { EMAIL, PHONE_DISPLAY, WHATSAPP_LINK } from "./contact-info";

const INSTAGRAM_LINK = "https://instagram.com/estuscorporation";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.48 1.32 4.99L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.26.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.53-3.7 8.23-8.23 8.23a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.37c0-4.53 3.7-8.24 8.24-8.24Zm-4.53 4.7c-.15 0-.4.06-.61.29-.21.24-.8.79-.8 1.92 0 1.13.82 2.22.94 2.37.11.15 1.6 2.55 3.95 3.48 1.95.78 2.35.62 2.77.58.42-.04 1.36-.55 1.55-1.09.19-.53.19-.98.13-1.08-.06-.09-.21-.15-.44-.26-.23-.11-1.36-.67-1.57-.75-.21-.08-.36-.11-.51.12-.15.23-.59.75-.72.9-.13.15-.27.17-.5.06-.23-.11-.96-.35-1.83-1.13-.68-.6-1.14-1.34-1.27-1.57-.13-.23-.01-.35.1-.47.11-.11.23-.27.35-.4.11-.13.15-.23.23-.38.08-.15.04-.29-.02-.4-.06-.11-.51-1.24-.7-1.7-.19-.44-.38-.38-.51-.39-.13-.01-.28-.01-.43-.01Z" />
    </svg>
  );
}

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#projetos", label: "Projetos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const services = [
  "Gestão de Meta Ads",
  "Gestão de Google Ads",
  "Criação de sites",
  "Otimização de SEO",
  "Google Meu Negócio",
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-header-border bg-header">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, oklch(1 0 0 / 55%), oklch(1 0 0 / 15%) 50%, oklch(1 0 0 / 55%))",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(oklch(1 0 0 / 5%) 0.5px, transparent 0.5px)",
          backgroundSize: "3px 3px",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:py-20">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-header-foreground/50">
              Agência de soluções digitais para micro e pequenas empresas: tráfego pago, sites que
              convertem, SEO e Google Meu Negócio.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex size-11 items-center justify-center rounded-full border border-header-border text-header-foreground/50 transition-colors hover:border-header-foreground/40 hover:text-header-foreground"
              >
                <WhatsAppIcon className="size-5" />
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-11 items-center justify-center rounded-full border border-header-border text-header-foreground/50 transition-colors hover:border-header-foreground/40 hover:text-header-foreground"
              >
                <Instagram className="size-5" />
              </a>
            </div>
          </div>

          <nav>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-header-foreground">
              Navegação
            </p>
            <ul className="mt-5 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1 text-sm text-header-foreground/50 transition-colors hover:text-header-foreground"
                  >
                    {l.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-header-foreground">
              Soluções
            </p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s} className="text-sm text-header-foreground/50">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-header-foreground">
              Contato
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-header-foreground/50 transition-colors hover:text-header-foreground"
                >
                  <MessageCircle className="size-4 text-header-foreground/50" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-header-foreground/50 transition-colors hover:text-header-foreground"
                >
                  <Mail className="size-4 text-header-foreground/50" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3 text-header-foreground/50">
                <MapPin className="size-4 text-header-foreground/50" />
                Atendimento remoto em todo o Brasil
              </li>
            </ul>
            <p className="mt-6 text-xs text-header-foreground/50">
              Seg a Sex, 9h às 18h · www.estuscorporation.com.br
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-header-border py-7 text-xs text-header-foreground/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Estus Corporation. Todos os direitos reservados.</p>
          <p className="uppercase tracking-[0.2em]">Agência de soluções digitais</p>
        </div>
      </div>
    </footer>
  );
}
