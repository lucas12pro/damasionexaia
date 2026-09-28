export const projects = [
  { slug: "barbearia", num: "01", name: "Barbearia", stack: "Agenda + Clientes + CRM + Produtos + Pacotes", cta: "Explorar demonstração", status: "Interativo", problem: "Horários e informações dispersos na operação.", solution: "Uma experiência demonstrativa que reúne agendamentos, atendimento e relacionamento.", result: "Explore a agenda, os diferentes acessos e a jornada simulada do cliente." },
  { slug: "loja", num: "02", name: "Loja de Roupas", stack: "Catálogo + Atendimento + Jornada de compra", cta: "Conhecer conceito", status: "Em preparação", problem: "Apresentar produtos e conduzir o interesse do comprador.", solution: "Conceito de catálogo com jornada de atendimento conectada.", result: "Demonstração interativa ainda não disponível." },
  { slug: "lanchonete", num: "03", name: "Lanchonete", stack: "Cardápio digital + Pedidos + Atendimento", cta: "Conhecer conceito", status: "Em preparação", problem: "Organizar escolhas e pedidos de maneira simples.", solution: "Conceito de cardápio digital integrado ao fluxo de atendimento.", result: "Demonstração interativa ainda não disponível." },
  { slug: "crm", num: "04", name: "CRM Comercial", stack: "Leads + Clientes + Histórico + Follow-up", cta: "Conhecer conceito", status: "Em preparação", problem: "Acompanhar oportunidades sem perder o contexto comercial.", solution: "Conceito de organização de leads, histórico e próximas ações.", result: "Demonstração interativa ainda não disponível." },
] as const;

export type Project = (typeof projects)[number];
