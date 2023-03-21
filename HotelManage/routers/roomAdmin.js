import { Router } from "express";
import requireAuth from "../auth.js";
import { createR, updateR, deleteR } from '../controls/roomControl.js'

const r = Router()

r.post('/room', requireAuth , createR)
r.put('/room/:id', requireAuth , updateR)
r.delete('/room/:id', requireAuth , deleteR)

export default r