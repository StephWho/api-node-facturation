const express = require('express');
const clientRouter = require('./clients');
const factureRouter = require('./factures');
const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
res.send('Bienvenue dans /api');
});

apiRouter.use('/clients', clientRouter);
apiRouter.use('/factures', factureRouter);

module.exports = apiRouter;