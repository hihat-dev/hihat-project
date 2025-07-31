const socket = new WebSocket("wss://hihat.onrender.com/wss");

socket.addEventListener("open", () => {
  console.log("✅ Conectado ao WebSocket");

  // Se o painel precisa se identificar
  socket.send(JSON.stringify({
    type: "role",
    role: "panel"
  }));
});

socket.addEventListener("message", (event) => {
  try {
    const message = JSON.parse(event.data);

    if (message.type === "new_computer") {
      addComputerToGrid(message.computer);
    }
  } catch (err) {
    console.error("Erro ao processar mensagem:", err);
  }
});

function addComputerToGrid(computer) {
  const container = document.getElementById("computers-outros");
  if (!container) return;

  // Evita duplicatas
  if (document.getElementById(`computer-${computer.id}`)) return;

  const card = document.createElement("div");
  card.className = "computer-card";
  card.id = `computer-${computer.id}`;
  card.innerHTML = `
    <h3>${computer.id}</h3>
    <p><strong>Lab:</strong> ${computer.lab || "outros"}</p>
    <div class="actions">
      <button class="btn-primary" onclick="openComputerControl(${JSON.stringify(computer)})">
        <i class="fas fa-terminal"></i> Controlar
      </button>
    </div>
  `;
  container.appendChild(card);
}
