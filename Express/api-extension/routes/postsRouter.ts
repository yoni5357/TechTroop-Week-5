import express from 'express'
import postsController from '../controllers/postsController';
const router = express.Router();

router.get("/:id", postsController.getPostById);
router.get("/:id/comments", postsController.getPostComments);
router.put("/:postId/comments/:commentId", postsController.updateComment)

export default router
