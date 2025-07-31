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
// main.js - logo após const knownClients = new Map();
const { setLastClient, handleResult, notifyNewComputer, router: apiRoutes } = require("./routes/api");

const knownClients = new Map();
// Injete knownClients no módulo api via propriedade (para ser usado lá)
const apiModule = require("./routes/api");
apiModule.setKnownClients(knownClients);

// depois mantenha seu app.use:
app.use("/", authRoutes);
app.use("/", painelRoutes);
app.use("/", apiRoutes);

// Mapa para gerenciar clientes registrados

wss.on("connection", (ws, req) => {
  console.log("Nova conexão WebSocket");

  ws.on("message", (msg) => {
    try {
      const data = JSON.parse(msg);

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
          status: "online"
        };

        notifyNewComputer(wss, computerInfo); // <-- aqui é o servidor, correto
        return;
      }

      if (data.role === "panel") {
        ws.role = "panel";
        console.log("Conexão do painel registrada");

        const onlineComputers = [];
        knownClients.forEach((clientwss, clientId) => {
          if (clientwss.readyState === WebSocket.OPEN) {
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

      if (ws.role === "client") {
        if (data.type === "result" && data.output) {
          console.log(`[resultado] Cliente ${ws.client_id}:`, data.output);
          handleResult(data.output);
        } else if (data.type === "screen" && data.image) {
          ws.latestImage = data.image;
          // Agora aqui acessamos o servidor WebSocket correto para iterar clientes
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
  const clients = Array.from(knownClients.keys());
  res.json({ clients });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
