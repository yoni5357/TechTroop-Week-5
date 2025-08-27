import express from 'express'
import postsController from '../controllers/postsController';
const router = express.Router();

router.get("/:id", postsController.getPostById);

export default router
