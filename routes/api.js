const express = require("express");
const router = express.Router();

let waitingResolvers = [];
let currentCommand = "";
let commandId = "";

router.post("/set_command", async (req, res) => {
    const { command } = req.body;

    if (!command) {
        return res.status(400).json({ error: "Comando não fornecido" });
    }

    commandId = Date.now().toString();
    currentCommand = command;

    // Espera o resultado do client
    try {
        const result = await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject("timeout");
            }, 30000); // timeout de 15s

            waitingResolvers.push((output) => {
                clearTimeout(timeout);
                resolve(output);
            });
        });

        res.json({ id: commandId, result: result });
    } catch (err) {
        res.status(504).json({ error: "Tempo esgotado aguardando resultado" });
    }
});

router.get("/get_command", (req, res) => {
    res.json({ id: commandId, command: currentCommand });
});

router.post("/send_result", (req, res) => {
    const { result } = req.body;

    if (!result) return res.status(400).json({ error: "Sem resultado" });

    while (waitingResolvers.length > 0) {
        const resolve = waitingResolvers.shift();
        resolve(result); // entrega o resultado para quem está esperando
    }

    currentCommand = ""; // limpa
    commandId = "";
    res.json({ status: "resultado recebido" });
});

module.exports = router;
