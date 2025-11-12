# Projeto Final PWA + Extensão + Backend + Docker + CI/CD

## Estrutura
- **/web** → PWA com Service Worker, popup e content script.
- **/api** → Backend Node/Express consumindo API pública.
- **/tests** → Testes unitários (Jest) e E2E (Playwright).
- **/.github** → CI/CD automatizado.

## Docker Compose
```bash
docker compose up --build
