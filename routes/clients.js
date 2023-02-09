const express = require("express");
const clientRouter = express.Router();
const clientController = require("../controllers/client");

// route getAll
clientRouter.get("/", async (req, res) => {
  const clients = await clientController.getAll();
  res.send(clients);
});

// route getOne
clientRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const client = await clientController.getOne(id);
  res.send(client);
});

// route postOne
clientRouter.post("/", async (req, res) => {
  const body = req.body;
  const client = await clientController.postOne(body);
  res.send(client);
});

// route putOne
clientRouter.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const client = await clientController.putOne(id, body);
  res.send(client);
});

// route deleteOne
clientRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const client = await clientController.deleteOne(id);
  res.send(client);
});

module.exports = clientRouter;

// faire le getAll, getOne, postOne, putOne, deleteOne
