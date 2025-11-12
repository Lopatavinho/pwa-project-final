document.getElementById("sendMessage").addEventListener("click", () => {
  chrome.runtime.sendMessage({ message: "Olá do Popup!" }, response => {
    alert("Resposta do background: " + response.reply);
  });
});
