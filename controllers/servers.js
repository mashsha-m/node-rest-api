let settings = {
    plannerHeight: 170,
    plannerWidth: 500,
    isStandart: false,
    kanbanH: 200,
    kanbanW: 300,
    isStandartKanaban: false,
};

export const getAll = (req, res) => {
    res.status(200).json(settings)
}