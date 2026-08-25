import { useEffect, useState } from "react";
import { ClipboardList, Compass, Rocket, TrendingUp } from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import processBg from "@/assets/section-process-bg.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

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

const STEP_MS = 2000;
const MINT = "#4BD6A2";

function ProcessCard({
  s,
  isActive,
  isDone,
}: {
  s: (typeof steps)[number];
  isActive: boolean;
  isDone: boolean;
}) {
  const Icon = s.icon;

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-surface p-7 transition-all duration-500 hover-lift",
        !isActive && !isDone && "border-border",
      )}
      style={{
        borderColor: isActive ? MINT : isDone ? `${MINT}66` : undefined,
        boxShadow: isActive
          ? `0 0 0 1px ${MINT}33, 0 24px 60px -24px rgba(75, 214, 162, 0.35)`
          : undefined,
      }}
    >
      {/* canto superior direito: número do passo */}
      <span
        className={cn(
          "absolute right-5 top-5 font-display text-4xl font-bold leading-none transition-colors duration-500",
          !isActive && !isDone && "text-foreground/10",
        )}
        style={{ color: isActive || isDone ? `${MINT}40` : undefined }}
      >
        {s.step}
      </span>

      {/* linha de destaque no topo */}
      <span
        className="absolute left-0 right-0 top-0 h-1 transition-all duration-500"
        style={{ background: isActive || isDone ? MINT : "transparent" }}
      />

      {/* ícone */}
      <span
        className={cn(
          "flex size-12 items-center justify-center rounded-xl border transition-all duration-500",
          !isActive && !isDone && "border-border bg-surface-2 text-muted-foreground",
        )}
        style={
          isActive
            ? { borderColor: MINT, backgroundColor: `${MINT}1a`, color: MINT }
            : isDone
              ? { borderColor: `${MINT}66`, color: `${MINT}cc` }
              : undefined
        }
      >
        <Icon className={cn("size-5 transition-transform duration-500", isActive && "scale-110")} />
      </span>

      <h3
        className="mt-6 font-display text-xl font-semibold text-foreground transition-colors duration-500"
        style={{ color: isActive ? MINT : undefined }}
      >
        {s.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

      <p className="mt-auto pt-5 text-xs leading-relaxed text-foreground/70">{s.detail}</p>
    </div>
  );
}

export function Process() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [api, setApi] = useState<CarouselApi>();

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

  useEffect(() => {
    api?.scrollTo(active);
  }, [api, active]);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setActive(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

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
        <div className="reveal mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow">Como trabalhamos</p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            Um processo simples, com
            <br />
            <span
              className="md:whitespace-nowrap"
              style={{
                color: "#4BD6A2",
                textShadow: "0 0 18px rgba(75, 214, 162, 0.55), 0 0 42px rgba(75, 214, 162, 0.3)",
              }}
            >
              responsabilidade sobre o resultado
            </span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-base leading-relaxed text-muted-foreground">
            Quatro etapas claras, do primeiro diagnóstico ao ciclo contínuo de otimização.
          </p>
        </div>

        {/* Barra de progresso sutil */}
        <div className="reveal mx-auto mt-14 max-w-3xl" data-reveal>
          <div className="relative h-1 overflow-hidden rounded-full bg-foreground/10">
            <span
              className="absolute inset-y-0 left-0 transition-all duration-700 ease-out"
              style={{ width: `${((active + 1) / steps.length) * 100}%`, background: MINT }}
            />
          </div>
          <div className="mt-3 flex justify-between text-xs font-semibold text-muted-foreground">
            {steps.map((s, i) => (
              <span
                key={s.step}
                className="transition-colors duration-500"
                style={{ color: i <= active ? MINT : undefined }}
              >
                {s.step}
              </span>
            ))}
          </div>
        </div>

        {/* Cards de passos — mobile: slide, desktop: grid */}
        <div className="reveal mt-14 md:hidden" data-reveal>
          <Carousel setApi={setApi} opts={{ loop: true }}>
            <CarouselContent>
              {steps.map((s, i) => (
                <CarouselItem key={s.step}>
                  <ProcessCard s={s} isActive={i === active} isDone={i < active} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="mt-5 flex justify-center gap-2">
            {steps.map((s, i) => (
              <button
                key={s.step}
                type="button"
                aria-label={`Ir para etapa ${s.step}`}
                onClick={() => setActive(i)}
                className="h-1.5 rounded-full transition-all duration-500"
                style={{
                  width: i === active ? 20 : 6,
                  background: i === active ? MINT : "var(--border)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="reveal mt-14 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4" data-reveal>
          {steps.map((s, i) => (
            <ProcessCard key={s.step} s={s} isActive={i === active} isDone={i < active} />
          ))}
        </div>
      </div>
    </section>
  );
}
