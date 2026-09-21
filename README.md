# Francos Corporation Site

## 🐳 Instalação e Execução (Docker) — recomendado

### Pré-requisitos
- [Docker](https://docs.docker.com/get-docker/) + Docker Compose

### Rodar com Docker
```bash
docker compose up --build
```


### Sem Docker (local)
```bash
npm install
npm start
```


Site institucional da Francos Corporation em **React** (Create React App +
React Bootstrap), com home animada, seções de portfólio e conteúdo
internacionalizável.

![React](https://img.shields.io/badge/React-17-61DAFB?style=flat-square&logo=react&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/status-2022-legacy-lightgrey?style=flat-square)

## Sobre

Primeira versão do site institucional da marca, criada em 2022 para
apresentar a empresa e seus trabalhos. Usa roteamento com `react-router-dom`
e dados de conteúdo em arquivos JSON (textos em inglês, "rocket" e
"work"), além de uma home estilizada com `styled-components`.

## Funcionalidades

Comprovadas pelo código em `src/`:

- Estrutura de rotas em `routes.js` com `BrowserRouter` (`App.js`).
- Página **Home** com estilos próprios (`pages/Home.js`, `HomeStyled.js`,
  `Home.css`).
- **Navbar** com elementos gerados a partir de configuração
  (`component/Navbar`).
- **Conteúdo em JSON** para facilitar edição (`assets/jsons/eng.json`,
  `rocket.json`, `work.json`).
- Assets de marca em `assets/images/`.

## Como rodar

```bash
npm install
npm start        # http://localhost:3000
npm run build    # build de produção (pasta build/)
```

## Estrutura do projeto

```
public/                 # index.html, manifest
src/
├── App.js / routes.js  # roteamento
├── component/Navbar/   # barra de navegação
├── pages/Home.*        # página inicial
└── assets/             # imagens e conteúdos JSON
```

## Observações

- O `.env` necessário ao CRA era apenas o `SKIP_PREFLIGHT_CHECK=true` (por
  conflito de versões do `babel-loader`); foi substituído por `.env.example`.
- Arquivos de sistema (`.DS_Store`) e cache do ESLint foram removidos do
  repositório.

## Licença

MIT — veja [LICENSE](LICENSE).
