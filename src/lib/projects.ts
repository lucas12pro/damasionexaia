export const projects = [
  { slug: "barbearia", num: "01", name: "Barbearia", stack: "Site + Agendamento + CRM + IA + Automações", cta: "Explorar projeto" },
  { slug: "loja", num: "02", name: "Loja de Roupas", stack: "Catálogo + Atendimento + Jornada de compra", cta: "Ver demonstração" },
  { slug: "lanchonete", num: "03", name: "Lanchonete", stack: "Cardápio digital + Pedidos + Atendimento", cta: "Ver demonstração" },
  { slug: "crm", num: "04", name: "CRM Comercial", stack: "Leads + Clientes + Histórico + Follow-up", cta: "Ver demonstração" },
] as const;

export type Project = (typeof projects)[number];
