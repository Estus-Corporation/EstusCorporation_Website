import { useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL, PHONE_DISPLAY, WHATSAPP_LINK } from "./contact-info";
import contactBg from "@/assets/section-contact-bg.jpg";
import { SectionBackdrop } from "./SectionBackdrop";

export function Contact() {
  const revealRef = useReveal<HTMLElement>();
  const [form, setForm] = useState({ nome: "", empresa: "", servico: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.nome}${form.empresa ? ` (${form.empresa})` : ""}.
Interesse: ${form.servico || "não informado"}.
${form.mensagem}`;
    window.open(`https://wa.me/5516997920301?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section
      ref={revealRef}
      id="contato"
      className="relative overflow-hidden section-dark py-20 md:py-36"
    >
      <SectionBackdrop
        image={contactBg}
        overlay="bg-gradient-to-b from-background/80 via-background/88 to-background"
      />
      <div className="ambient-aurora pointer-events-none absolute inset-0 opacity-40" />
      <div className="grain pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 sm:px-6 lg:px-8 md:grid-cols-2 md:gap-14">
        <div className="reveal order-2 min-w-0 md:order-1" data-reveal>
          <p className="eyebrow">Fale com a gente</p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            Vamos montar seu{" "}
            <span style={{ color: "var(--mint)", textShadow: "var(--mint-glow)" }}>
              plano de crescimento
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Conte rapidamente sobre seu negócio. Respondemos com um diagnóstico inicial e o próximo
            passo recomendado — sem compromisso.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-10 md:grid-cols-1 md:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="surface-panel hover-lift flex items-center gap-3 rounded-xl p-4 hover:-translate-y-1 hover:border-foreground/25 md:gap-4 md:p-5"
            >
              <MessageCircle className="size-5 shrink-0 text-primary" />
              <span className="text-sm">
                WhatsApp
                <span className="block font-display text-sm font-semibold md:text-base">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="surface-panel hover-lift flex items-center gap-3 rounded-xl p-4 hover:-translate-y-1 hover:border-foreground/25 md:gap-4 md:p-5"
            >
              <Mail className="size-5 shrink-0 text-primary" />
              <span className="min-w-0 text-sm">
                E-mail
                <span className="block truncate font-display text-sm font-semibold md:text-base">
                  {EMAIL}
                </span>
              </span>
            </a>
            <div className="surface-panel flex items-center gap-3 rounded-xl p-4 md:gap-4 md:p-5">
              <Phone className="size-5 shrink-0 text-primary" />
              <span className="text-sm">
                Atendimento
                <span className="block font-display text-sm font-semibold md:text-base">
                  Seg a Sex, 9h às 18h
                </span>
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          data-reveal
          style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          className="reveal surface-panel order-1 min-w-0 space-y-5 rounded-2xl p-6 md:order-2 md:p-8"
        >
          <div className="space-y-2">
            <Label htmlFor="nome">Seu nome</Label>
            <Input
              id="nome"
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              placeholder="Como podemos te chamar?"
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="empresa">Empresa</Label>
            <Input
              id="empresa"
              value={form.empresa}
              onChange={(e) => setForm({ ...form, empresa: e.target.value })}
              placeholder="Nome do seu negócio"
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="servico">O que você precisa?</Label>
            <Input
              id="servico"
              value={form.servico}
              onChange={(e) => setForm({ ...form, servico: e.target.value })}
              placeholder="Tráfego pago, site, SEO, Google Meu Negócio..."
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea
              id="mensagem"
              rows={4}
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              placeholder="Conte um pouco sobre seu momento atual e sua meta."
            />
          </div>
          <Button type="submit" variant="brand" size="xl" className="w-full">
            Enviar pelo WhatsApp
          </Button>
          <p className="text-xs text-muted-foreground">
            Ao enviar, abrimos uma conversa no WhatsApp com sua mensagem já preenchida.
          </p>
        </form>
      </div>
    </section>
  );
}
