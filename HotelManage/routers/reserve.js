import { Router } from "express";
import { reserve, cancelR } from '../controls/reserveControl.js'
import requireAuth from '../auth.js'

const r = Router()

r.post('/reserveRoom', requireAuth, reserve)
r.put('/cancelReserve/:roomNumber', requireAuth, cancelR)

export default r