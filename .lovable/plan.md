# Evolução da NEXA BARBERSHOP

## Objetivo
Preservar Dashboard, CRM, Clientes, Atendimentos e Relatórios, substituindo somente a Agenda e adicionando demonstrações de perfis, Produtos e Pacotes.

## Implementação
- Transformar a Agenda em grade operacional por horário e profissional, com cabeçalho diário/semanal, filtros e colunas fixas.
- Permitir arrastar agendamentos entre horários e profissionais, com atualização local e confirmação visual.
- Abrir o novo agendamento ao selecionar um horário livre e inserir o registro confirmado diretamente na grade.
- Exibir detalhes e ações simuladas ao selecionar um agendamento existente, preservando registros realizados.
- Atualizar a experiência do cliente para data → profissional → horários realmente livres → dados pessoais → confirmação, considerando duração do serviço.
- Adicionar um seletor demonstrativo de perfil e uma área de Acessos com permissões de Administrador, Recepção e Profissional.
- Criar a experiência restrita do Profissional: Minha agenda, Meus atendimentos, Meu desempenho, Produtos, Pacotes e Meu perfil, sem contatos ou CRM.
- Adicionar os módulos Produtos e Pacotes com catálogos mockados e formulários simulados; permitir registrar produto vendido ao finalizar atendimento.

## Limites preservados
- Nenhuma autenticação, banco de dados, API, WhatsApp, pagamento ou automação real.
- Nenhuma alteração visual ou funcional nas telas existentes fora das conexões necessárias de navegação.
- Todo estado novo permanece local e demonstrativo.

## Validação
- Testar agenda, criação, detalhes e movimentação por arrastar.
- Testar disponibilidade por profissional e duração na jornada do cliente.
- Testar as três visões de acesso em desktop e celular, confirmando a restrição de dados do profissional.
