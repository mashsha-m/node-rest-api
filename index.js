import express from 'express'
import path from 'path'
import {requestTime, sayHi} from './middlewares.js'
import serverRoutes from './routes/servers.js'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))
//console.log(app.get('views'))

app.use(express.static(path.resolve(__dirname, 'client')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(requestTime)
//app.use(sayHi)

app.use(serverRoutes)
app.get('/', (req, res) => {
    res.render('index', {title: 'this is title'})
})
app.get('/next', (req, res) => {
    res.render('next')
})
app.get('/form', (req, res) => {
    res.render('form')
})
/*app.get('/next', (req, res) => {
    //console.log(req.requestTime)
    res.sendFile(path.resolve(__dirname, 'client', 'next.html'))
    //res.download(path.resolve(__dirname, 'client', 'next.html')) - скачать указанную страницу
})*/
app.listen(PORT, () => {
    console.log("сервер сервер "+PORT)
})