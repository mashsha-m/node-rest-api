const servers = require('../routes/servers.js')

let settings = [{
    plannerHeight: 170,
    plannerWidth: 500,
    isStandart: false,
    kanbanH: 200,
    kanbanW: 300,
    isStandartKanaban: false,
}];

const getAll = (req, res) => {
    res.status(200).json(settings)
}

const deleteEl = (req, res) => {
    settings = settings.filter(s => s.id !== req.params.id)
    res.json({message: 'server deleted element'})
}

const create = (req, res) => {
    const newServer = {
        id: Date.now().toString(),
        ...req.body
    }
    settings.push(newServer)
    res.status(201).json(settings)
}

module.exports = {
    getAll,
    deleteEl,
    create,
    settings
}