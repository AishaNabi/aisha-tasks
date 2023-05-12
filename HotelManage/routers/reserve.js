import { Router } from "express";
import { reserve, cancelR, allRes, availableRes } from '../controls/reserveControl.js'
import requireAuth from '../auth.js'

const r = Router()

r.post('/reserveRoom', requireAuth, reserve)
r.put('/cancelReserve/:roomNumber', requireAuth, cancelR)
r.get('/reservedRooms', requireAuth, allRes)
r.put('/makeRoomAvailable/:roomNumber', requireAuth, availableRes)

export default r