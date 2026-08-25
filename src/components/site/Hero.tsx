import { useEffect, useState } from "react";
import { ArrowRight, TrendingUp, Clock, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import LightRays from "@/components/ui/light-rays";
import { WHATSAPP_LINK } from "./contact-info";

const stats = [
  { value: "+3x", label: "retorno médio", icon: TrendingUp },
  { value: "7 dias", label: "primeiro site no ar", icon: Clock },
  { value: "100%", label: "relatórios claros", icon: ShieldCheck },
];

export function Hero() {
  const ref = useReveal<HTMLElement>();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      ref={ref}
      id="top"
      className="section-dark relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pb-16 pt-28 md:min-h-0 md:pb-32 md:pt-48"
    >
      <img
        src="/bg-hero.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full object-cover"
      />
      {!reducedMotion && (
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <LightRays
            raysOrigin="left"
            raysColor="#ffffff"
            raysSpeed={1.5}
            lightSpread={0.35}
            rayLength={1.4}
            followMouse
            mouseInfluence={0.1}
            noiseAmount={0.04}
            distortion={0.02}
          />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/55 via-background/30 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="grain pointer-events-none absolute inset-0 opacity-40" />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(55%_60%_at_15%_45%,black,transparent)]" />

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-start px-4 text-left sm:px-6 lg:px-8">
        <p className="reveal eyebrow text-muted-foreground" data-reveal>
          Agência de soluções digitais
        </p>
        <h1
          data-reveal
          style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
          className="reveal mt-6 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:mt-7 md:text-[4rem]"
        >
          A presença digital que{" "}
          <span
            style={{
              color: "var(--mint)",
              textShadow: "var(--mint-glow)",
            }}
          >
            seu negócio{" "}
            <span className="relative inline-block">
              merece.
              <svg
                aria-hidden="true"
                viewBox="0 0 300 18"
                className="absolute -bottom-1 left-0 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 13c60-10 180-10 296 2"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </h1>
        <p
          data-reveal
          style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          className="reveal mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Tráfego qualificado, site que converte e crescimento que você consegue medir. Gestão de
          Meta Ads e Google Ads, sites sob medida, SEO e Google Meu Negócio.
        </p>

        <div
          data-reveal
          style={{ "--reveal-delay": "270ms" } as React.CSSProperties}
          className="reveal mt-10 flex w-full flex-col items-start justify-start gap-3 sm:w-auto sm:flex-row"
        >
          <Button
            asChild
            size="xl"
            className="w-full rounded-none bg-foreground text-background text-xs font-bold uppercase tracking-[0.18em] hover:bg-foreground/90 sm:w-auto"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="xl"
            variant="ghost"
            className="w-full rounded-none border border-border bg-transparent text-xs font-semibold uppercase tracking-[0.18em] text-foreground hover:bg-surface sm:w-auto"
          >
            <a href="#servicos">
              Ver soluções <ArrowRight />
            </a>
          </Button>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "440ms" } as React.CSSProperties}
          className="reveal mt-10 grid w-full max-w-xl grid-cols-3 gap-2 md:mt-14 md:gap-3"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-start gap-1.5 px-3 first:pl-0 md:gap-2 ${i > 0 ? "border-l border-border" : ""}`}
            >
              <s.icon className="size-4 text-foreground/70" />
              <span className="font-display text-lg font-semibold leading-none text-foreground md:text-2xl">
                {s.value}
              </span>
              <span className="text-[0.7rem] leading-tight text-muted-foreground md:text-xs">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
