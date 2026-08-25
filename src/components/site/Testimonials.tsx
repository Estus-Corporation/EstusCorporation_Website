import { Quote, Star } from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import testimonialsBg from "@/assets/hero-bg-silk.jpg";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Lord Macedo",
    role: "Espaço para eventos",
    text: "As campanhas trouxeram muito mais gente pedindo orçamento. Hoje a agenda de eventos vive cheia e sabemos exatamente de onde vem cada contato.",
    avatar: "/lord.webp",
  },
  {
    name: "Allure Engenharia Solar",
    role: "Empresa de engenharia solar",
    text: "Os anúncios trouxeram leads muito mais qualificados. Nossa equipe comercial passou a fechar projetos de energia solar toda semana.",
    avatar: "/allure.jpeg",
  },
  {
    name: "Euforia",
    role: "Loja de roupa feminina",
    text: "O movimento na loja e no Instagram deu um salto. As campanhas trazem cliente todo dia, tanto pro físico quanto pro WhatsApp.",
    avatar: "/Euforia.webp",
  },
];

export function Testimonials() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="depoimentos"
      className="relative overflow-hidden border-t border-border section-dark py-28 md:py-36"
    >
      <img
        src={testimonialsBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-15 [mask-image:radial-gradient(55%_45%_at_50%_45%,black,transparent)]" />
      <div className="grain pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div
          className="reveal mx-auto flex max-w-2xl flex-col items-center text-center"
          data-reveal
        >
          <p className="eyebrow">Depoimentos</p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            Quem já está{" "}
            <span
              style={{
                color: "#4BD6A2",
                textShadow: "0 0 18px rgba(75, 214, 162, 0.55), 0 0 42px rgba(75, 214, 162, 0.3)",
              }}
            >
              crescendo com a gente
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Micro e pequenas empresas que saíram do achismo e passaram a acompanhar cada contato que
            entra.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              data-reveal
              style={{ "--reveal-delay": `${120 + i * 120}ms` } as React.CSSProperties}
              className={cn(
                "reveal surface-panel hover-lift flex min-h-[24rem] flex-col rounded-2xl p-8 md:min-h-[26rem] md:p-10",
                i === 1 && "md:scale-[1.06] md:z-10",
                i === 0 && "md:mr-3",
                i === 2 && "md:ml-3",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="size-3.5 fill-current"
                      style={{
                        color: "#4BD6A2",
                        filter:
                          "drop-shadow(0 0 6px rgba(75, 214, 162, 0.55)) drop-shadow(0 0 14px rgba(75, 214, 162, 0.3))",
                      }}
                    />
                  ))}
                </span>
                <Quote
                  className="size-7"
                  style={{
                    color: "#4BD6A2",
                    filter:
                      "drop-shadow(0 0 6px rgba(75, 214, 162, 0.55)) drop-shadow(0 0 14px rgba(75, 214, 162, 0.3))",
                  }}
                />
              </div>
              <blockquote className="mt-7 font-display text-lg font-medium leading-relaxed text-foreground/90 md:text-xl">
                “{t.text}”
              </blockquote>

              <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="size-12 shrink-0 rounded-full border border-border object-cover"
                />
                <span className="text-sm">
                  <span className="block font-display font-semibold text-foreground">{t.name}</span>
                  <span className="text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
