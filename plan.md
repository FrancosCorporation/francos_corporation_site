# Plan — francos_corporation_site

## 1. Visão geral
Site institucional da Francos Corporation: apresenta soluções digitais, processo de trabalho e perfis públicos. Stack React 19 + Vite 8 + Biome, com servidor estático próprio (`server.mjs`), Docker/Compose não-root. Estado marcado OK na Wave 7; faltava CI — criada nesta sessão.

## 2. Arquitetura e tecnologias
Node ≥22.12, Vite 8, React 19, Biome 2.5 (lint), nginx-free (server.mjs nativo), Docker multi-stage.

## 3. Funcionalidades existentes
- [x] Landing responsiva em PT-BR, seções institucionais e direcionamento social — implementado.
- [x] Build/Preview e container com bind local — implementado.
- [x] CI — **criada nesta sessão** (Ubuntu 24.04, Actions v7 SHA, Node 22/24, audit, lint, build).

## 4. Objetivos futuros
- OBJ-01 (P2, concluído nesta sessão): CI estática completa.
- OBJ-02 (P3): Lighthouse budget na CI (perf marketing).
- OBJ-03 (P3): navegação âncora com histórico acessível (a11y).

## 5–9. Melhorias/Roadmap/Riscos/Ideias
- Manter Biome como único linter (não adicionar ESLint paralelo).
- Build silencioso; imagem publicável via Compose.

*(Gerado em 2026-10-14 pelo agente orquestrador)*
