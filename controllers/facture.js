const Facture = require("../models/factures");

const factureController = {
  async getAll() {
    const factures = await Facture.find();
    return factures;
  },

  async getOne(id) {
    const facture = await Facture.findOne({ idFacture: id });
    return facture;
  },

  async getPaid(isPaid) {
    const factures = await Facture.find({ paiement: isPaid });
    return factures;
  },

  async postOne(body) {
    const facture = await Facture.create(body);
    return facture;
  },

  async putOne(id, body) {
    const facture = await Facture.findOneAndUpdate({ idFacture: id }, body, {
      new: true,
    });
    return facture;
  },

  async deleteOne(id) {
    const facture = await Facture.deleteOne({ idFacture: id });
    return facture;
  },
};

module.exports = factureController;
