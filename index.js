const http = require('http');
const express = require('express');
const fetch = require('node-fetch')
const serverRoutes = require('./routes/servers.js')

const app = express()
app.use(express.json())
app.use(serverRoutes)

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('Hello World! -Маша');
});

let router = express.Router()

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.post('/node/webhookMethod', async function(req, res) {

    let webhook = req.body.webhook;
    let method = req.body.method;
    let params = req.body.params;
    try {
        const response = await fetch(webhook+method, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await response.json();
        res.status(201).json(data);
    }
    catch (e) {
        res.status(400).json(e.message)
    }

});

router.route('/autoPM/')
    .get(function (req, res, next) {
        //res.json(req.params)
        res.send('Hi, application~')
        //res.sendFile(path.resolve(__dirname, 'client', 'next.html'))
    })
    .post(function(req, res) {
        res.send('Add a book');
        res.json()
    })
/*app.get('/next', (req, res) => {
    //console.log(req.requestTime)
    res.sendFile(path.resolve(__dirname, 'client', 'next.html'))
    //res.download(path.resolve(__dirname, 'client', 'next.html')) - скачать указанную страницу
})*/
app.use(router)

app.listen(3000);