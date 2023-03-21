import { Router } from "express";
import { signUp, signIn } from "../controls/userControl.js";

const r = Router()

r.post('/sign-up', signUp)
r.post('/sign-in', signIn)


export default r