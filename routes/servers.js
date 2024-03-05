/*import {Router} from "express"
import {getAll, create, deleteEl} from "../controllers/servers.js"
const router = Router()*/
const Router = require('express')
const router = Router()
const controllers = require('../controllers/servers.js')

router.get('/api/server', controllers.getAll)
router.post('/api/server', controllers.create)
router.delete('/api/server/:id', controllers.deleteEl)
module.exports = router