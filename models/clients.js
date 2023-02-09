const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    idClient: { type: String, required: true },
    nomClient: { type: String, required: true },
    emailClient: { type: String, required: true },
  },
  { versionKey: false } // évite la création du _v lors de la création du client
);

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
