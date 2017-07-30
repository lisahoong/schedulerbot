const apiai = require('apiai');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log("param", req.body);
    res.send(req.body.challenge);
})

app.post('/bot', (req, res) => {
    console.log('***body', req.body);
    console.log('DID I GET HITTT?!?!?!?!?');
    res.json({
        "speech": "wait is this working?",
        "displayText": "this should be some response dispaly text",
        "data": {"slack": "this message is for sack"}
    });
})

app.get('/', (req, res) => {
    res.send('ok done')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log('App started! Listening on port: ', port)}
);
