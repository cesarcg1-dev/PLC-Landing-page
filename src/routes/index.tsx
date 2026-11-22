import { createFileRoute } from "@tanstack/react-router";
import {
  Contact,
  FAQ,
  Footer,
  Header,
  Hero,
  Process,
  Services,
  SocialProof,
  TrustBar,
  WhyUs,
  useScrollReveal,
} from "@/components/industrial/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TecnoMantenimiento Industrial MTY | CNC, PLC y electrónica" },
      {
        name: "description",
        content:
          "Mantenimiento especializado de centros de maquinado CNC, electricidad, electrónica y PLC. Atención en planta y taller en Monterrey y cobertura en cuatro estados.",
      },
      {
        property: "og:title",
        content: "TecnoMantenimiento Industrial MTY | CNC, PLC y electrónica",
      },
      {
        property: "og:description",
        content:
          "Soluciones especializadas para mantener tu operación funcionando. Solicita un diagnóstico para tu equipo industrial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});
function Index() {
  useScrollReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Process />
        <SocialProof />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
