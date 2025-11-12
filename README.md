Projeto PWA Final

Sistema simples de gerenciamento de tarefas (To-Do) desenvolvido como PWA (Progressive Web App), com API Node.js + Express e frontend estático em HTML/CSS/JS.
O projeto inclui Docker, testes automatizados com Jest, e pipeline CI/CD.

Estrutura do Repositório
pwa-project-final/
│
├── api/                    # Backend (Node.js + Express)
│   ├── src/
│   │   ├── index.js        # Inicialização do servidor
│   │   ├── app.js          # Configuração principal da API
│   │   ├── routes.js       # Rotas e endpoints
│   │   └── controllers/
│   │       └── tarefaController.js
│   ├── tests/
│   │   └── api.test.js     # Testes automatizados da API
│   ├── package.json
│   ├── Dockerfile
│   └── jest.config.js
│
├── web/                    # Frontend (PWA)
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.webmanifest
│   │   └── icons/
│   ├── js/
│   │   ├── app.js
│   │   ├── popup.js
│   │   └── serviceWorker.js
│   ├── css/
│   │   └── style.css
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml      # Orquestração dos containers
└── README.md

Tecnologias Utilizadas
Área	Tecnologias
Backend	Node.js, Express
Frontend (PWA)	HTML5, CSS3, JavaScript ES6
Testes	Jest, Supertest
Containerização	Docker, Docker Compose
CI/CD	GitHub Actions
Outros	Nodemon, Serve
⚙️ Instalação e Execução Local
1. Clonar o repositório
git clone https://github.com/seu-usuario/pwa-project-final.git
cd pwa-project-final

2. Instalar dependências da API
cd api
npm install

3. Rodar a API em modo desenvolvimento
npm run dev


A API estará disponível em:
➡️ http://localhost:3000

4. Rodar o frontend

Em outro terminal:

cd ../web
npm install -g serve
serve public


O PWA será servido em:
➡️ http://localhost:5000
 (ou a porta mostrada no terminal)

Testes Automatizados
Rodar os testes da API:
cd api
npm test


Exemplo de saída esperada:

 PASS  tests/api.test.js
  ✓ Deve retornar mensagem de status da API (40 ms)
  ✓ Deve criar uma nova tarefa (28 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total

Execução com Docker
1. Construir e subir os containers:
docker-compose up --build


Isso criará e executará dois containers:

pwa_api → backend na porta 3000

pwa_web → frontend servido via serve

2. Acessar no navegador:
http://localhost:3000

🔁 Reiniciando o projeto após desligar o PC

Quando reiniciar o computador e quiser subir o projeto novamente:

cd C:\Users\User\pwa-project-final
docker-compose up


(não é necessário reconstruir com --build toda vez, apenas se houver mudanças no código)

Para testar novamente:

cd api
npm test

CI/CD (GitHub Actions)

O projeto inclui pipeline automatizado que:

Executa testes (npm test)

Constrói os containers Docker

Faz deploy (caso configurado no futuro)

Exemplo de arquivo .github/workflows/ci.yml:

name: CI Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies and test API
        run: |
          cd api
          npm install
          npm test

      - name: Build Docker images
        run: docker-compose build

API - Endpoints
Método	Endpoint	Descrição
GET	/api	Retorna mensagem de status da API
GET	/api/tarefas	Lista todas as tarefas
POST	/api/tarefas	Cria uma nova tarefa
DELETE	/api/tarefas/:id	Remove uma tarefa pelo ID
PWA - Funcionalidades

Interface simples de tarefas

Suporte offline via Service Worker

Instalação no dispositivo (manifest)

Comunicação com a API para CRUD de tarefas

Desenvolvedor

Nome: Luiz Otávio Portes Avelar
Curso: Ciência da Computação – 2º semestre
Projeto: Trabalho Final Bootcamp
Ano: 2025