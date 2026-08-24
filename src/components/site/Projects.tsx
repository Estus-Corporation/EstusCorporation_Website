import { useState } from "react";
import { ArrowLeft, ArrowRight, BarChart3, Globe, MapPin, Search } from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";
import projectsBg from "@/assets/section-results-bg.jpg";
import { SectionBackdrop } from "./SectionBackdrop";

const MINT = "#4BD6A2";

const projects = [
  {
    category: "Tráfego pago",
    icon: BarChart3,
    name: "Clínica Sorriso Odontologia",
    client: "Marcelo Ribeiro",
    desc: "Campanhas no Meta Ads estruturadas por objetivo, com o agendamento acontecendo direto pelo WhatsApp e o custo por lead acompanhado toda semana.",
  },
  {
    category: "Sites e landing pages",
    icon: Globe,
    name: "Bella Móveis Planejados",
    client: "Fernanda Alves",
    desc: "Site novo, rápido e pensado para apresentar o catálogo e levar o visitante direto para o orçamento pelo WhatsApp.",
  },
  {
    category: "Otimização de SEO",
    icon: Search,
    name: "Studio Andrade Arquitetura",
    client: "Estudo de caso",
    desc: "Auditoria técnica e conteúdo otimizado para aparecer nas buscas por projetos de arquitetura na região.",
  },
  {
    category: "Google Meu Negócio",
    icon: MapPin,
    name: "TechFix Assistência Técnica",
    client: "Rodrigo Pinheiro",
    desc: "Perfil otimizado no Google, com fotos, posts e avaliações gerenciadas de perto — hoje a maior fonte de ligações novas.",
  },
];

export function Projects() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState(0);
  const project = projects[active]!;

  const go = (dir: 1 | -1) => {
    setActive((prev) => (prev + dir + projects.length) % projects.length);
  };

  return (
    <section
      ref={ref}
      id="projetos"
      className="relative overflow-hidden section-dark py-28 md:py-36"
    >
      <SectionBackdrop
        image={projectsBg}
        overlay="bg-gradient-to-b from-background/80 via-background/88 to-background"
      />
      <div className="ambient-aurora pointer-events-none absolute inset-0 opacity-40" />
      <div className="grain pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-2xl" data-reveal>
          <p className="eyebrow">Projetos</p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            Alguns dos negócios que já{" "}
            <span className="text-silver-gradient">colocamos pra crescer</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Micro e pequenas empresas de verdade, cada uma com uma frente diferente da Estus
            trabalhando por trás.
          </p>
        </div>

        <div className="relative mt-14 px-14 sm:px-16">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Projeto anterior"
            className="absolute left-0 top-1/2 z-10 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-[#4BD6A2]/50 hover:text-[#4BD6A2] md:size-12"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próximo projeto"
            className="absolute right-0 top-1/2 z-10 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-[#4BD6A2]/50 hover:text-[#4BD6A2] md:size-12"
          >
            <ArrowRight className="size-5" />
          </button>

          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
            {/* Informação — esquerda */}
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex rounded-full border px-2.5 py-0.5 font-display text-[0.65rem] font-semibold uppercase tracking-[0.16em]"
                  style={{ borderColor: `${MINT}66`, color: MINT }}
                >
                  {project.category}
                </span>
                <span className="text-xs text-muted-foreground">{project.client}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-foreground md:text-3xl">
                {project.name}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                {project.desc}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="font-display text-xs text-muted-foreground">
                  {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
                <div className="flex gap-2">
                  {projects.map((p, i) => (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Ver projeto ${i + 1}`}
                      aria-current={i === active}
                      className="cursor-pointer p-1"
                    >
                      <span
                        className="block h-1 w-6 rounded-full transition-colors"
                        style={{
                          background: i === active ? MINT : "var(--border)",
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mockup do projeto — direita */}
            <div className="relative">
              <span className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-foreground/[0.06] blur-[100px]" />
              <div className="surface-panel relative aspect-[4/3] overflow-hidden rounded-3xl border border-border p-6">
                <div className="dot-grid pointer-events-none absolute inset-0 opacity-30" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-foreground/15" />
                    <span className="size-2.5 rounded-full bg-foreground/15" />
                    <span className="size-2.5 rounded-full bg-foreground/15" />
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
                    <span
                      className="flex size-16 items-center justify-center rounded-2xl border"
                      style={{
                        borderColor: `${MINT}55`,
                        backgroundColor: `${MINT}1a`,
                        color: MINT,
                      }}
                    >
                      <project.icon className="size-7" />
                    </span>
                    <span className="font-display text-lg font-semibold text-foreground">
                      {project.name}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              <span className="pointer-events-none absolute -left-3 -top-3 size-16 rounded-tl-3xl border-l border-t border-foreground/15" />
              <span className="pointer-events-none absolute -bottom-3 -right-3 size-16 rounded-br-3xl border-b border-r border-foreground/15" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
