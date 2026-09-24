import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowDown, MessagesSquare, UserX, Hand, Layers, Sparkles, Monitor, Users, Workflow, Boxes,
  Instagram, Globe, ShoppingBag, CalendarCheck, Database, HeartHandshake, Target,
} from "lucide-react";
import { Navbar, Footer } from "@/components/site/Chrome";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/lib/projects";
import founder from "@/assets/founder.png.asset.json";

const TITLE = "DAMASIO NEXA.I.A — Soluções digitais inteligentes para negócios";
const DESC = "Inteligência Artificial, sites, CRM e automações para negócios que querem vender, atender e operar de forma mais inteligente.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
      <span className="h-px w-8 bg-primary" />
      {children}
    </p>
  );
}

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solutions />
        <Paths />
        <Projects />
        <HowItWorks />
        <Founder />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
const chain = [
  { label: "Cliente", meta: "Nova mensagem" },
  { label: "IA", meta: "Atendimento iniciado" },
  { label: "Site", meta: "Página visitada" },
  { label: "CRM", meta: "Lead registrado" },
  { label: "Automação", meta: "Follow-up agendado" },
  { label: "Venda", meta: "Oportunidade concluída" },
];

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 70% 40%, black 10%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-16 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal><Eyebrow>Soluções digitais para negócios</Eyebrow></Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 text-[2.35rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.9rem]">
              Seu negócio não precisa trabalhar mais.{" "}
              <span className="text-primary">Precisa trabalhar de forma mais inteligente.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Criamos soluções digitais que conectam atendimento, vendas e relacionamento — tornando processos mais simples, organizados e eficientes.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/" hash="solucoes" className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                Conhecer soluções <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/" hash="projetos" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary">
                Ver projetos
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={250} className="lg:col-span-5">
          <ChainPanel />
        </Reveal>
      </div>
    </section>
  );
}

