import { Router } from 'express'
import { signGet, signUp, loginGet, logIn, profile } from '../controller/user_control.js'
import multer from '../multers/photo_multer.js'
import requireAuth from '../authMiddleware.js'

const router = Router()

router.get('/signup', signGet)
router.post('/signup', multer.single('photo'), signUp)
router.get('/login', loginGet)
router.post('/login', logIn)
router.get('/profile/:token', requireAuth, profile)
// router.put('/:id', updateById)
// router.delete('/:id', deleteById)

export default router