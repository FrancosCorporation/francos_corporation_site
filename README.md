# Francos Corporation

Site institucional da Francos Corporation. A página apresenta soluções digitais, explica o processo de trabalho e direciona conversas para os perfis públicos da marca.

## Requisitos

- Node.js 22.12 ou superior e npm, para desenvolvimento local.
- Docker com Docker Compose, para executar a imagem de produção.

## Desenvolvimento local

```bash
npm ci
npm run dev
```

O Vite informa o endereço local, normalmente `http://localhost:5173`.

## Verificações e build

```bash
npm run lint
npm audit --audit-level=high
npm run build
npm run preview
```

O build otimizado é escrito em `dist/`. O lint usa as regras recomendadas do Biome, incluindo verificações de acessibilidade para JSX.

## Docker Compose

```bash
docker compose up --build
```

A aplicação fica disponível em `http://localhost:3000`. Por padrão, a porta do host é vinculada a `127.0.0.1`; para escolher outra porta:

```bash
SITE_PORT=8080 docker compose up --build
```

A imagem usa build multi-stage em Node 24, executa com o usuário sem privilégios `node` e verifica disponibilidade em `/healthz`. O container tem filesystem somente leitura, remove capabilities Linux e habilita `no-new-privileges`.

## Funcionalidades

- Página única em português, adaptada para desktop e dispositivos móveis.
- Seções de soluções digitais, abordagem de trabalho, apresentação institucional e contato.
- Menu móvel acessível por teclado, atalho para pular ao conteúdo e suporte à preferência por movimento reduzido.
- Metadados para busca e compartilhamento, manifesto e favicon próprios.
- Arquivo de verificação do Google servido na raiz do build.
- Servidor Node de produção com fallback para rotas do site, tipos MIME e cabeçalhos de segurança.

Login, cadastro e envio de formulários não fazem parte deste projeto, que não contém API. Os links de contato direcionam ao [perfil da Francos Corporation no GitHub](https://github.com/FrancosCorporation) e ao [perfil profissional no LinkedIn](https://www.linkedin.com/in/francoscorp/).

## Estrutura

```text
index.html                 # Metadados e ponto de entrada Vite
src/
├── components/            # Navegação e ícones
├── pages/Home.jsx         # Conteúdo institucional
└── styles.css             # Estilos responsivos
public/                    # Manifesto, favicon e arquivo de verificação
server.mjs                 # Servidor estático de produção
compose.yaml               # Execução local via Compose
Dockerfile                 # Build multi-stage
```

## Licença

MIT — veja [LICENSE](LICENSE).
