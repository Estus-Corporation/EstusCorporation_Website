import { useState } from "react";
import { ArrowUpRight, BarChart3, Check, Globe, MapPin, Search } from "lucide-react";

import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { WHATSAPP_LINK } from "./contact-info";
import servicesBg from "@/assets/hero-bg-alt.jpg";
import trafficImg from "@/assets/service-traffic.jpg";
import sitesImg from "@/assets/service-sites-crop.jpg";
import seoImg from "@/assets/service-seo.jpg";
import gmnImg from "@/assets/service-gmn.jpg";

const MINT = "#4BD6A2";

const services = [
  {
    num: "01",
    short: "Tráfego pago",
    icon: BarChart3,
    image: trafficImg,
    alt: "Equipe analisando um painel de métricas de campanhas",
    tag: "Mais procurado",
    title: "Gestão de tráfego pago",
    desc: "Campanhas no Meta Ads e Google Ads estruturadas por objetivo: leads, vendas ou agendamentos. Otimização semanal com foco em custo por resultado — e relatório que você entende.",
    items: [
      "Meta Ads (Instagram e Facebook)",
      "Google Ads (Pesquisa, PMax, YouTube)",
      "Públicos e criativos testados sem achismo",
      "Acompanhamento de custo por lead",
    ],
  },
  {
    num: "02",
    short: "Sites",
    icon: Globe,
    image: sitesImg,
    imagePosition: "center",
    alt: "Teclado de notebook usado no desenvolvimento de um site",
    title: "Sites e landing pages",
    desc: "Sites rápidos, responsivos e feitos para converter — não só para serem bonitos. Cada página pensada para levar o visitante até o WhatsApp ou o formulário.",
    items: ["Design sob medida", "Performance e mobile first", "Integração com WhatsApp"],
  },
  {
    num: "03",
    short: "SEO",
    icon: Search,
    image: seoImg,
    imagePosition: "center 30%",
    alt: "Notebook exibindo painel de SEO com gráfico em crescimento",
    title: "Otimização de SEO",
    desc: "Seu negócio aparecendo quando o cliente pesquisa, com tráfego que não depende de anúncio — crescimento que se sustenta com o tempo.",
    items: ["Auditoria técnica", "Palavras-chave e conteúdo", "SEO local e links"],
  },
  {
    num: "04",
    short: "Google Meu Negócio",
    icon: MapPin,
    image: gmnImg,
    imagePosition: "center 35%",
    alt: "Celular mostrando um marcador no mapa em uma rua comercial",
    title: "Google Meu Negócio",
    desc: "Perfil otimizado para aparecer no mapa e receber ligações da sua região — o primeiro contato que muita gente tem com o seu negócio.",
    items: ["Otimização completa do perfil", "Fotos, posts e categorias", "Gestão de avaliações"],
  },
];

export function Services() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState(0);
  const current = services[active]!;

  return (
    <section
      ref={ref}
      id="servicos"
      className="relative overflow-hidden section-dark py-28 md:py-36"
    >
      <img
        src={servicesBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-20"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div
        className="pointer-events-none absolute -left-40 top-24 size-[32rem] rounded-full opacity-[0.07] blur-[110px]"
        style={{ background: MINT }}
      />
      <div className="grid-backdrop-neutral pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(70%_55%_at_50%_0%,black,transparent)]" />
      <div className="grain pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="reveal" data-reveal>
          <p className="eyebrow">Soluções</p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            Quatro frentes, <span className="text-silver-gradient">um só objetivo</span>:{" "}
            <span
              style={{
                color: MINT,
                textShadow: "0 0 18px rgba(75, 214, 162, 0.55), 0 0 42px rgba(75, 214, 162, 0.3)",
              }}
            >
              mais clientes chegando até você
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Cada serviço funciona sozinho, mas o resultado real aparece quando eles trabalham juntos
            — anúncio trazendo gente, site convertendo e busca sustentando o crescimento.
          </p>
        </div>

        {/* Abas — clique para trocar o serviço em destaque */}
        <div
          role="tablist"
          aria-label="Serviços"
          className="reveal mt-12 flex flex-wrap gap-x-2 gap-y-3 border-b border-border"
          data-reveal
        >
          {services.map((s, i) => (
            <button
              key={s.num}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-controls={`servico-painel-${i}`}
              id={`servico-aba-${i}`}
              onClick={() => setActive(i)}
              className={cn(
                "relative flex cursor-pointer items-center gap-2 px-3 py-3.5 text-sm font-semibold transition-colors sm:px-4",
                active === i ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span
                className="font-display text-xs"
                style={{ color: active === i ? MINT : undefined }}
              >
                {s.num}
              </span>
              {s.short}
              <span
                className="absolute inset-x-0 -bottom-px h-0.5 rounded-full transition-opacity"
                style={{
                  background: MINT,
                  opacity: active === i ? 1 : 0,
                }}
              />
            </button>
          ))}
        </div>

        <div
          id={`servico-painel-${active}`}
          role="tabpanel"
          aria-labelledby={`servico-aba-${active}`}
          className="mt-10 grid gap-8 md:grid-cols-2 md:items-center md:gap-14"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border">
            <img
              src={current.image}
              alt={current.alt}
              loading="lazy"
              style={{ objectPosition: current.imagePosition }}
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent" />
            <span
              className="absolute left-5 top-5 flex size-12 items-center justify-center rounded-xl border backdrop-blur"
              style={{ borderColor: `${MINT}55`, backgroundColor: `${MINT}1a`, color: MINT }}
            >
              <current.icon className="size-5" />
            </span>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="font-display text-sm font-bold" style={{ color: MINT }}>
                {current.num}
              </span>
              <span className="h-px max-w-10 flex-1 bg-border" />
              {current.tag && (
                <span
                  className="inline-flex rounded-full border px-2.5 py-0.5 font-display text-[0.65rem] font-semibold uppercase tracking-[0.16em]"
                  style={{ borderColor: `${MINT}66`, color: MINT }}
                >
                  {current.tag}
                </span>
              )}
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold text-foreground md:text-3xl">
              {current.title}
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              {current.desc}
            </p>
            <ul className="mt-6 space-y-2.5">
              {current.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                  <Check className="size-4 shrink-0" style={{ color: MINT }} />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="mt-8 w-fit rounded-none bg-foreground text-xs font-bold uppercase tracking-[0.16em] text-background hover:bg-foreground/90"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Falar sobre esse serviço <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
