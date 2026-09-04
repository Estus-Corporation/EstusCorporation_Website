import type { CSSProperties } from "react";
import { ArrowUpRight, Check, Minus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { WHATSAPP_LINK } from "./contact-info";
import processBg from "@/assets/section-process-bg.jpg";

const MINT = "#4BD6A2";

/* ---------------------------------------------------------------- dados */

const highlights = [
  { value: "+50", label: "conversas geradas por uma única campanha em menos de 3 dias" },
  { value: "R$ 1,54", label: "CPC (custo por clique) em campanha de captação de leads" },
  { value: "73 mil", label: "visualizações em uma única campanha em menos de 3 dias" },
];

type Plan = {
  num: string;
  name: string;
  badge?: string;
  featured?: boolean;
  pitch: string;
  price: string;
  priceSuffix?: string;
  priceNote: string;
  items: string[];
  footnote: string;
};

const plans: Plan[] = [
  {
    num: "Plano 01",
    name: "Essencial",
    pitch: "Para quem quer começar a vender com anúncios, sem rodeios.",
    price: "R$ 800",
    priceSuffix: "/mês",
    priceNote: "+ R$ 500 de investimento em anúncios",
    items: [
      "Criação e configuração completa das campanhas no Meta Ads ou Google Ads",
      "Segmentação precisa por região, idade, interesses e comportamento",
      "Otimização contínua de públicos, criativos e verba",
      "Relatório mensal com métricas reais de desempenho",
      "Suporte direto via WhatsApp com o gestor responsável",
    ],
    footnote:
      "Custo total no primeiro mês: R$ 1.300 — sendo R$ 800 de gestão e R$ 500 pagos direto à plataforma.",
  },
  {
    num: "Plano 02",
    name: "Completo",
    badge: "Mais escolhido",
    featured: true,
    pitch: "Anúncios rodando e o seu Instagram com conteúdo novo todo mês.",
    price: "R$ 1.100",
    priceSuffix: "/mês",
    priceNote: "R$ 800 de gestão + R$ 300 de conteúdo, mais o investimento em anúncios",
    items: [
      "Tudo o que está incluso no plano Essencial",
      "3 reels por mês — roteiro, edição e legenda prontos",
      "6 posts por mês — arte e copy alinhadas à sua marca",
      "Conteúdo entregue pronto para você publicar no Instagram",
      "Anúncio e conteúdo falando a mesma língua, no mesmo mês",
    ],
    footnote:
      "Com R$ 500 de verba em anúncios: R$ 1.600/mês — presença completa, tráfego e conteúdo.",
  },
  {
    num: "Plano 03",
    name: "Parceria",
    badge: "4 meses",
    pitch: "Para quem quer construir presença de verdade, com o primeiro mês sem mensalidade.",
    price: "R$ 2.000",
    priceSuffix: " de entrada",
    priceNote: "+ R$ 1.200/mês a partir do 2º mês de trabalho",
    items: [
      "Primeiro mês isento de mensalidade — a entrada cobre o início do trabalho",
      "Criação de conteúdo para as redes sociais, entregue mensalmente",
      "Taxa de gestão das campanhas inclusa na mensalidade",
      "Impulsionamento dos conteúdos para alcançar novas pessoas",
      "Contrato de 4 meses — tempo suficiente para colher resultado consistente",
    ],
    footnote:
      "O conteúdo é entregue pronto e a publicação fica com o cliente. Se preferir que a Estus cuide da rede social e publique por você: + R$ 150/mês.",
  },
];

const comparison: { label: string; values: [string, string, string] }[] = [
  { label: "Gestão de campanhas", values: ["Sim", "Sim", "Sim"] },
  { label: "Relatório mensal", values: ["Sim", "Sim", "Sim"] },
  { label: "Criação de conteúdo", values: ["—", "3 reels + 6 posts", "Sim"] },
  { label: "Impulsionamento do conteúdo", values: ["—", "—", "Sim"] },
  { label: "Gestão da rede social", values: ["—", "—", "+ R$ 150/mês"] },
  { label: "Período mínimo", values: ["3 meses", "3 meses", "4 meses"] },
  { label: "Valor mensal", values: ["R$ 800 + verba", "R$ 1.100 + verba", "R$ 1.200"] },
];

const steps = [
  {
    step: "01",
    title: "Escolha do plano",
    desc: "Definimos juntos o plano e o nível de verba mensal.",
  },
  { step: "02", title: "Contrato", desc: "Envio e assinatura de um contrato simples e claro." },
  {
    step: "03",
    title: "Onboarding",
    desc: "Acesso ao gerenciador de anúncios e alinhamento da estratégia.",
  },
  {
    step: "04",
    title: "Lançamento",
    desc: "Campanhas no ar em poucos dias, com acompanhamento próximo.",
  },
  { step: "05", title: "Relatório", desc: "Métricas reais entregues até o dia 10 de cada mês." },
  {
    step: "06",
    title: "Escala",
    desc: "Ajuste de verba e novos formatos conforme o resultado aparece.",
  },
];

const before = [
  "Depende do movimento e do boca a boca",
  "Novidades que pouca gente vê",
  "Sem dados sobre o que traz cliente",
  "Conteúdo publicado quando sobra tempo",
];

const after = [
  "Anúncios atraindo clientes novos todos os dias",
  "Ofertas impulsionadas para o público certo",
  "Relatório mensal com métricas reais",
  "Calendário de conteúdo entregue todo mês",
];

/* ---------------------------------------------------------------- partes */

function SectionLabel({ num, children }: { num: string; children: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span
        className="font-display text-sm font-bold leading-none"
        style={{ color: `${MINT}99` }}
        aria-hidden="true"
      >
        {num}
      </span>
      <h3 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-4xl">
        {children}
      </h3>
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-2xl border bg-surface p-7 transition-all duration-500 hover-lift md:p-8",
        plan.featured ? "border-transparent" : "border-border",
      )}
      style={
        plan.featured
          ? {
              borderColor: MINT,
              boxShadow: `0 0 0 1px ${MINT}33, 0 30px 70px -30px rgba(75, 214, 162, 0.4)`,
            }
          : undefined
      }
    >
      {plan.badge && (
        <span
          className="absolute -top-3 left-7 inline-flex rounded-full border bg-surface px-3 py-1 font-display text-[0.6rem] font-bold uppercase tracking-[0.18em]"
          style={{ borderColor: `${MINT}66`, color: MINT }}
        >
          {plan.badge}
        </span>
      )}

      <p className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        {plan.num}
      </p>
      <h4 className="mt-3 font-display text-2xl font-semibold text-foreground md:text-3xl">
        {plan.name}
      </h4>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:min-h-[3.25rem]">
        {plan.pitch}
      </p>

      <div className="mt-6 border-y border-border py-5">
        <p className="font-display text-3xl font-bold leading-none text-foreground md:text-4xl">
          {plan.price}
          {plan.priceSuffix && (
            <span className="text-base font-medium text-muted-foreground">{plan.priceSuffix}</span>
          )}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{plan.priceNote}</p>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
            <Check className="mt-0.5 size-4 shrink-0" style={{ color: MINT }} />
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-6 rounded-xl border border-border bg-background/40 p-4 text-xs leading-relaxed text-muted-foreground">
        {plan.footnote}
      </p>

      <Button
        asChild
        size="lg"
        className={cn(
          "mt-6 w-full rounded-none text-xs font-bold uppercase tracking-[0.16em]",
          plan.featured
            ? "bg-foreground text-background hover:bg-foreground/90"
            : "border border-border bg-transparent text-foreground hover:bg-foreground/10",
        )}
      >
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
          Quero o plano {plan.name} <ArrowUpRight />
        </a>
      </Button>
    </div>
  );
}

