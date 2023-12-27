const express = require('express')
const path = require('path')
const {v4} = require('uuid') //потом просто при генерации id'шников писать вместо переменных v4()
const app = express()

app.use(express.json())

//GET
app.get('/api/contacts', (req, res) => {

})
//POST
app.post('/api/contacts', (req, res) => {
    //создаем переменную с данными, которые к нам пришли и отправляем её в базу
    res.json({test: 1})
})
//DELETE
app.delete('/api/contacts/:id', (req, res) => {
    //как-то он перебирает через filter все данные на сравнение, но вытаскивает этот id как req.params.id
    //элемент удаляется на фронте
    res.status(200).json({message: 'Запись была удалена'})
})
//PUT
app.put('/api/contacts/:id', (req, res) => {
    //с помощью findIndex находит запись по Id, вставляет данные (в качестве новых данных), используя id как ключ
    res.json(/*  элемент по ключу  */)
})

app.use(express.static(path.resolve(__dirname, 'client')))
app.get('*', (req, res) => {
    //setTimeout(() => {
        res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
    //}, 2000)
})
app.listen(3000, () => {
    console.log("Server has been started on port 3000...")
})