# Projeto Final PWA + Extensão + Backend + Docker + CI/CD

## Estrutura
- **/web** → PWA com Service Worker, popup e content script.
- **/api** → Backend Node/Express consumindo API pública.
- **/tests** → Testes unitários (Jest) e E2E (Playwright).
- **/.github** → CI/CD automatizado.

## Docker Compose
```bash
docker compose up --build


---

## ⚙️ Instalação Local

### Pré-requisitos
- Node.js (v18+)
- Docker (para rodar containers)
- npm

### Passos para rodar manualmente (sem Docker)
```bash
# Backend
cd api
npm install
npm start

# Frontend
cd ../web
npm install
npx serve public
