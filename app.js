const express = require('express')
const mongoose = require('mongoose')
const app = express();

const apiRouter = require('./routes/apiRouter.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// mongoose.connect('mongodb+srv://steph:steph@cluster0.rcrm2ld.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect('mongodb://127.0.0.1:27017/facturationdb')
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.use('/api', apiRouter);

app.listen(3000, () => {
console.log('App listening on port 3000!')
});