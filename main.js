const apiai = require('apiai');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log("param", req.body);
    res.send('ok');
})

app.get('/', (req, res) => {
    res.send('ok done')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log('App started! Listening on port: ', port)}
);
