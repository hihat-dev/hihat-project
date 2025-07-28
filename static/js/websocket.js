const socket = new WebSocket("ws://localhost:8000");

socket.addEventListener("message", (event) => {
  const data = JSON.parse(event.data);
  if (data.type === "new-computer") {
    addUnknownComputer(data.computer.id);
  }
});
