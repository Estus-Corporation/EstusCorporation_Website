import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";

import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "Estus Corporation | Tráfego pago, sites e SEO para seu negócio";
const description =
  "Agência de soluções digitais: gestão de Meta Ads e Google Ads, criação de sites que convertem, otimização de SEO e Google Meu Negócio.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Process />
        <Projects />
        <Testimonials />

        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
