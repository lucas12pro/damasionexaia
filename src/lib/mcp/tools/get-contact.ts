import { defineTool } from "@lovable.dev/mcp-js";

const contact = {
  whatsapp: "(11) 93413-6539",
  whatsappUrl: "https://wa.me/5511934136539",
  email: "lucascdmatias5@gmail.com",
  instagram: "@lucasd_zs",
  instagramUrl: "https://www.instagram.com/lucasd_zs/",
};

export default defineTool({
  name: "get_nexa_contact",
  title: "Contato da NEXA",
  description: "Retorna apenas os canais de contato comerciais publicados no site da DAMASIO NEXA.I.A.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact) }],
    structuredContent: { contact },
  }),
});