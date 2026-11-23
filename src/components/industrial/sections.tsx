import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type FormEvent,
  type ImgHTMLAttributes,
} from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Cog,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Target,
  X,
  Mail,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import factoryImage from "@/assets/industrial-machine.jpg.asset.json";
import electronicsImage from "@/assets/industrial-workshop.jpg.asset.json";
import { business, contactForm, links, services } from "./content";

// Copias locales para desarrollo; el puntero de Lovable sigue siendo la fuente principal.
const LOCAL_IMAGES = {
  factory: "/src/assets/industrial-machine.jpg",
  electronics: "/src/assets/industrial-workshop.jpg",
} as const;

function applyLocalFallback(img: HTMLImageElement, fallback: string) {
  if (img.dataset.localFallback) return;
  img.dataset.localFallback = "true";
  img.setAttribute("src", fallback);
}

export function IndustrialImage({
  pointer,
  fallback,
  ...props
}: { pointer: { url: string }; fallback: string } & ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img?.complete && img.naturalWidth === 0) applyLocalFallback(img, fallback);
  }, [fallback]);

  return (
    <img
      {...props}
      ref={ref}
      src={pointer.url}
      onError={(event) => applyLocalFallback(event.currentTarget, fallback)}
    />
  );
}

function Wrap({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 lg:px-8 ${className}`}>{children}</div>;
}
function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
      <span className="h-0.5 w-7 bg-primary" />
      {children}
    </p>
  );
}
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <a
      href="#inicio"
      className={`flex items-center gap-2.5 ${inverted ? "text-navy-foreground" : "text-navy"}`}
    >
      <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Cog className="size-7" strokeWidth={1.7} />
      </span>
      <span className="font-display text-lg font-bold leading-tight sm:text-xl">
        Mtto MEX
        <span
          className={`block text-[10px] font-semibold uppercase tracking-[0.18em] ${inverted ? "text-navy-foreground/80" : "text-primary"}`}
        >
          CNC
        </span>
      </span>
    </a>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <Wrap className="flex h-20 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
          {links.map(([name, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-[13px] font-medium text-steel transition-colors hover:text-primary"
            >
              {name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="cta" asChild className="hidden sm:inline-flex">
            <a href="#contacto">
              Cotizar <ArrowUpRight />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </Wrap>
      {open && (
        <nav
          aria-label="Navegación móvil"
          className="border-t border-border bg-card px-6 py-5 lg:hidden"
        >
          {links.map(([name, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block py-3 font-medium text-foreground"
            >
              {name}
            </a>
          ))}
          <Button variant="cta" asChild>
            <a href="#contacto" onClick={() => setOpen(false)}>
              Cotizar <ArrowUpRight />
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
export function Hero() {
  return (
    <section id="inicio" className="relative mt-20 overflow-hidden bg-navy text-navy-foreground">
      <IndustrialImage
        pointer={factoryImage}
        fallback={LOCAL_IMAGES.factory}
        alt="Detalle de componentes mecánicos y sistemas de un equipo industrial"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="hero-overlay absolute inset-0" />
      <Wrap className="relative py-10 sm:py-20 lg:py-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded border border-navy-foreground/25 bg-navy-foreground/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] sm:text-xs">
          <span className="size-1.5 rounded-full bg-primary" />
          Precisión técnica. Continuidad industrial.
        </div>
        <h1 className="max-w-3xl text-[32px] font-bold leading-[1.08] sm:text-5xl lg:text-[60px]">
          Mantenimiento especializado para{" "}
          <span className="text-primary">centros de maquinado CNC</span> y equipos industriales
        </h1>
        <p className="mt-6 text-sm font-semibold tracking-wide text-navy-foreground sm:text-base">
          Electricidad <span className="px-1 text-primary">·</span> Electrónica{" "}
          <span className="px-1 text-primary">·</span> PLC{" "}
          <span className="px-1 text-primary">·</span> Automatización
        </p>
        <p className="mt-3 max-w-xl text-sm leading-7 text-navy-foreground/75 sm:text-base">
          Atención en planta o taller con respuesta rápida para que tu producción no se detenga.
          Cobertura en Nuevo León, Coahuila, Tamaulipas y San Luis Potosí.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="cta" size="xl" asChild>
            <a href="#contacto">
              Solicitar diagnóstico <ArrowRight />
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#servicios">
              Ver servicios <ChevronRight />
            </a>
          </Button>
        </div>
        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-navy-foreground/70">
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-primary" />
            Servicio técnico especializado
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" />
            Monterrey, Nuevo León
          </span>
        </div>
      </Wrap>
      <div className="absolute bottom-0 left-0 h-1 w-24 bg-primary" />
    </section>
  );
}
export function TrustBar() {
  const items = [
    { icon: BadgeCheck, value: `+${business.experienceYears} años`, text: "de experiencia" },
    { icon: ShieldCheck, value: "ISO 9001 y REPSE", text: "Certificaciones" },
    { icon: MapPin, value: business.coverage, text: "Cobertura" },
    {
      icon: Clock3,
      value: `Menos de ${business.emergencyHours} horas`,
      text: "Respuesta a emergencias",
    },
  ];
  return (
    <section className="border-b border-border bg-card">
      <Wrap className="grid grid-cols-2 py-7 md:grid-cols-4">
        {items.map(({ icon: Icon, value, text }, i) => (
          <div
            key={value}
            className={`flex items-center gap-3 px-2 py-3 sm:px-5 ${i > 0 ? "md:border-l md:border-border" : ""}`}
          >
            <Icon className="size-7 shrink-0 text-primary" strokeWidth={1.6} />
            <div>
              <p className="font-display text-base font-bold sm:text-lg">{value}</p>
              <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">{text}</p>
            </div>
          </div>
        ))}
      </Wrap>
    </section>
  );
}
export function Services() {
  return (
    <section id="servicios" className="py-16 sm:py-20">
      <Wrap>
        <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <Eyebrow>Soluciones para tu industria</Eyebrow>
            <h2 className="text-3xl font-bold sm:text-4xl">Nuestros servicios</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Soluciones especializadas para mantener tu operación funcionando.
            </p>
          </div>
          <a
            href="#contacto"
            className="flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Hablemos de tu equipo <ArrowUpRight className="size-4" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, items, label }) => (
            <article
              key={title}
              className="reveal card-lift relative rounded-lg border border-border bg-card p-7 sm:p-8"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="size-6" strokeWidth={1.6} />
                </span>
                <span className="text-[9px] font-semibold tracking-wider text-muted-foreground">
                  {label}
                </span>
              </div>
              <h3 className="max-w-sm text-2xl font-bold leading-tight">{title}</h3>
              <ul className="my-5 space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="mt-2 inline-flex items-center gap-2 border-t border-border pt-5 text-xs font-semibold text-navy"
              >
                Consultar este servicio <ArrowRight className="size-4 text-primary" />
              </a>
            </article>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
export function WhyUs() {
  const reasons = [
    {
      icon: Zap,
      title: "Respuesta rápida",
      text: `Atendemos emergencias en menos de ${business.emergencyHours} horas en nuestra zona de cobertura.`,
    },
    {
      icon: Target,
      title: "Especialización real",
      text: "No somos generalistas: dominamos CNC, PLC y electrónica industrial.",
    },
    {
      icon: ShieldCheck,
      title: "Diagnóstico honesto",
      text: "Si tu equipo no se puede reparar, te decimos por qué y qué alternativas tienes.",
    },
    { icon: MapPin, title: "Cobertura", text: `${business.coverage}.` },
  ];
  return (
    <section id="nosotros" className="bg-navy py-16 text-navy-foreground sm:py-20">
      <Wrap>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <Eyebrow>Tu operación, en buenas manos</Eyebrow>
            <h2 className="text-3xl font-bold sm:text-4xl">¿Por qué elegirnos?</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-navy-foreground/65">
              Más que reparar equipos, protegemos la continuidad de tu producción. Experiencia
              técnica y compromiso en cada servicio.
            </p>
            <div className="relative mt-8 overflow-hidden rounded-lg">
              <IndustrialImage
                pointer={electronicsImage}
                fallback={LOCAL_IMAGES.electronics}
                alt="Técnico realizando diagnóstico y reparación de una tarjeta electrónica"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="rounded bg-card px-3 py-1.5 text-[10px] font-semibold text-navy">
                  ISO 9001:2015
                </span>
                <span className="rounded bg-card px-3 py-1.5 text-[10px] font-semibold text-navy">
                  REPSE
                </span>
              </div>
            </div>
          </div>
          <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:pt-10">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title} className="reveal">
                <Icon className="mb-4 size-7 text-primary" strokeWidth={1.5} />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-navy-foreground/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
}
export function Process() {
  const steps = [
    ["Contacto", "Nos describes el problema por WhatsApp, teléfono o formulario."],
    ["Diagnóstico", "Evaluamos el equipo en planta o en nuestro taller."],
    ["Propuesta", "Recibes cotización técnica sin compromiso."],
    ["Ejecución", "Reparamos, probamos y entregamos con reporte de servicio."],
  ];
  return (
    <section id="proceso" className="bg-card py-16 sm:py-20">
      <Wrap>
        <div className="reveal text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Un proceso claro, de principio a fin
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">Cómo trabajamos</h2>
        </div>
        <div className="relative mt-12 grid gap-8 md:grid-cols-4">
          <div className="absolute left-10 right-10 top-6 hidden border-t border-dashed border-border md:block" />
          {steps.map(([title, text], i) => (
            <div key={title} className="reveal relative flex gap-5 md:block md:text-center">
              <span className="relative mx-auto mb-5 flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-accent font-display text-xl font-bold text-primary">
                0{i + 1}
              </span>
              <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
export function SocialProof() {
  return (
    <section className="border-y border-border py-16 sm:py-20">
      <Wrap>
        <div className="reveal text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Experiencia con los líderes de la industria
          </p>
          <h2 className="text-3xl font-bold">Marcas que atendemos</h2>
        </div>
        <div className="reveal mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {["Allen Bradley", "SIEMENS", "FANUC", "HAAS", "MITSUBISHI", "MAZAK"].map((brand) => (
            <div
              key={brand}
              className="flex h-20 items-center justify-center rounded-md border border-border bg-muted/50 px-3 font-display text-lg font-bold text-steel"
            >
              {brand}
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs leading-6 text-muted-foreground">
          Sectores atendidos: automotriz, metal-mecánico, alimentos, plásticos.
        </p>
      </Wrap>
    </section>
  );
}
export function FAQ() {
  const questions = [
    [
      "¿Atienden emergencias y en cuánto tiempo?",
      `Sí. Atendemos paros urgentes en menos de ${business.emergencyHours} horas en nuestra zona de cobertura. Contáctanos para confirmar disponibilidad.`,
    ],
    [
      "¿Trabajan en planta o debo llevar el equipo?",
      "Trabajamos en tu planta o en nuestro taller, según el tipo de equipo y la reparación necesaria.",
    ],
    [
      "¿Qué marcas de CNC y PLC manejan?",
      "Allen Bradley, Siemens, Fanuc, Haas, Mitsubishi y Mazak. Consúltanos por otras marcas.",
    ],
    [
      "¿Ofrecen planes de mantenimiento mensual?",
      "Sí. Diseñamos planes mensuales de mantenimiento preventivo según tus equipos y operación.",
    ],
    [
      "¿Cuánto cuesta un diagnóstico?",
      "El costo depende del equipo, la falla y la ubicación. Te compartimos las condiciones antes de iniciar; solicita una cotización sin compromiso.",
    ],
    [
      "¿Qué garantía tienen las reparaciones?",
      "La garantía se especifica en tu cotización y reporte técnico, según el servicio y los componentes utilizados.",
    ],
  ];
  return (
    <section id="faq" className="bg-card py-16 sm:py-20">
      <Wrap>
        <div className="mx-auto max-w-3xl">
          <div className="reveal mb-8 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Resolvemos tus dudas
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">Preguntas frecuentes</h2>
          </div>
          <Accordion type="single" collapsible className="reveal">
            {questions.map(([q, a], i) => (
              <AccordionItem key={q} value={`q${i}`}>
                <AccordionTrigger className="py-5 text-sm font-semibold sm:text-base">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl leading-7 text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Wrap>
    </section>
  );
}
export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    setSending(true);
    setError("");
    try {
      const response = await fetch(contactForm.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: contactForm.subject,
          _replyto: data.email,
          _captcha: "false",
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const result = (await response.json()) as { success?: string };
      if (result.success !== "true") throw new Error("Respuesta inesperada");
      setSent(true);
    } catch {
      setError("No se pudo enviar la solicitud. Intenta de nuevo o escríbenos por WhatsApp.");
    } finally {
      setSending(false);
    }
  };
  const field =
    "w-full rounded-md border border-input bg-card px-3 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/15";
  return (
    <section id="contacto" className="py-16 sm:py-20">
      <Wrap>
        <div className="reveal mb-10">
          <Eyebrow>Hablemos de tu equipo</Eyebrow>
          <h2 className="text-3xl font-bold sm:text-4xl">Solicita tu diagnóstico sin compromiso</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Cuéntanos qué necesitas. Estamos listos para ayudarte.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr]">
          <div className="reveal">
            {sent ? (
              <div
                role="status"
                className="flex min-h-96 flex-col items-center justify-center rounded-lg border border-border bg-card p-8 text-center"
              >
                <CheckCircle2 className="mb-5 size-12 text-primary" />
                <h3 className="text-2xl font-bold">¡Gracias por tu solicitud!</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                  Recibimos tu solicitud. Te responderemos al correo o teléfono que nos dejaste.
                </p>
                <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
                  Enviar otra solicitud
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  name="_honey"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                {[
                  ["Nombre", "name", "text"],
                  ["Empresa", "organization", "text"],
                  ["Teléfono / WhatsApp", "tel", "tel"],
                  ["Correo", "email", "email"],
                ].map(([label, name, type]) => (
                  <label key={name} className="space-y-2 text-xs font-semibold">
                    {label}
                    <input
                      className={`${field} mt-2`}
                      type={type}
                      name={name}
                      autoComplete={name}
                      required
                      placeholder={
                        label === "Nombre"
                          ? "Tu nombre completo"
                          : label === "Empresa"
                            ? "Nombre de tu empresa"
                            : label === "Correo"
                              ? "nombre@empresa.com"
                              : "811-1917-150"
                      }
                    />
                  </label>
                ))}
                <label className="text-xs font-semibold sm:col-span-2">
                  Tipo de equipo
                  <select name="equipment" className={`${field} mt-2`} required defaultValue="">
                    <option value="" disabled>
                      Selecciona el tipo de equipo
                    </option>
                    {[
                      "Centro de maquinado CNC",
                      "PLC o automatización",
                      "Tablero eléctrico",
                      "Electrónica",
                      "Otro",
                    ].map((value) => (
                      <option key={value}>{value}</option>
                    ))}
                  </select>
                </label>
                <label className="text-xs font-semibold sm:col-span-2">
                  Descripción breve del problema
                  <textarea
                    name="description"
                    className={`${field} mt-2 min-h-28 resize-y`}
                    required
                    placeholder="Cuéntanos qué falla presenta tu equipo…"
                  />
                </label>
                <div className="sm:col-span-2">
                  <Button variant="cta" size="xl" type="submit" disabled={sending}>
                    {sending ? "Enviando…" : "Enviar solicitud"} <ArrowRight />
                  </Button>
                  {error && (
                    <p role="alert" className="mt-4 text-xs font-medium text-destructive">
                      {error}
                    </p>
                  )}
                  <p className="mt-4 text-[10px] leading-5 text-muted-foreground">
                    Al enviar, aceptas nuestro{" "}
                    <a
                      href="#aviso-privacidad"
                      onClick={() => setPrivacy(true)}
                      className="underline underline-offset-2"
                    >
                      aviso de privacidad
                    </a>
                    .
                  </p>
                </div>
              </form>
            )}
            {privacy && (
              <div id="aviso-privacidad" className="mt-5 border-t border-border pt-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Aviso de privacidad</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Cerrar aviso de privacidad"
                    onClick={() => setPrivacy(false)}
                  >
                    <X />
                  </Button>
                </div>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">
                  Al enviar, tus datos se envían por correo a través de FormSubmit a{" "}
                  {business.email}. Este aviso es provisional: Mtto MEX CNC
                  publicará su aviso de privacidad completo y los medios para ejercer los derechos
                  ARCO.
                </p>
              </div>
            )}
          </div>
          <aside className="reveal rounded-lg border border-border bg-card p-7 shadow-soft">
            <h3 className="mb-6 text-2xl font-bold">Estamos para ayudarte</h3>
            <div className="space-y-5">
              {[
                { icon: Phone, title: "Teléfono", text: business.phone, href: business.tel },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  text: business.phone,
                  href: business.whatsapp,
                },
                {
                  icon: Mail,
                  title: "Correo",
                  text: business.email,
                  href: `mailto:${business.email}`,
                },
                {
                  icon: MapPin,
                  title: "Ubicación",
                  text: business.address,
                  href: `https://maps.google.com/?q=${encodeURIComponent(business.address)}`,
                },
              ].map(({ icon: Icon, title, text, href }) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1.7} />
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      {title}
                    </p>
                    <a
                      href={href}
                      className="mt-1 block break-words text-xs font-medium leading-5 hover:text-primary"
                    >
                      {text}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="whatsapp" asChild className="mt-6 w-full">
              <a href={business.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle />
                Escribir por WhatsApp
              </a>
            </Button>
            <div className="relative mt-6 flex h-36 items-center justify-center overflow-hidden rounded-md bg-muted">
              <div className="absolute inset-0 grid grid-cols-4 gap-1 opacity-50">
                {Array.from({ length: 12 }, (_, i) => (
                  <span key={i} className="border border-card" />
                ))}
              </div>
              <div className="relative text-center">
                <MapPin className="mx-auto mb-2 size-6 text-primary" />
                <p className="text-xs font-medium text-steel">Mapa — Monterrey, NL</p>
              </div>
            </div>
            <p className="mt-4 text-[10px] leading-5 text-muted-foreground">
              Cobertura: {business.coverage}.
            </p>
          </aside>
        </div>
      </Wrap>
    </section>
  );
}
export function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  return (
    <footer className="bg-navy-deep pt-12 text-navy-foreground">
      <Wrap>
        <div className="grid gap-10 pb-10 md:grid-cols-[1.5fr_0.7fr_1fr]">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-sm text-xs leading-6 text-navy-foreground/60">
              Mtto MEX CNC. Soluciones especializadas en CNC, electricidad,
              electrónica y automatización para que tu producción no se detenga.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Enlaces rápidos</h3>
            <nav aria-label="Navegación del pie de página" className="space-y-2">
              {links.map(([name, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="block text-xs text-navy-foreground/60 hover:text-primary"
                >
                  {name}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contacto</h3>
            <a
              href={business.tel}
              className="flex items-center gap-2 text-xs text-navy-foreground/60"
            >
              <Phone className="size-3.5 text-primary" />
              {business.phone}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="mt-3 flex items-start gap-2 break-all text-xs text-navy-foreground/60"
            >
              <Mail className="size-3.5 shrink-0 text-primary" />
              {business.email}
            </a>
            <p className="mt-3 flex items-start gap-2 break-words text-xs text-navy-foreground/60">
              <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" />
              {business.address}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-navy-foreground/15 py-5 text-[10px] text-navy-foreground/50">
          <p>© 2026 Mtto MEX CNC. Todos los derechos reservados.</p>
          <a
            href="#privacidad-footer"
            onClick={() => setShowPrivacy(!showPrivacy)}
            className="hover:text-primary"
          >
            Aviso de privacidad
          </a>
        </div>
        {showPrivacy && (
          <p id="privacidad-footer" className="pb-6 text-xs leading-6 text-navy-foreground/65">
            Aviso provisional: el formulario envía los datos por correo a través de FormSubmit a{" "}
            {business.email}. El aviso completo se publicará próximamente.
          </p>
        )}
      </Wrap>
      <Button
        variant="whatsapp"
        asChild
        className="fixed bottom-6 right-6 z-40 size-14 rounded-full shadow-lift"
        title="Escribir por WhatsApp"
      >
        <a
          href={business.whatsapp}
          aria-label="Escribir por WhatsApp"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="size-7!" />
        </a>
      </Button>
    </footer>
  );
}
