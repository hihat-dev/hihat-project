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
const { router: apiRoutes, setLastClient, handleResult, notifyNewComputer } = require("./routes/api");

app.use("/", authRoutes);
app.use("/", painelRoutes);
app.use("/", apiRoutes);

// Mapa para gerenciar clientes registrados e evitar duplicatas
const knownClients = new Map();

wss.on("connection", (ws, req) => {
  console.log("Nova conexão WebSocket");

  ws.on("message", (msg) => {
    try {
      const data = JSON.parse(msg);
      // Cliente Python se identifica enviando {type:"id", id:"cliente_id"}
      if (data.type === "id" && data.id) {
        ws.role = "client";
        ws.client_id = data.id;
        knownClients.set(ws.client_id, ws);
        setLastClient(ws);
        console.log("Cliente Python registrado:", ws.client_id);

        const computerInfo = {
          id: ws.client_id,
          ip: ws.client_id,
          lab: "outros",
          status: "online",
        };

        // Notifica os painéis de novo computador conectado
        notifyNewComputer(wss, computerInfo);
        return;
      }

      // Painel web se identifica com {role:"panel"}
      if (data.role === "panel") {
        ws.role = "panel";
        console.log("Conexão do painel registrada");

        // Envia a lista atual de computadores online para o painel que acabou de conectar
        const onlineComputers = [];
        knownClients.forEach((clientWs, clientId) => {
          if (clientWs.readyState === WebSocket.OPEN) {
            onlineComputers.push({
              id: clientId,
              ip: clientId,
              lab: "outros",
              status: "online"
            });
          }
        });

        ws.send(JSON.stringify({
          type: "current_computers",
          computers: onlineComputers
        }));

        return;
      }

      // Mensagens enviadas por clientes Python
      if (ws.role === "client") {
        if (data.type === "result" && data.output) {
          console.log(`[resultado] Cliente ${ws.client_id}:`, data.output);
          handleResult(data.output);
        } else if (data.type === "screen" && data.image) {
          ws.latestImage = data.image;
          wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN && client.role === "panel") {
              client.send(JSON.stringify({
                type: "screen",
                client_id: ws.client_id,
                image: data.image
              }));
            }
          });
        }
      }
    } catch (err) {
      console.error("Erro ao processar mensagem:", err);
    }
  });

  ws.on("close", () => {
    if (ws.role === "client" && ws.client_id) {
      knownClients.delete(ws.client_id);
      console.log(`Cliente Python desconectado: ${ws.client_id}`);
    } else {
      console.log("Conexão fechada");
    }
  });
});

app.get("/api/connected_clients", (req, res) => {
  const clients = Array.from(knownClients.keys()); // só os ids
  res.json({ clients });
});


server.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
