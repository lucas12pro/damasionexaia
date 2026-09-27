import { defineTool } from "@lovable.dev/mcp-js";
import { projects } from "../../projects";

export default defineTool({
  name: "list_demo_projects",
  title: "Projetos demonstrativos",
  description: "Lista os projetos demonstrativos públicos da NEXA e indica quais já oferecem uma demonstração interativa.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = projects.map(({ slug, name, stack }) => ({
      name,
      description: stack,
      url: `https://damasionexaia.lovable.app/projetos/${slug}`,
      status: slug === "barbearia" ? "Demonstração interativa" : "Em preparação",
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items) }],
      structuredContent: { projects: items },
    };
  },
});