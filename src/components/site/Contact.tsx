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
      className="relative overflow-hidden section-dark py-28 md:py-36"
    >
      <SectionBackdrop
        image={contactBg}
        overlay="bg-gradient-to-b from-background/80 via-background/88 to-background"
        flip
      />
      <div className="ambient-aurora pointer-events-none absolute inset-0 opacity-40" />
      <div className="grain pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid max-w-[1400px] gap-14 px-4 sm:px-6 lg:px-8 md:grid-cols-2">
        <div className="reveal" data-reveal>
          <p className="eyebrow">Fale com a gente</p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            Vamos montar seu{" "}
            <span
              style={{
                color: "#4BD6A2",
                textShadow: "0 0 18px rgba(75, 214, 162, 0.55), 0 0 42px rgba(75, 214, 162, 0.3)",
              }}
            >
              plano de crescimento
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Conte rapidamente sobre seu negócio. Respondemos com um diagnóstico inicial e o próximo
            passo recomendado — sem compromisso.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="surface-panel hover-lift flex items-center gap-4 rounded-xl p-5 hover:-translate-y-1 hover:border-foreground/25"
            >
              <MessageCircle className="size-5 text-primary" />
              <span className="text-sm">
                WhatsApp
                <span className="block font-display text-base font-semibold">{PHONE_DISPLAY}</span>
              </span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="surface-panel hover-lift flex items-center gap-4 rounded-xl p-5 hover:-translate-y-1 hover:border-foreground/25"
            >
              <Mail className="size-5 text-primary" />
              <span className="text-sm">
                E-mail
                <span className="block font-display text-base font-semibold">{EMAIL}</span>
              </span>
            </a>
            <div className="surface-panel flex items-center gap-4 rounded-xl p-5">
              <Phone className="size-5 text-primary" />
              <span className="text-sm">
                Atendimento
                <span className="block font-display text-base font-semibold">
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
          className="reveal surface-panel space-y-5 rounded-2xl p-8"
        >
          <div className="space-y-2">
            <Label htmlFor="nome">Seu nome</Label>
            <Input
              id="nome"
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              placeholder="Como podemos te chamar?"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="empresa">Empresa</Label>
            <Input
              id="empresa"
              value={form.empresa}
              onChange={(e) => setForm({ ...form, empresa: e.target.value })}
              placeholder="Nome do seu negócio"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="servico">O que você precisa?</Label>
            <Input
              id="servico"
              value={form.servico}
              onChange={(e) => setForm({ ...form, servico: e.target.value })}
              placeholder="Tráfego pago, site, SEO, Google Meu Negócio..."
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
