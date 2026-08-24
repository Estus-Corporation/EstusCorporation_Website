import { useEffect, useState } from "react";
import { ClipboardList, Compass, Rocket, TrendingUp } from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import processBg from "@/assets/section-process-bg.jpg";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Diagnóstico",
    desc: "Entendemos seu negócio, seu ticket, sua meta e o que já foi tentado antes.",
    detail: "Reunião inicial, análise de concorrência e mapeamento de oportunidades.",
  },
  {
    step: "02",
    icon: Compass,
    title: "Estratégia",
    desc: "Definimos canais, verba, oferta e as páginas necessárias para capturar a demanda.",
    detail: "Plano de mídia, estrutura de campanhas e projeção de custo por lead.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Execução",
    desc: "Site no ar, campanhas ativas, perfil otimizado e rastreamento configurado.",
    detail: "Criativos, textos, páginas e conversões configuradas ponta a ponta.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Otimização",
    desc: "Ajustes semanais e relatório mensal com o que entrou, quanto custou e o próximo passo.",
    detail: "Ciclo contínuo: testar, medir, cortar o que não performa e escalar o que funciona.",
  },
];

const STEP_MS = 3600;

export function Process() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => setInView(entries.some((e) => e.isIntersecting)),
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [inView]);

  return (
    <section
      ref={ref}
      id="processo"
      className="relative overflow-hidden section-dark py-28 md:py-36"
    >
      <img
        src={processBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="grid-backdrop-neutral pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(65%_55%_at_50%_10%,black,transparent)]" />
      <div className="grain pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center" data-reveal>
          <p className="eyebrow">Como trabalhamos</p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Um processo simples, com{" "}
            <span className="text-silver-gradient">responsabilidade sobre o resultado</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Quatro etapas claras, do primeiro diagnóstico ao ciclo contínuo de otimização.
          </p>
        </div>

        {/* Barra de progresso sutil */}
        <div className="reveal mx-auto mt-14 max-w-3xl" data-reveal>
          <div className="relative h-1 overflow-hidden rounded-full bg-foreground/10">
            <span
              className="absolute inset-y-0 left-0 bg-primary transition-all duration-700 ease-out"
              style={{ width: `${((active + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="mt-3 flex justify-between text-xs font-semibold text-muted-foreground">
            {steps.map((s, i) => (
              <span
                key={s.step}
                className={cn(
                  "transition-colors duration-500",
                  i <= active ? "text-primary" : "text-muted-foreground",
                )}
              >
                {s.step}
              </span>
            ))}
          </div>
        </div>

        {/* Cards de passos */}
        <div className="reveal mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4" data-reveal>
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isActive = i === active;
            const isDone = i < active;

            return (
              <div
                key={s.step}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border bg-surface p-7 transition-all duration-500 hover-lift",
                  isActive
                    ? "border-primary shadow-[var(--shadow-glow)]"
                    : isDone
                      ? "border-primary/40"
                      : "border-border",
                )}
              >
                {/* canto superior direito: número do passo */}
                <span
                  className={cn(
                    "absolute right-5 top-5 font-display text-4xl font-bold leading-none transition-colors duration-500",
                    isActive || isDone ? "text-primary/25" : "text-foreground/10",
                  )}
                >
                  {s.step}
                </span>

                {/* linha de destaque no topo */}
                <span
                  className={cn(
                    "absolute left-0 right-0 top-0 h-1 transition-all duration-500",
                    isActive || isDone ? "bg-primary" : "bg-transparent",
                  )}
                />

                {/* ícone */}
                <span
                  className={cn(
                    "flex size-12 items-center justify-center rounded-xl border transition-all duration-500",
                    isActive
                      ? "border-primary bg-primary/10 text-primary"
                      : isDone
                        ? "border-primary/40 text-primary/80"
                        : "border-border bg-surface-2 text-muted-foreground",
                  )}
                >
                  <Icon
                    className={cn(
                      "size-5 transition-transform duration-500",
                      isActive && "scale-110",
                    )}
                  />
                </span>

                <h3
                  className={cn(
                    "mt-6 font-display text-xl font-semibold transition-colors duration-500",
                    isActive ? "text-primary" : "text-foreground",
                  )}
                >
                  {s.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

                <p className="mt-auto pt-5 text-xs leading-relaxed text-foreground/70">
                  {s.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
