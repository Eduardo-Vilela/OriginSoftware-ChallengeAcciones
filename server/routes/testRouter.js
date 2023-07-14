import express from 'express';
import * as serviceTestPosts from '../services/testServices.js'

const router = express.Router()

router.get('/', serviceTestPosts.getAllProducts)
router.get('/:id', serviceTestPosts.getFindProduct)
router.post('/', serviceTestPosts.addPost)
router.put('/update',serviceTestPosts.updateProduct)


export default router