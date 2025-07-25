const express = require("express")
const session = require("express-session");
const app = express()
const PORT = 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.static("static"))
app.use(express.json());


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

const apiRoutes = require("./routes/api");
app.use("/", apiRoutes);



app.listen(PORT, () => {
    console.log(`Servidor rodando no http://localhost:${PORT}`)
})