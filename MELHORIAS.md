# Melhorias — Francos Corporation Site

## 0. Como usar

Executar na ordem P0 → P1 → P2 → P3. Cada item aponta para evidência encontrada no código inicial e só deve ser marcado como concluído depois da respectiva verificação.

## 1. Diagnóstico executivo

O repositório contém a primeira versão de um site institucional em React. A tela inicial renderiza apenas uma navegação sobre uma foto de resort, os destinos do menu não têm páginas, o carregamento impõe três segundos de espera e a versão recomendada de Docker Compose não existe. A instalação inicial também reporta 212 vulnerabilidades no lockfile legado, incluindo 22 críticas e 65 altas. O `.env` listado no inventário geral não é um segredo: o único arquivo rastreado é `.env.example`, com `SKIP_PREFLIGHT_CHECK=true`.

## 2. Tabela de prioridades

| ID | Prioridade | Item | Estado |
|---|---:|---|---|
| DEVOPS-01 | P0 | Disponibilizar a execução indicada por Docker Compose | [x] |
| SEC-01 | P1 | Atualizar o toolchain e remover a cadeia vulnerável do CRA 4 | [x] |
| BUG-01 | P1 | Trocar destinos de navegação inexistentes por seções reais | [x] |
| IMP-01 | P1 | Construir uma página institucional completa e responsiva | [x] |
| A11Y-01 | P2 | Tornar a navegação móvel operável por teclado e leitor de tela | [x] |
| PERF-01 | P2 | Remover a espera artificial e a animação obrigatória de carregamento | [x] |
| DOC-01 | P3 | Corrigir instruções e descrição das funcionalidades | [x] |

## 3. Segurança

### SEC-01 · Atualizar o toolchain legado [P1]
- **Arquivo:** `package.json:4-22`
- **Evidência:** React 17 e `react-scripts` 4 compõem o build atual. `npm audit` no lockfile original reportou 212 vulnerabilidades transitivas: 22 críticas, 65 altas, 119 moderadas e 6 baixas.
- **Mudança:** migrar para React 19.3 e Vite 8, retirar dependências sem uso e regenerar um único lockfile npm.
- **Aceite:** a instalação limpa e `npm audit --audit-level=high` terminam sem vulnerabilidades altas ou críticas.
- **Verificação:** `npm ci && npm audit --audit-level=high && npm run build`

## 4. Bugs

### BUG-01 · Ligar a navegação ao conteúdo disponível [P1]
- **Arquivo:** `src/routes.js:7-9`
- **Evidência:** a única rota declarada é `/`; o caminho curinga também renderiza a Home. O menu envia para `/entrar`, `/servicos`, `/contato`, `/sobre` e `/cadastrar`, sem telas correspondentes.
- **Mudança:** substituir rotas sem destino por navegação por âncoras para as seções reais da página institucional.
- **Aceite:** cada link principal leva ao conteúdo correspondente e nenhum botão simula login ou cadastro inexistente.
- **Verificação:** `npm run build`

## 5. Qualidade

### IMP-01 · Apresentar a empresa e seus serviços [P1]
- **Arquivo:** `src/pages/Home.js:24-31`
- **Evidência:** depois do temporizador, a Home mostra apenas a navegação; não informa o que a Francos Corporation faz nem oferece uma próxima ação útil.
- **Mudança:** entregar uma página em português com proposta de valor, frentes de trabalho, etapas de colaboração e chamada de contato, sem métricas ou cases inventados.
- **Aceite:** a página comunica o propósito, as opções de serviço e como conhecer ou contatar a Francos em telas pequenas e grandes.
- **Verificação:** `npm run build`

### A11Y-01 · Implementar o menu móvel acessível [P2]
- **Arquivo:** `src/component/Navbar/index.js:31-48`
- **Evidência:** o ícone de menu é decorativo e não pode ser acionado; em telas menores que 768 px os links são ocultados.
- **Mudança:** usar botão com nome acessível, estado expandido, navegação por teclado e fechamento após selecionar um link.
- **Aceite:** todos os destinos da navegação podem ser alcançados e acionados sem mouse.
- **Verificação:** `npm run lint && npm run build`

### PERF-01 · Exibir o site sem atraso imposto [P2]
- **Arquivo:** `src/pages/Home.js:17-23`
- **Evidência:** um temporizador mantém a página inteira em loading por três segundos, independentemente do carregamento dos recursos.
- **Mudança:** remover o temporizador e a animação Lottie obrigatória para renderizar o conteúdo no primeiro carregamento.
- **Aceite:** não existe espera artificial antes de acessar navegação ou conteúdo.
- **Verificação:** `npm run build`

## 6. DevOps

### DEVOPS-01 · Fornecer Docker Compose funcional [P0]
- **Arquivo:** `README.md:8-10`
- **Evidência:** o README recomenda `docker compose up --build`, mas não existe arquivo Compose rastreado no repositório.
- **Mudança:** incluir Compose e imagem multi-stage não-root para servir o build de produção com healthcheck.
- **Aceite:** Compose valida, a imagem de produção compila e o servidor declara o healthcheck `/healthz` na porta documentada.
- **Verificação:** `docker compose config --quiet && docker build -t francos-corporation-site .`

## 7. Documentação

### DOC-01 · Documentar a versão que o repositório realmente entrega [P3]
- **Arquivo:** `README.md:21-49`
- **Evidência:** o README afirma que há seções de portfólio e conteúdo internacionalizável, embora a aplicação tenha uma única página sem essas funcionalidades.
- **Mudança:** descrever a aplicação atual, os comandos de desenvolvimento e produção, Docker Compose e os canais públicos de contato.
- **Aceite:** cada funcionalidade e comando documentado corresponde a arquivos existentes e comandos executáveis.
- **Verificação:** `npm run lint && npm run build && docker compose config --quiet`

## 8. Ordem de execução

1. DEVOPS-01 — tornar disponível a forma de execução recomendada.
2. SEC-01 — substituir o toolchain e verificar a árvore de dependências.
3. BUG-01 e IMP-01 — implementar a experiência institucional e seus destinos.
4. A11Y-01 e PERF-01 — finalizar interação, acessibilidade e carregamento.
5. DOC-01 — alinhar as instruções ao resultado entregue.

## 9. Fora de escopo

- Implementar login, cadastro ou backend de captação: este repositório não contém API ou serviço de autenticação.
- Publicar métricas, clientes, depoimentos ou estudos de caso sem fonte no repositório.
- Fazer deploy do site ou alterar serviços externos.

## 10. Definição de pronto

- Os itens acima têm implementação e evidência de verificação registradas.
- `npm audit --audit-level=high`, lint, build e configuração do Compose passam.
- README, metadados HTML e conteúdo da aplicação descrevem o mesmo produto.
- Nenhum segredo real é adicionado ao Git.
