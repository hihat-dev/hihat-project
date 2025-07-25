const express = require("express");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const dataPath = path.join(__dirname, "../json/user.json");
const users = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../static/html/login.html"));
});

router.post("/login", async (req, res) => {
    const { user, pass } = req.body;
    const foundUser = users.find(u => u.user === user);

    if (!foundUser) {
        return res.status(401).send("Usuário inválido");
    }

    const match = await bcrypt.compare(pass, foundUser.pass);

    if (match) {
        req.session.autenticado = true;
        req.session.user = user;
        res.redirect("/home");
    } else {
        res.status(401).send("Senha incorreta");
    }
});

router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});

module.exports = router;
