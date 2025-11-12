// web/src/main.js

const apiUrl = import.meta?.env?.VITE_API_URL || "http://localhost:3000";

async function carregarMensagem() {
  try {
    const response = await fetch(`${apiUrl}/api`);
    const data = await response.json();

    const mensagem = document.createElement("p");
    mensagem.textContent = `Mensagem da API: ${data.message}`;
    document.body.appendChild(mensagem);
  } catch (err) {
    console.error("Erro ao conectar com a API:", err);
    const erro = document.createElement("p");
    erro.textContent = "❌ Não foi possível conectar à API.";
    document.body.appendChild(erro);
  }
}

window.addEventListener("DOMContentLoaded", carregarMensagem);