function CellValue({ value }: { value: string }) {
  if (value === "—") {
    return (
      <span className="inline-flex items-center text-muted-foreground/60">
        <Minus className="size-4" aria-label="Não incluso" />
      </span>
    );
  }
  if (value === "Sim") {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
        <Check className="size-4" style={{ color: MINT }} />
        Sim
      </span>
    );
  }
  return <span className="text-sm text-foreground/80">{value}</span>;
}

/* ------------------------------------------------------------ componente */

export function Planos() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="planos"
      className="relative overflow-hidden border-t border-border section-dark py-20 md:py-28"
    >
      <img
        src={processBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-15"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background/88 to-background" />
      <div
        className="pointer-events-none absolute -right-40 top-24 size-[32rem] rounded-full opacity-[0.07] blur-[110px]"
        style={{ background: MINT }}
      />
      <div className="grid-backdrop-neutral pointer-events-none absolute inset-0 opacity-[0.3] [mask-image:radial-gradient(70%_55%_at_50%_0%,black,transparent)]" />
      <div className="grain pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Abertura */}
        <div className="reveal mx-auto max-w-3xl text-center" data-reveal>
          <p className="eyebrow justify-center">Proposta de serviços</p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            <span className="text-silver-gradient">Planos de</span>{" "}
            <span
              style={{
                color: MINT,
                textShadow: "0 0 18px rgba(75, 214, 162, 0.55), 0 0 42px rgba(75, 214, 162, 0.3)",
              }}
            >
              tráfego pago
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Não vendemos apenas anúncios. Construímos a presença digital que transforma visitantes
            em clientes — e clientes em vendas recorrentes para o seu negócio.
          </p>
        </div>

        <dl
          className="reveal mx-auto mt-12 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
          data-reveal
        >
          {highlights.map((h) => (
            <div key={h.value} className="bg-surface p-7">
              <dt
                className="font-display text-3xl font-bold leading-none md:text-4xl"
                style={{ color: MINT }}
              >
                {h.value}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.label}</dd>
            </div>
          ))}
        </dl>

        {/* 01 — Planos */}
        <div className="reveal mt-20" data-reveal>
          <SectionLabel num="01">Escolha o seu plano</SectionLabel>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Três formatos para três momentos de negócio. Todos com gestão de campanhas, otimização
            contínua e relatório mensal — o que muda é o quanto de conteúdo e presença você quer
            junto.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className="reveal"
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}
            >
              <PlanCard plan={p} />
            </div>
          ))}
        </div>

        {/* 02 — Comparativo */}
        <div className="reveal mt-20" data-reveal>
          <SectionLabel num="02">Comparativo rápido</SectionLabel>
        </div>

        <div
          className="reveal mt-10 overflow-hidden rounded-2xl border border-border bg-surface"
          data-reveal
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[42rem] border-collapse text-left">
              <caption className="sr-only">
                Comparativo entre os planos Essencial, Completo e Parceria
              </caption>
              <thead>
                <tr className="border-b border-border">
                  <th
                    scope="col"
                    className="px-5 py-4 font-display text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground md:px-7"
                  >
                    O que está incluso
                  </th>
                  {["Essencial", "Completo", "Parceria"].map((h, i) => (
                    <th
                      key={h}
                      scope="col"
                      className="px-5 py-4 font-display text-[0.62rem] font-semibold uppercase tracking-[0.2em] md:px-7"
                      style={{ color: i === 1 ? MINT : undefined }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-border last:border-b-0">
                    <th
                      scope="row"
                      className="px-5 py-4 text-sm font-medium text-foreground md:px-7"
                    >
                      {row.label}
                    </th>
                    {row.values.map((v, i) => (
                      <td key={i} className="px-5 py-4 md:px-7">
                        <CellValue value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="reveal mt-6 grid gap-5 md:grid-cols-2" data-reveal>
          <div className="rounded-2xl border border-border bg-surface p-7">
            <h4 className="font-display text-lg font-semibold text-foreground">
              Como funciona o investimento em anúncios
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Nos planos Essencial e Completo, o valor de mídia é pago direto na plataforma (Meta ou
              Google) e fica sempre no seu controle — separado da taxa de gestão. A taxa é fixa para
              verbas de até R$ 1.500/mês; acima disso, é acrescido 20% sobre o valor excedente,
              garantindo proporcionalidade conforme a campanha cresce.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-7">
            <h4 className="font-display text-lg font-semibold text-foreground">
              Por que existe um período mínimo
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              O período mínimo existe por um motivo técnico: o primeiro mês é de configuração e
              aprendizado do algoritmo, o segundo de otimização e o terceiro de colheita de
              resultados consistentes.
            </p>
          </div>
        </div>

        {/* 03 — Como começamos */}
        <div className="reveal mt-20" data-reveal>
          <SectionLabel num="03">Como começamos</SectionLabel>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Do primeiro contato à primeira escala, sem etapa escondida.
          </p>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.step}
              className="reveal"
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-500 hover-lift">
                <span
                  className="absolute right-5 top-5 font-display text-4xl font-bold leading-none text-foreground/10 transition-colors duration-500 group-hover:text-foreground/20"
                  aria-hidden="true"
                >
                  {s.step}
                </span>
                <span
                  className="flex size-10 items-center justify-center rounded-xl border font-display text-sm font-bold"
                  style={{ borderColor: `${MINT}55`, backgroundColor: `${MINT}1a`, color: MINT }}
                >
                  {s.step}
                </span>
                <h4 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {s.title}
                </h4>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Antes / depois */}
        <div className="reveal mt-20 grid gap-5 md:grid-cols-2 md:gap-7" data-reveal>
          <div className="rounded-2xl border border-border bg-background/40 p-7 md:p-9">
            <p className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              O seu negócio hoje
            </p>
            <ul className="mt-7 space-y-5">
              {before.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <Minus className="mt-0.5 size-4 shrink-0 opacity-50" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-2xl border bg-surface p-7 md:p-9"
            style={{
              borderColor: `${MINT}55`,
              boxShadow: "0 30px 70px -35px rgba(75, 214, 162, 0.35)",
            }}
          >
            <p
              className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.22em]"
              style={{ color: MINT }}
            >
              Com a Estus Corporation
            </p>
            <ul className="mt-7 space-y-5">
              {after.map((a) => (
                <li key={a} className="flex gap-3 text-sm leading-relaxed text-foreground">
                  <span
                    className="mt-0.5 shrink-0 font-display text-sm font-bold"
                    style={{ color: MINT }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Transparência */}
        <div className="reveal mt-6 grid gap-5 md:grid-cols-[1.3fr_1fr] md:gap-7" data-reveal>
          <div className="rounded-2xl border border-border bg-surface p-7 md:p-9">
            <h4 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
              Por que <span style={{ color: MINT }}>R$ 800</span>?
            </h4>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              Nosso valor base de gestão é R$ 1.200/mês. Os R$ 800 são uma condição promocional
              exclusiva para os 10 primeiros clientes que fecharem conosco. Trabalhamos com uma
              estrutura enxuta — e é exatamente por isso que conseguimos oferecer esse valor.
              Estrutura menor não significa resultado menor: a mesma estratégia, os mesmos criativos
              e a mesma otimização continuam aqui. Você paga menos pela operação, nunca pela
              qualidade.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-7 md:p-9">
            <h4 className="font-display text-lg font-semibold text-foreground">
              Condições comerciais
            </h4>
            <ul className="mt-5 space-y-3.5 text-sm leading-relaxed text-muted-foreground">
              <li className="flex gap-3">
                <Check className="mt-0.5 size-4 shrink-0" style={{ color: MINT }} />
                Mensalidade paga via Pix, cartão, boleto ou transferência, todo dia 5.
              </li>
              <li className="flex gap-3">
                <Check className="mt-0.5 size-4 shrink-0" style={{ color: MINT }} />
                Cancelamento com aviso prévio de 15 dias após o período mínimo.
              </li>
              <li className="flex gap-3">
                <Check className="mt-0.5 size-4 shrink-0" style={{ color: MINT }} />O cliente
                fornece fotos, materiais e informações do negócio.
              </li>
              <li className="flex gap-3">
                <Check className="mt-0.5 size-4 shrink-0" style={{ color: MINT }} />
                Suporte direto via WhatsApp com o gestor responsável.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
