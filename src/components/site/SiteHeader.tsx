import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { WHATSAPP_LINK } from "./contact-info";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-header-border bg-header transition-colors">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex shrink-0 items-center text-header-foreground">
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative py-2 text-[0.8rem] font-medium text-header-foreground/65 transition-colors hover:text-header-foreground"
            >
              {l.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-header-foreground transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            size="lg"
            className="rounded-none bg-background px-6 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-foreground hover:bg-background/90"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Falar com a gente
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 cursor-pointer items-center justify-center rounded-md border border-header-border text-header-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-header-border bg-header px-4 pb-6 pt-2 sm:px-6 lg:px-8 md:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center border-b border-header-border py-3 text-sm text-header-foreground/70"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <Button
            asChild
            size="lg"
            className="mt-5 w-full rounded-none bg-background text-[0.7rem] font-bold uppercase tracking-[0.16em] text-foreground hover:bg-background/90"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Falar com a gente
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
