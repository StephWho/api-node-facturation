const mongoose = require("mongoose");

const factureSchema = new mongoose.Schema(
  {
    idFacture: { type: String, required: true },
    montant: { type: Number, required: true },
    paiement: { type: Boolean, required: true },
    idClient: { type: String, required: true },
  },
  { versionKey: false } // évite la création du _v lors de la création de la facture
);

const Facture = mongoose.model("Facture", factureSchema);

module.exports = Facture;
