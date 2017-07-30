import apiai from 'apiai';
import express from 'express';

const app = express();

app.get('/', (req, res) {
    res.send('ok done')
})

const port = process.env.PORT || 3000;
app.listen(port,
    (port) => {console.log('App started! Listening on port: ', port)}
);
