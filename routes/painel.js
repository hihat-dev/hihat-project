const express = require("express");
const path = require("path")
const router = express.Router();

// Middleware de proteção
function isAutenticado(req, res, next) {
    if (req.session.autenticado) {
        next();
    } else {
        res.redirect("/");
    }
}

router.get("/home", isAutenticado, (req, res) => {
    res.sendFile((path.join(__dirname, "../static/html/index.html")));
});

module.exports = router;
