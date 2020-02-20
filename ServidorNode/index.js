const express = require('express');
const apiRoute = require('./Routes/routes')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/api', apiRoute);


app.listen('3000','192.168.1.5', ()=>console.log(`Server running on port 3000`));
