import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/projects";
import { Navbar, Footer } from "@/components/site/Chrome";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Projeto não encontrado" }, { name: "robots", content: "noindex" }] };
    const { name, stack } = loaderData.project;
    const title = `${name} — Projeto demonstrativo | DAMASIO NEXA.I.A`;
    const description = `Projeto demonstrativo ${name}: ${stack}. Demonstração em preparação.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-5 text-center">
      <div>
        <p className="text-muted-foreground">Projeto não encontrado.</p>
        <Link to="/" className="mt-4 inline-block text-primary">Voltar ao início</Link>
      </div>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-[80vh] max-w-4xl flex-col justify-center px-5 pb-20 pt-32 md:px-8">
        <Link to="/" hash="projetos" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft size={16} /> Voltar aos projetos
        </Link>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Projeto {project.num} · Demonstrativo</p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">{project.name}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{project.stack}</p>
        <div className="mt-12 rounded-2xl border border-border bg-card p-8">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-secondary" /> Em preparação
          </span>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A demonstração interativa deste projeto está sendo preparada e será publicada nesta página em breve.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
