import {Router} from "express"
import {getAll, create, deleteEl} from "../controllers/servers.js"
const router = Router()

router.get('/api/server', getAll)
router.post('/api/server', create)
router.delete('/api/server/:id', deleteEl)
export default router