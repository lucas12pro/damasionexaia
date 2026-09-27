import { defineMcp } from "@lovable.dev/mcp-js";
import listSolutions from "./tools/list-solutions";
import listProjects from "./tools/list-projects";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "nexa-intelligence-hub",
  title: "Nexa Intelligence Hub",
  version: "0.1.0",
  instructions: "Ferramentas públicas da DAMASIO NEXA.I.A. Consulte soluções, projetos demonstrativos e canais de contato. Projetos são demonstrativos; não trate seus dados simulados como resultados reais.",
  tools: [listSolutions, listProjects, getContact],
});