import { Router } from "express";
import { allR, rById, availableR } from '../controls/roomControl.js'

const r = Router()

r.get('/room', allR)
r.get('/room/:id', rById)
r.get('/room/available', availableR)


export default r