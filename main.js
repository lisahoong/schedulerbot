const apiai = require('apiai');
const express = require('express');

const app = express();

app.post('/:challenge', (req, res) => {
    console.log("param", req.params.challenge);
    res.send(req.params.challenge);
})

app.get('/', (req, res) => {
    res.send('ok done')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log('App started! Listening on port: ', port)}
);
