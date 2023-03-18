import express, { Router } from "express"
import requireAuth from "../authMiddleware.js"
import { allBlog, create, createBlog } from "../controller/blog_control.js"
import path from 'path'

const router = Router()
router.use(express.json())
router.use('/public', express.static(path.resolve('public')));

router.get("/", allBlog)
router.get("/create/:token",requireAuth, create)
router.post("/createBlog/:token", requireAuth, createBlog)


export default router