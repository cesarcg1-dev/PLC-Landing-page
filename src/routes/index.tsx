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
      { title: "Mtto MEX CNC | CNC, PLC y electrónica" },
      {
        name: "description",
        content:
          "Mantenimiento especializado de centros de maquinado CNC, electricidad, electrónica y PLC. Atención en planta y taller, con cobertura en el Area Metropolitana de Monterrey.",
      },
      {
        property: "og:title",
        content: "Mtto MEX CNC | CNC, PLC y electrónica",
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
