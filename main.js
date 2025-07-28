const express = require("express");
const session = require("express-session");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));
app.use(express.json());

app.use(session({
    secret: "blackhatsecret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 }
}));

const authRoutes = require("./routes/auth");
const painelRoutes = require("./routes/painel");
const {
    router: apiRoutes,
    setLastClient,
    handleResult,
    notifyNewComputer
} = require("./routes/api");


app.use("/", authRoutes);
app.use("/", painelRoutes);
app.use("/", apiRoutes);

//functions

wss.on("message", function incoming(message) {
    try {
        const data = JSON.parse(message);

        if (data.result) {
            console.log("[send_result - WS] Resultado recebido:", data.result);
            handleResult(data.result);
        } else if (data.type === "screen") {
            // Envie para a interface Web ou salve em cache
            ws.latestImage = data.image;
        }
    } catch (err) {
        console.log("Erro ao processar mensagem do cliente:", err);
    }
});

wss.on("connection", function connection(ws) {
    console.log("Cliente conectado via WebSocket");
    setLastClient(ws);

    const computerId = Date.now();
    const computerInfo = {
        id: computerId,
        ip: "IP_desconhecido",
        lab: "outros",
        status: "online"
    };

    notifyNewComputer(wss, computerInfo);

    ws.on("message", function incoming(message) {
        try {
            const data = JSON.parse(message);
            if (data.result) {
                console.log("[send_result - WS] Resultado recebido:", data.result);
                handleResult(data.result);
            }
        } catch (err) {
            console.log("Erro ao processar mensagem do cliente:", err);
        }
    });

    ws.on("close", () => {
        console.log("Cliente desconectado");
    });
});



server.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando em http://localhost:${PORT} com WebSocket`);
});
