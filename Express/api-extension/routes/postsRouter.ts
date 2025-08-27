import express from 'express'
import postsController from '../controllers/postsController';
const router = express.Router();

router.get("/:id", postsController.getPostById);
router.get("/:id/comments", postsController.getPostComments);
router.put("/:postId/comments/:commentId", postsController.updateComment);
router.post("/", postsController.addPost );
router.delete("/:id", postsController.deletePostById);
router.delete("/:postId/comments/:commentId", postsController.deleteCommentById);

export default router
