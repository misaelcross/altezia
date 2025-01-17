#Project overview
Seu objetivo é construir uma aplicação em Next.js 14 utilizando Tailwind, shadcn e ícones Lucide, utilizará o Supabase como banco de dados e back-end principal, fornecendo serviços de armazenamento de dados, autenticação de usuários e outras funcionalidades de back-end. A aplicação será uma plataforma de gerenciamento eclesiástico de uma igreja, contemplando os seguintes recursos principais:

- Controle de membros: Cadastro detalhado de membros, com linha do tempo de marcos espirituais e histórico de participação.
- Controle de visitantes: Formulário digital para cadastro e envio de mensagens automáticas de boas-vindas.
- Gestão de células (GF): Cadastro, acompanhamento de encontros e relatórios de reuniões.
- Portal do membro: Área exclusiva com vídeos (embed YouTube), carrossel de eventos, resumo de contribuições, painel de inspiração e testemunhos.
- Histórico de membros: Linha do tempo com detalhes de eventos, cursos e participações.
- Gestão de discipulado: Ferramenta para cursos de crescimento e acompanhamento espiritual.
- Agenda de eventos: Calendário interativo com notificações, inscrição online e checklist de organização.
- Controle de frequência: Relatórios de presença em cultos e células, planejamento de cultos e gerenciamento de conferências.
- Gestão de dízimos e ofertas: Registro de contribuições e relatórios financeiros, planejamento orçamentário e campanhas de arrecadação.
- Comunicação interna: Mural de avisos, chat interno e enquetes rápidas.
- Controle de voluntariado: Escala, lembretes de atividades, recrutamento e avaliação de desempenho de líderes.
- Biblioteca de conteúdos: Página com livros, sermões, vídeos e textos, além de plano de leitura bíblica e repositório de documentos.
- Relatórios de crescimento: Painel de estatísticas de frequência e engajamento, exportação em PDF e feedback de cultos.
- Controle de patrimônio: Inventário de bens, cadastro de departamentos e líderes (multi-igrejas) e gerenciamento de projetos (reformas, construções, etc.).
- Solicitação de oração: Formulário para pedidos e painel de respostas, escalas de intercessores, visitas pastorais e lembretes de oração automáticos.
- Tipos de usuários multi tenant: Admin (pastor presidente), gerentes (pastor local), líderes (professores), membros e visitantes.

## 1. Módulo de Cadastro e Gerenciamento de Membros
- Formulário detalhado para registro de membros.
- Registro de histórico de participação (linha do tempo).
- Busca e filtros por dados como nome, ministério e data de entrada.

## 2. Módulo de Visitantes
- Formulário digital para cadastro de visitantes.
- Mensagens automáticas de boas-vindas.
- Lista gerenciável para acompanhar o status e retorno de cada visitante.

## 3. Módulo de Células (GF)
- Cadastro de células, líderes e participantes.
- Acompanhamento de reuniões, registro de frequência e conversões.
- Relatórios e estatísticas de crescimento por célula.

## 4. Módulo do Portal do Membro
- Área exclusiva de login para membros, com vídeos embed de YouTube.
- Carrossel de eventos futuros e painel de inspiração (versículos, frases motivacionais, testemunhos).
- Resumo de contribuições e histórico de participação.

## 5. Módulo de Histórico de Membros
- Linha do tempo com marcos espirituais (batismos, cursos, confissões de fé).
- Histórico de participação em eventos, células e cultos.

## 6. Módulo de Discipulado
- Criação de cursos de crescimento e registro de progresso.
- Ferramenta para acompanhamento espiritual e emissão de certificados.

## 7. Módulo de Agenda de Eventos
- Calendário interativo com notificações automáticas.
- Inscrição em eventos, confirmação de presença e possíveis integrações de pagamento.
- Checklist de organização (voluntários, coffee break, equipe de música, etc.).

## 8. Módulo de Controle de Frequência
- Registro de presença em cultos, células e eventos.
- Planejamento de cultos, agendamento de reuniões e gerenciamento de conferências.
- Relatórios de engajamento e estatísticas de participação.

## 9. Módulo de Gestão Financeira
- Registro de dízimos e ofertas, relatórios de entradas e saídas.
- Planejamento financeiro com metas e orçamentos.
- Gestão de campanhas de arrecadação (reformas, construções, etc.).

## 10. Módulo de Comunicação Interna
- Mural de avisos para publicação de notícias e updates.
- Chat interno para troca de mensagens.
- Enquetes rápidas para pesquisa de opinião junto a membros e líderes.

## 11. Módulo de Voluntariado e Liderança
- Escala de atividades e lembretes para voluntários.
- Recrutamento de voluntários através de formulários digitais.
- Treinamento de líderes com vídeos e conteúdos.
- Ferramenta de feedback para avaliação de desempenho.

