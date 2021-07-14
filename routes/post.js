import { Router } from 'express'
import * as controllers from '../controllers/posts.js'

const router = Router()

router.get('/posts', controllers.getPosts)
router.get('/posts/:id', controllers.getPosts)
router.post('/posts', controllers.createPosts)
router.put('/posts/:id', controllers.updatePosts)
router.delete('/posts/:id', controllers.deletePosts)

export default router