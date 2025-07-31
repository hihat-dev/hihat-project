let computerId = null;
let computerLab = new URLSearchParams(window.location.search).get("lab") || "lab1";

// Esperar o carregamento antes de ativar os comandos
fetch("/api/connected_clients")
  .then(res => res.json())
  .then(data => {
    const clients = data.clients || [];
    const urlParamId = new URLSearchParams(window.location.search).get("id");

    if (!urlParamId || !clients.includes(urlParamId)) {
      if (clients.length === 0) {
        alert("Nenhum cliente conectado.");
        window.location.href = "/painel";
        return;
      }
      computerId = clients[0];
    } else {
      computerId = urlParamId;
    }

    document.getElementById("computer-title").textContent =
      `Computador ${computerId} - ${computerLab.toUpperCase()}`;

    // ✅ Agora que o ID está carregado, ativar eventos
    document.getElementById("command-input").addEventListener("keydown", handleCommand);
    document.getElementById("command-input").focus();
  });

function executeCommand() {
  if (!computerId) {
    alert("Nenhum computador selecionado.");
    return;
  }

  const input = document.getElementById("command-input");
  const output = document.getElementById("terminal-output");
  const command = input.value.trim();
  if (!command) return;

  const commandDiv = document.createElement("div");
  commandDiv.innerHTML = `<span style="color: #ffffff;">$ ${command}</span>`;
  output.appendChild(commandDiv);

  fetch("/set_command", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ command, clientId: computerId })
  })
    .then(res => res.json())
    .then(data => {
      const responseDiv = document.createElement("div");
      if (data?.result) {
        responseDiv.innerHTML = `<span style="color: var(--accent-primary);">${data.result}</span>`;
      } else {
        responseDiv.innerHTML = `<span style="color: var(--danger);">Erro: ${data.error || "desconhecido"}</span>`;
      }
      output.appendChild(responseDiv);
    })
    .catch(err => {
      const errorDiv = document.createElement("div");
      errorDiv.innerHTML = `<span style="color: var(--danger);">Erro: ${err.message}</span>`;
      output.appendChild(errorDiv);
    })
    .finally(() => {
      const breakDiv = document.createElement("div");
      breakDiv.innerHTML = "<br>";
      output.appendChild(breakDiv);
      input.value = "";
      output.scrollTop = output.scrollHeight;
    });
}

function handleCommand(event) {
  if (event.key === "Enter") {
    executeCommand();
  }
}

function restartComputer() {
  if (confirm(`Tem certeza que deseja reiniciar o computador ${computerId}?`)) {
    document.getElementById("command-input").value = "sudo reboot";
    executeCommand();
  }
}

function shutdownComputer() {
  if (confirm(`Tem certeza que deseja desligar o computador ${computerId}?`)) {
    document.getElementById("command-input").value = "sudo shutdown -h now";
    executeCommand();
  }
}