function ChainPanel() {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-border bg-card/80 p-5 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
          <span className="h-2 w-2 rounded-full bg-foreground/15" />
        </div>
        <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-primary" /> Fluxo conectado
        </span>
      </div>
      <div className="relative mt-5">
        <div className="absolute bottom-6 left-[19px] top-6 w-px bg-border">
          <span className="travel absolute -left-[2px] h-6 w-[5px] rounded-full bg-primary blur-[1px]" />
        </div>
        <ul className="space-y-2.5">
          {chain.map((c, i) => (
            <li key={c.label} className="relative flex items-center gap-4 rounded-xl border border-border bg-background/60 px-3 py-2.5">
              <span className={`relative z-10 flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full border ${i === chain.length - 1 ? "border-primary bg-primary" : "border-primary/50 bg-card"} ml-[13px]`}>
                {i !== chain.length - 1 && <span className="h-1 w-1 rounded-full bg-primary" />}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">{c.label}</span>
              <span className="ml-auto truncate text-[11px] text-muted-foreground">{c.meta}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------- PROBLEM ---------------- */
const problems = [
  { icon: MessagesSquare, t: "Atendimento repetitivo", d: "As mesmas dúvidas respondidas todos os dias." },
  { icon: UserX, t: "Leads esquecidos", d: "Pessoas interessadas que acabam não recebendo acompanhamento." },
  { icon: Hand, t: "Processos manuais", d: "Agendamento, organização e acompanhamento feitos na mão." },
  { icon: Layers, t: "Dados espalhados", d: "Informações existem, mas nem sempre ajudam na tomada de decisão." },
];

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-20 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">{children}</div>
    </section>
  );
}

function Problem() {
  return (
    <Section className="border-t border-border">
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <Eyebrow>O desafio</Eyebrow>
          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Enquanto você cuida do negócio, quem cuida dessas tarefas?
          </h2>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-5 lg:col-start-8 lg:self-end">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Muitos processos ainda dependem de trabalho manual, respostas repetitivas e informações espalhadas.
          </p>
        </Reveal>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((p, i) => (
          <Reveal key={p.t} delay={i * 80} className="h-full">
            <div className="group h-full bg-background p-8 transition-colors hover:bg-card">
              <p.icon size={20} strokeWidth={1.5} className="text-muted-foreground transition-colors group-hover:text-primary" />
              <h3 className="mt-10 text-xs font-bold uppercase tracking-[0.2em]">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-20 text-center text-2xl font-semibold leading-snug tracking-tight md:text-4xl">
          Seu negócio não precisa de mais trabalho.
          <br />
          <span className="text-primary">Precisa de processos melhores.</span>
        </p>
      </Reveal>
    </Section>
  );
}

/* ---------------- SOLUTIONS ---------------- */
const solutions = [
  { icon: Sparkles, t: "IA", d: "Agentes capazes de atender, orientar e encaminhar clientes.", bars: [40, 70, 55, 85] },
  { icon: Monitor, t: "Sites & Landing Pages", d: "Experiências digitais pensadas para apresentar o negócio e conduzir o cliente.", bars: [60, 45, 80, 65] },
  { icon: Users, t: "CRM", d: "Clientes, histórico, vendas e oportunidades organizados em um só lugar.", bars: [30, 55, 70, 90] },
  { icon: Workflow, t: "Automações", d: "Processos que continuam funcionando mesmo quando você está ocupado.", bars: [75, 60, 85, 70] },
  { icon: Boxes, t: "Sistemas Personalizados", d: "Ferramentas desenvolvidas para necessidades específicas de cada negócio.", bars: [20, 35, 25, 40], soon: true },
];

function Solutions() {
  return (
    <Section id="solucoes" className="border-t border-border">
      <Reveal>
        <Eyebrow>Soluções</Eyebrow>
        <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          Tecnologia aplicada ao que realmente importa.
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {solutions.map((s, i) => (
          <Reveal key={s.t} delay={i * 80} className={`h-full ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-primary transition-colors group-hover:border-primary/40">
                  <s.icon size={19} strokeWidth={1.5} />
                </span>
                {s.soon && (
                  <span className="rounded-full border border-secondary/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                    Em desenvolvimento
                  </span>
                )}
              </div>
              <h3 className="mt-10 text-sm font-bold uppercase tracking-[0.18em]">{s.t}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <div aria-hidden className="mt-8 flex h-8 items-end gap-1.5">
                {s.bars.map((b, j) => (
                  <span
                    key={j}
                    className={`w-full rounded-sm transition-all duration-700 ${s.soon ? "bg-foreground/10" : "bg-foreground/10 group-hover:bg-primary/60"}`}
                    style={{ height: `${b}%`, transitionDelay: `${j * 60}ms` }}
                  />
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- PATHS ---------------- */
const path = [
  { icon: Instagram, t: "Instagram" },
  { icon: Globe, t: "Site / WhatsApp" },
  { icon: Sparkles, t: "IA" },
  { icon: ShoppingBag, t: "Produto ou Serviço" },
  { icon: CalendarCheck, t: "Compra / Agendamento" },
  { icon: Database, t: "CRM" },
  { icon: HeartHandshake, t: "Relacionamento" },
  { icon: Target, t: "Nova oportunidade" },
];

function Paths() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-card/40 py-24 md:py-36">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-4xl text-center text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            Não criamos apenas ferramentas.
            <br />
            <span className="text-primary">Criamos caminhos.</span>
          </h2>
        </Reveal>

        {/* Desktop horizontal */}
        <div className="relative mt-24 hidden lg:block">
          <div className="absolute left-[6%] right-[6%] top-7 h-px bg-border">
            <span className="travel-x absolute -top-[2px] h-[5px] w-16 rounded-full bg-primary blur-[1px]" />
          </div>
          <ol className="relative grid grid-cols-8 gap-3">
            {path.map((p, i) => (
              <Reveal key={p.t} delay={i * 90}>
                <li className="group flex flex-col items-center text-center">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-full border bg-background transition-all duration-500 group-hover:scale-110 group-hover:border-primary ${i === path.length - 1 ? "border-primary text-primary" : "border-border text-foreground/80"}`}>
                    <p.icon size={20} strokeWidth={1.5} />
                  </span>
                  <span className="mt-2 text-[10px] font-semibold text-foreground/35">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-2 text-xs font-semibold leading-snug">{p.t}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Mobile vertical */}
        <ol className="relative mx-auto mt-16 max-w-sm lg:hidden">
          <div className="absolute bottom-7 left-7 top-7 w-px bg-border">
            <span className="travel absolute -left-[2px] h-10 w-[5px] rounded-full bg-primary blur-[1px]" />
          </div>
          {path.map((p, i) => (
            <Reveal key={p.t} delay={i * 60}>
              <li className="relative flex items-center gap-5 py-2.5">
                <span className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border bg-background ${i === path.length - 1 ? "border-primary text-primary" : "border-border text-foreground/80"}`}>
                  <p.icon size={20} strokeWidth={1.5} />
                </span>
                <span className="text-sm font-semibold">{p.t}</span>
                <span className="ml-auto text-[10px] font-semibold text-foreground/35">{String(i + 1).padStart(2, "0")}</span>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="mx-auto mt-20 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground md:text-xl">
            Cada ponto de contato pode fazer parte de uma experiência única, conectada e inteligente.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects() {
  return (
    <Section id="projetos" className="border-t border-border">
      <div className="grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <Eyebrow>Projetos demonstrativos</Eyebrow>
          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl">Veja as soluções em ação.</h2>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-5 lg:self-end">
          <p className="text-base leading-relaxed text-muted-foreground">
            Projetos demonstrativos criados para mostrar como diferentes negócios podem transformar sua operação através da tecnologia.
          </p>
        </Reveal>
      </div>
      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 100} className="h-full">
            <Link
              to="/projetos/$slug"
              params={{ slug: p.slug }}
              className="group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/40 md:p-10"
            >
              <span aria-hidden className="pointer-events-none absolute -right-4 -top-10 text-[10rem] font-extrabold leading-none text-foreground/[0.03] transition-colors duration-500 group-hover:text-primary/[0.06]">
                {p.num}
              </span>
              <div className="relative flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">Projeto {p.num}</span>
                <span className="rounded-full border border-border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/60">Demonstrativo</span>
              </div>
              <div className="relative mt-16">
                <h3 className="text-2xl font-bold uppercase tracking-[0.08em] md:text-3xl">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.stack}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {p.cta} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
const steps = [
  { n: "01", t: "Entender", d: "Conhecemos o negócio e identificamos gargalos." },
  { n: "02", t: "Planejar", d: "Desenhamos o fluxo e definimos a melhor solução." },
  { n: "03", t: "Construir", d: "Desenvolvemos a experiência digital." },
  { n: "04", t: "Testar", d: "Validamos os fluxos e corrigimos problemas." },
  { n: "05", t: "Evoluir", d: "A solução pode crescer conforme o negócio cresce." },
];

function HowItWorks() {
  return (
    <Section id="como-funciona" className="border-t border-border">
      <Reveal>
        <Eyebrow>Como funciona</Eyebrow>
        <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl">Do problema à solução.</h2>
      </Reveal>
      <div className="relative mt-20">
        <div aria-hidden className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-border lg:block" />
        <div aria-hidden className="absolute bottom-0 left-[7px] top-0 w-px bg-border lg:hidden" />
        <ol className="grid gap-12 lg:grid-cols-5 lg:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <li className="relative pl-10 lg:pl-0">
                <span className="block text-5xl font-extrabold tracking-tight text-foreground/15 md:text-6xl">{s.n}</span>
                <span className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-primary bg-background lg:static lg:mt-0 lg:block lg:-translate-y-[0.55rem]" />
                <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/* ---------------- FOUNDER ---------------- */
const pillars = ["Visão comercial", "Tecnologia", "Automação", "Experiência do cliente"];

function Founder() {
  return (
    <Section id="sobre" className="border-t border-border">
      <Reveal>
        <Eyebrow>Sobre</Eyebrow>
        <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl">Quem está por trás da NEXA.</h2>
      </Reveal>
      <div className="mt-16 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src={founder.url}
              alt="Lucas Damasio, fundador da DAMASIO NEXA.I.A, em seu escritório"
              className="aspect-[6/5] w-full object-cover"
              loading="lazy"
              width={1374}
              height={1145}
            />
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-6">
          <h3 className="text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
            “Eu conheço a dor de quem está do <span className="text-primary">outro lado</span>.”
          </h3>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>Antes de trabalhar com soluções digitais, conheci de perto os desafios de atendimento, vendas e operação.</p>
            <p>Hoje, transformo essa experiência em soluções digitais pensadas para facilitar a rotina de negócios.</p>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-3">
            {pillars.map((p) => (
              <li key={p} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 text-[11px] font-bold uppercase tracking-[0.14em]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCta() {
  return (
    <section className="px-5 pb-24 md:px-8 md:pb-32">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border bg-card px-6 py-20 text-center md:px-16 md:py-28">
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <h2 className="relative mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            E se o seu negócio pudesse funcionar de uma forma mais inteligente?
          </h2>
          <p className="relative mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Vamos identificar onde a tecnologia pode simplificar sua operação, melhorar sua experiência de atendimento e criar novas oportunidades.
          </p>
          <Link to="/" hash="contato" className="group relative mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
            Falar sobre meu negócio <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <ArrowDown aria-hidden className="relative mx-auto mt-10 text-foreground/20" size={18} />
        </div>
      </Reveal>
    </section>
  );
}
