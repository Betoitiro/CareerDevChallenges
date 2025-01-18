const express = require("express");
const router = express.Router(); // Corrigido: cria uma instância de roteador

// Sub-rotas
router.use("/api/users", require("./UserRoutes"));
// Rota de teste
router.get("/", (req, res) => {
    res.send("API working");
});

module.exports = router; // Exporta o roteador corretamente
