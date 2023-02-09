const Client = require("../models/clients");

const clientController = {
  async getAll() {
    const clients = await Client.find();
    return clients;
  },

  async getOne(id) {
    const client = await Client.findOne({idClient: id});
    return client;
  },
  
  async postOne(body) {
    const client = await Client.create(body);
    return client;
  },

  async putOne(id, body) {
    const client = await Client.findOneAndUpdate({idClient: id}, body,{new: true});
    return client;
  },

  async deleteOne(id) {
    const client = await Client.deleteOne({idClient: id});
    return client;
  }
}

module.exports = clientController;