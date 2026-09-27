import { defineTool } from "@lovable.dev/mcp-js";

const solutions = [
  { name: "IA", description: "Agentes capazes de atender, orientar e encaminhar clientes." },
  { name: "Sites & Landing Pages", description: "Experiências digitais pensadas para apresentar o negócio e conduzir o cliente." },
  { name: "CRM", description: "Clientes, histórico, vendas e oportunidades organizados em um só lugar." },
  { name: "Automações", description: "Processos que continuam funcionando mesmo quando você está ocupado." },
  { name: "Sistemas Personalizados", description: "Ferramentas desenvolvidas para necessidades específicas de cada negócio.", status: "Em desenvolvimento" },
];

export default defineTool({
  name: "list_solutions",
  title: "Soluções da NEXA",
  description: "Lista as soluções anunciadas publicamente pela DAMASIO NEXA.I.A e seu estágio atual.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(solutions) }],
    structuredContent: { solutions },
  }),
});