## 12. Módulo de Biblioteca de Conteúdos
- Lista de livros, sermões, vídeos e textos de pregação.
- Plano de leitura bíblica com acompanhamento e notificações.
- Repositório de documentos institucionais.

## 13. Módulo de Relatórios de Crescimento
- Painel de estatísticas sobre frequência e engajamento.
- Exportação de relatórios em PDF para apresentação.
- Feedback de cultos com formulários pós-eventos.

## 14. Módulo de Patrimônio e Projetos
- Inventário de bens da igreja (equipamentos, imóveis, etc.).
- Gestão de ministérios e liderança de departamentos.
- Suporte para múltiplas sedes (multi-igrejas) em uma mesma conta.
- Gerenciamento de projetos (planejamento, etapas e monitoramento).

## 15. Módulo de Oração e Visitas Pastorais
- Solicitação de oração (formulário) e painel de respostas.
- Gestão de consagrações (diáconos, presbíteros).
- Gestão de horários de oração (escalas de intercessores).
- Controle de visitas pastorais, agendamentos e históricos.
- Lembretes automáticos de oração.

## 16. Tipos de Usuários (Multi Tenant)
- Admin (Pastor Presidente)
- Gerentes (Pastor Local)
- Líderes (professor, chefe de departamento, etc.)
- Membros
- Visitantes

#Doc
(Aqui você pode incluir documentações adicionais de integrações com serviços externos, bibliotecas de e-mail/SMS ou qualquer outro recurso pertinente.)

#Important Implementation Notes

## 0. Adding logs
- Sempre adicione logs no servidor para facilitar a depuração de problemas.

## 1. Project setup
- Todos os novos componentes devem ser criados em /components na raiz do projeto, nomeados como example-component.tsx, a menos que seja especificado de outra forma.
- Todas as novas páginas vão em /app usando o Next.js 14 App Router.
- Toda a busca de dados deve ser feita em Server Components e passada como props para os Client Components.
- Client Components (que usam useState, hooks, etc.) exigem 'use client' no topo do arquivo.

## 2. Server-Side API Calls
- Todas as interações com o Supabase (CRUD de dados, autenticação, etc.) devem ser realizadas no server-side.  
- Crie rotas dedicadas em `pages/api` que utilizem o cliente do Supabase para consultar/inserir/atualizar dados, evitando acessar o Supabase diretamente do client-side.
- Os componentes client-side devem buscar dados através dessas rotas, não diretamente das APIs externas.

## 3. Environment Variables
- Armazene as variáveis de ambiente do Supabase (ex.: `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`) em `.env.local` e garanta que não sejam commitadas.  
- No ambiente de produção, defina essas variáveis no painel da plataforma de hospedagem Vercel.
- Use um arquivo .env.local para desenvolvimento local e mantenha-o no .gitignore.
- Acesse variáveis de ambiente apenas no servidor ou em rotas de API.

## 4. Error Handling and Logging
- Implemente tratamento de erros em client-side e server-side.
- Registre erros no servidor para depuração.
- Exiba mensagens de erro amigáveis ao usuário quando aplicável.

## 5. Type Safety
- Use TypeScript e crie interfaces para todas as estruturas de dados e respostas de API.
- Evite o uso de any; defina tipos específicos para variáveis e funções.

## 6. API Client Initialization
- Inicialize o cliente do **Supabase** apenas no código do servidor, utilizando as chaves de ambiente adequadas (por exemplo, `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY`).  
- Certifique-se de instanciar o cliente antes de qualquer operação que exija acesso ao banco de dados do Supabase.

## 7. Data Fetching in Components
- Utilize hooks como useEffect para buscar dados em componentes client-side, quando necessário.
- Implemente estados de loading e tratamento de erro para cada operação de busca.

## 8. Next.js Configuration
- Use next.config.mjs para configurações específicas de ambiente.
- Utilize a propriedade env em next.config.mjs para expor variáveis de ambiente na aplicação, quando necessário.

## 9. CORS and API Routes
- Utilize rotas de API do Next.js para evitar problemas de CORS em interações com serviços externos.
- Implemente validações adequadas das requisições nessas rotas.

## 10. Component Structure
- Separe responsabilidades entre Server e Client Components.
- Use Server Components para buscar dados iniciais e passe para Client Components via props.

## 11. Security
- Jamais exponha chaves de API ou credenciais no client-side.
- Implemente autenticação e autorização em rotas de API, se necessário.

## 12. Special syntax
- Ao usar shadcn, prefira npx shadcn@latest add [component] em vez de shadcn-ui@latest, pois esta última está deprecada.