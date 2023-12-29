import servers from "../routes/servers.js";

let settings = [{
    plannerHeight: 170,
    plannerWidth: 500,
    isStandart: false,
    kanbanH: 200,
    kanbanW: 300,
    isStandartKanaban: false,
}];

export const getAll = (req, res) => {
    res.status(200).json(settings)
}

export const deleteEl = (req, res) => {
    settings = settings.filter(s => s.id !== req.params.id)
    res.json({message: 'server deleted element'})
}

export const create = (req, res) => {
    const newServer = {
        id: Date.now().toString(),
        ...req.body
    }
    settings.push(newServer)
    res.status(201).json(settings)
}