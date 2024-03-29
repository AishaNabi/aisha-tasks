import express, { Router } from 'express'
import { home_p, getAll, createData, viewBook, created } from '../controller/book_control.js'
import multer from '../multers/book_multer.js'
import requireAuth from '../authMiddleware.js'
import path from 'path'


const router = Router()
router.use(express.json())
router.use('/public', express.static(path.resolve('public')));

router.get('/', home_p)
router.get('/books', getAll)
router.get('/books/:id', viewBook)
router.get('/book-create/:token', requireAuth, created)
router.post('/createBook/:token', requireAuth, multer.single('bookFile'), createData)
// router.put('/:id', updateById)
// router.delete('/:id', deleteById)

export default router