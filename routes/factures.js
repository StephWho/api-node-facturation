const express = require("express");
const factureRouter = express.Router();
const factureController = require("../controllers/facture");

// route getAll
factureRouter.get("/", async (req, res) => {
  const factures = await factureController.getAll();
  res.send(factures);
});


// route getOne
factureRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const facture = await factureController.getOne(id);
  res.send(facture);
});

// route getPaid
factureRouter.get("/paid/:isPaid", async (req, res) => {
  const isPaid = req.params.isPaid;
  const factures = await factureController.getPaid(isPaid);
  res.send(factures);
});

// route postOne
factureRouter.post("/", async (req, res) => {
  const body = req.body;
  const facture = await factureController.postOne(body);
  res.send(facture);
});

// route putOne
factureRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const facture = await factureController.putOne(id, body);
  res.send(facture);
});

// route deleteOne
factureRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const facture = await factureController.deleteOne(id);
  res.send(facture);
});

module.exports = factureRouter;

// faire le getAll, getOne, postOne, putOne, deleteOne