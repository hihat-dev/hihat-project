const express = require("express");
const router = express.Router();

let currentCommand = {
    id: null,
    command: null,
    result: null
};

router.post("/set_command", (req, res) => {
    const { command } = req.body;
    const id = Date.now().toString();
    currentCommand = { id, command, result: null };
    res.json({ status: "comando recebido", id });
});

router.get("/get_command", (req, res) => {
    res.json({ id: currentCommand.id, command: currentCommand.command });
});

router.post("/send_result", (req, res) => {
    const { id, result } = req.body;
    if (id === currentCommand.id) {
        currentCommand.result = result;
    }
    res.json({ status: "resultado recebido" });
});

router.get("/get_result", async (req, res) => {
    const { id } = req.query;
    const start = Date.now();

    // Espera até 10s o resultado
    while (!currentCommand.result && (Date.now() - start < 10000)) {
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    if (id !== currentCommand.id) {
        return res.status(404).json({ error: "ID não encontrado" });
    }

    if (currentCommand.result) {
        const r = currentCommand.result;
        // Limpa após entregar
        currentCommand = { id: null, command: null, result: null };
        return res.json({ result: r });
    } else {
        return res.status(408).json({ error: "timeout esperando resposta" });
    }
});

module.exports = router;
