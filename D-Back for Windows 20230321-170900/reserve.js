import { Router } from "express";
import { } from '../controls/reserveControl.js'
import requireAuth from '../auth.js'

const r = Router()

r.post('/reserveRoom', requireAuth, reserve)

export default r